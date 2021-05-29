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
    dispatchRequest: this.userModel.dispatch.loadUsers.fetch,
    dispatchRequestCancel: this.userModel.dispatch.loadUsers.cancel,
    requestSuccess$: this.userModel.listen.loadUsers.success,
    requestFailure$: this.userModel.listen.loadUsers.fail,
    dependencies: [this.reloadUsers$]
  };

  bundles:IResolveBundle[] = [this.bundleLoadAllUsers];

  constructor(private userModel: UserModel) { }

  reloadBtnHandler(): void {
    this.reloadUsers$.next(undefined)
  }
  clearUserListBtnHandler(): void {
    this.userModel.dispatch.loadUsers.clear();
    // this.userModel.dispatch.selectedUser.clear();
  }
  ngOnDestroy() {
    this.userModel.dispatch.selectedUser.clear();
    this.reloadUsers$.complete();
  }
}
