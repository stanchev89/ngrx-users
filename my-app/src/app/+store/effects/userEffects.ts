import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, switchMap, takeUntil, tap, withLatestFrom} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/userModel";
import {Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import * as fromUserActions from '../actions/userActions';

@Injectable()
export class UserEffects {


  public loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(this.userModel.actions.loadUsersFetch),
    mergeMap(() =>
      this.getRequestUrl().pipe(
        map(this.userModel.actions.loadUsersSuccess),
        catchError(() => this.userModel.actions.loadUsersFail),
        takeUntil(this.actions$.pipe(ofType(this.userModel.actions.loadUsersCancelFetch)))
      )
    )
  ));

  public selectUser$ = createEffect(() => this.actions$.pipe(
    ofType(this.userModel.actions.selectUserFetch),
    mergeMap(({id}: any) =>
      this.getRequestUrl(id).pipe(
        map(this.userModel.actions.selectUserSuccess),
        catchError(() => this.userModel.actions.selectUserFail),
        takeUntil(this.actions$.pipe(ofType(this.userModel.actions.selectUserCancelFetch)))
      )
    )
  ));


  getRequestUrl(params: any = undefined): Observable<any> {
    return this.http.get(params ? (environment.url + params) : environment.url)
  }


  constructor(private actions$: Actions, private http: HttpClient, private userModel: UserModel, private activatedRoute: ActivatedRoute) {
  }


}
