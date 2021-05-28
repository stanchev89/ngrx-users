import {Component, OnDestroy} from '@angular/core';
import {IResolveBundle} from "../interfaces/IResolveBundle";
import {BehaviorSubject} from "rxjs";
import {UserModel} from "../+store/model/userModel";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnDestroy{
  reloadUsers$ = new BehaviorSubject(undefined);
  dispatchSelectedUser = this.userModel.dispatch.selectUserSuccess;

  bundleAllUsers: IResolveBundle = {
    dispatchRequest: this.userModel.dispatch.loadUsersFetch,
    dispatchRequestCancel: this.userModel.dispatch.loadUsersCancelFetch,
    requestSuccess$: this.userModel.listenActions.loadUsersSuccess,
    requestFailure$: this.userModel.listenActions.loadUsersFail,
    dependencies: [this.reloadUsers$]
  };

  bundles:IResolveBundle[] = [this.bundleAllUsers];

  constructor(private userModel: UserModel) { }

  reloadBtnHandler(): void {
    this.reloadUsers$.next(undefined)
  }
  ngOnDestroy() {
    this.dispatchSelectedUser(undefined);
    this.reloadUsers$.complete();
  }
}
