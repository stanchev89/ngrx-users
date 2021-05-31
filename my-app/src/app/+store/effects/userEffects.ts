import {Injectable} from '@angular/core';
import {createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, switchMap, takeUntil} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/userModel";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Connect} from "ngrx-action-bundles";
import {loadUsersBundle, selectUserBundle} from "../actions/userActions";
import {IUser} from "../../interfaces/IUser";

@Injectable()
export class UserEffects {

  actions = this.connect.connectBundles([loadUsersBundle,selectUserBundle]);

  loadUsers = createEffect(() => this.actions.listen.loadUsers$.pipe(
    switchMap(() => this.getRequestUrl().pipe(
      takeUntil(this.actions.listen.loadUsersCancel$),
      map((users: IUser[]) => this.actions.creators.loadUsersSuccess({users})),
      catchError(error => [this.actions.creators.loadUsersFailure({error})])
    ))
  ));


  selectUser = createEffect(() => this.actions.listen.selectUser$.pipe(
    ofType(this.actions.creators.selectUser),
    mergeMap(({payload:{id}}) => this.getRequestUrl(id).pipe(
      takeUntil(this.actions.listen.selectUserCancel$),
      map((selectedUser: IUser) => this.actions.creators.selectUserSuccess({selectedUser})),
      catchError(error => [this.actions.creators.selectUserFailure({error})])
    ))
  ));



  getRequestUrl(params: any = undefined): Observable<any> {
    return this.http.get<IUser[] | IUser>(params ? (environment.url + params) : environment.url)
  }


  constructor(private http: HttpClient, private userModel: UserModel, private connect: Connect) {
  }


}
