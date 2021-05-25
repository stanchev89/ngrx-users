import { Observable } from 'rxjs';

export interface IResolveBundle<
  R extends (...args: any[]) => void = any,
  RS extends (...args: any[]) => void = any,
  RF extends (...args: any[]) => void = any,
  RC extends (...args: any[]) => void = any
  > {
  dispatchRequest: R;
  dispatchRequestCancel: RC;
  requestSuccess$: Observable<RS>;
  requestFailure$: Observable<RF>;
  dependencies?: Observable<any>[];
}
