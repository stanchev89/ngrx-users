import { Directive, Input, OnDestroy } from '@angular/core';
import { IResolveBundle } from '../interfaces/IResolveBundle';
import { combineLatest, race, Subject } from 'rxjs';
import { mapTo, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[dbResolve]',
  exportAs: 'dbResolve'
})
export class ResolveDirective implements OnDestroy {

  private destroySubscriptions = new Subject();
  private isResolvingByIndex: { [key: number]: boolean } = {};
  private dispatchCancelList = [] as (() => void)[];
  private errors = [] as boolean[];

  get hasError(): boolean {
    return this.errors.includes(true);
  }

  get isResolving(): boolean {
    return Object.values(this.isResolvingByIndex).includes(true);
  }


  @Input() set dbResolve(bundles: IResolveBundle[]) {
    this.errors = bundles.map(() => false);
    this.dispatchCancelList = [];
    this.destroySubscriptions.next();

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < bundles.length; i++) {
      const bundle = bundles[i];
      this.errors[i] = false;
      this.dispatchCancelList.push(bundle.dispatchRequestCancel);

      this.isResolvingByIndex[i] = false;
      if (bundle.dependencies) {
        combineLatest(bundle.dependencies).pipe(
          takeUntil(this.destroySubscriptions)
        ).subscribe(deps => {
          this.isResolvingByIndex[i] = true;
          bundle.dispatchRequest(deps);
        });
      } else {
        this.isResolvingByIndex[i] = true;
        bundle.dispatchRequest();
      }

      race(
        bundle.requestSuccess$.pipe(mapTo(true)),
        bundle.requestFailure$.pipe(mapTo(false))
      ).pipe(takeUntil(this.destroySubscriptions)).subscribe(result => {
        this.errors[i] = !result;
        this.isResolvingByIndex[i] = false;
      });

    }

  }

  ngOnDestroy(): void {
    this.destroySubscriptions.next();
    this.destroySubscriptions.complete();

    for (const dispatchCancel of this.dispatchCancelList) {
      dispatchCancel();
    }
  }
}
