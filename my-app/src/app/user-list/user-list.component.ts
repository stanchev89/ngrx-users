import {Component} from '@angular/core';
import {UserModel} from "../+store/model/userModel";
import {IUser} from "../interfaces/IUser";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {IResolveBundle} from "../interfaces/IResolveBundle";
import {of} from "rxjs";
import {Connect} from "ngrx-action-bundles";
import {selectUserBundle} from "../+store/actions/userActions";



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
      deps.forEach((dep: string | number )=>
        (!dep || dep === 'list') ? of() : this.userModel.dispatch.selectedUser.fetch({id:dep}))
    ,
    dispatchRequestCancel: this.userModel.dispatch.selectedUser.cancel,
    requestSuccess$: this.userModel.listen.selectedUser.success,
    requestFailure$: this.userModel.listen.selectedUser.fail,
    dependencies: [this.paramsId$]
  };
  bundles:IResolveBundle[] = [this.bundleSelectedUser];

  selectUserHandler(user: IUser): void {
     this.router.navigate(['users',user.id])
  }

}
