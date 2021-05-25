import {Injectable} from '@angular/core';
import {act, Actions, createEffect, ofType} from "@ngrx/effects";
import {types} from "../actions/userActions";
import {catchError, debounce, debounceTime, map, mergeMap, switchMap, takeUntil, takeWhile} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";


@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(types.loadUsersFetch, types.loadUsersCancelFetch),
    mergeMap((action: Action) =>
      this.loadUsersRequest
        .pipe(
          takeWhile(() => action.type !== types.loadUsersCancelFetch),
          map(users => ({type: types.loadUsersSuccess, users: users})),
          catchError(() => of({type: types.loadUsersFail})),

        ))
  ));

  loadUsersRequest = this.http.get('https://jsonplaceholder.typicode.com/users/');


  constructor(private actions$: Actions, private http: HttpClient) {
  }


}
