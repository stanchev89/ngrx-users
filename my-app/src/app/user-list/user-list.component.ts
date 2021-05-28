import {Component} from '@angular/core';
import {UserModel} from "../+store/model/userModel";
import {IUser} from "../interfaces/IUser";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {IResolveBundle} from "../interfaces/IResolveBundle";
import {of} from "rxjs";



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{
  allUsers$ = this.userModel.select.allUsers$;
  paramsId$ = this.activatedRoute.params.pipe(map(p => p.id));
  selectedUser$ = this.userModel.select.selectedUser$;

  constructor(private userModel: UserModel, private router: Router,private activatedRoute: ActivatedRoute) {
  }

  bundleSelectedUser: IResolveBundle = {
    dispatchRequest: (deps:[]) =>
      deps.forEach((dep: string | number | undefined )=>
        !dep ? of() : this.userModel.dispatch.selectUserFetch(dep))
    ,
    dispatchRequestCancel: this.userModel.dispatch.selectUserCancelFetch,
    requestSuccess$: this.userModel.listenActions.selectedUserSuccess,
    requestFailure$: this.userModel.listenActions.selectedUserFail,
    dependencies: [this.paramsId$]
  };
  bundles:IResolveBundle[] = [this.bundleSelectedUser];

  selectUserHandler(user: IUser): void {
     this.router.navigate(['users',user.id])
  }

}
