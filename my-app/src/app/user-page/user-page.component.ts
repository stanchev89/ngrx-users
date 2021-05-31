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

  bundleLoadAllUsers: IResolveBundle = {
    dispatchRequest: this.userModel.actions.dispatch.loadUsers,
    dispatchRequestCancel: this.userModel.actions.dispatch.loadUsersCancel,
    requestSuccess$: this.userModel.actions.listen.loadUsersSuccess$,
    requestFailure$: this.userModel.actions.listen.loadUsersFailure$,
    dependencies: [this.reloadUsers$]
  };

  bundles:IResolveBundle[] = [this.bundleLoadAllUsers];

  constructor(private userModel: UserModel) { }

  reloadBtnHandler(): void {
    this.reloadUsers$.next(undefined)
  }
  clearUserListBtnHandler(): void {
    this.userModel.actions.dispatch.loadUsersClear();
    // this.userModel.dispatch.selectedUser.clear();
  }
  ngOnDestroy() {
    this.userModel.actions.dispatch.selectUserClear();
    this.reloadUsers$.complete();
  }
}
