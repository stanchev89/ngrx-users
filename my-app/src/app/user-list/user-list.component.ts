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
  allUsers$ = this.userModel.selectors.allUsers$;
  paramsId$ = this.activatedRoute.params.pipe(map(p => p.id));

  constructor(private userModel: UserModel, private router: Router,private activatedRoute: ActivatedRoute) {
  }

  bundleSelectedUser: IResolveBundle = {
    dispatchRequest: (deps:[]) =>
      deps.forEach((dep: string | number )=>
        (!dep || dep === 'list') ? of() : this.userModel.actions.dispatch.selectUser({id:dep}))
    ,
    dispatchRequestCancel: this.userModel.actions.dispatch.selectUserCancel,
    requestSuccess$: this.userModel.actions.listen.selectUserSuccess$,
    requestFailure$: this.userModel.actions.listen.selectUserFailure$,
    dependencies: [this.paramsId$]
  };
  bundles:IResolveBundle[] = [this.bundleSelectedUser];

  selectUserHandler(user: IUser): void {
     this.router.navigate(['users',user.id])
  }

}
