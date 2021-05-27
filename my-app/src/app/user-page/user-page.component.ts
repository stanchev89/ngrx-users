import {Component} from '@angular/core';
import {IResolveBundle} from "../interfaces/IResolveBundle";
import {BehaviorSubject} from "rxjs";
import {UserModel} from "../+store/model/userModel";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent{

  reloadUsers$ = new BehaviorSubject(undefined);

  bundleAllUsers: IResolveBundle = {
    dispatchRequest:this.userModel.dispatch.loadUsersFetch,
    dispatchRequestCancel: this.userModel.dispatch.loadUsersCancelFetch,
    requestSuccess$:this.userModel.select.allUsers$,
    requestFailure$: this.userModel.select.error$,
    dependencies: [this.reloadUsers$]
  };



  bundles:IResolveBundle[] = [this.bundleAllUsers];

  constructor(private userModel: UserModel) { }

  reloadBtnHandler(): void {
    this.reloadUsers$.next(undefined);
  }

}
