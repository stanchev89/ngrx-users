import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {IUser} from "../../interfaces/IUser";
import {IDispatchUserModel} from "../../interfaces/IDispatchUserModel";
import {ISelectUserModel} from "../../interfaces/ISelectUserModel";
import {IActionsUserModel} from "../../interfaces/IActionsUserModel";
import {Actions, ofType} from "@ngrx/effects";
import {types} from '../actions/userActions';
import * as fromUserActions from '../actions/userActions'


@Injectable()
export class UserModel {

  constructor(private store: Store<AppState>,private actions$: Actions) {
  }

  dispatch: IDispatchUserModel = {
    loadUsersFetch: () => this.store.dispatch(fromUserActions.loadUsersFetch()),
    loadUsersSuccess: (users: IUser[]) => this.store.dispatch(fromUserActions.loadUsersSuccess({users: users})),
    loadUsersCancelFetch: () => this.store.dispatch(fromUserActions.loadUsersCancelFetch()),
    selectUserFetch: (id: string | number) =>this.store.dispatch(fromUserActions.selectUserFetch({id})),
    selectUserSuccess: (user: IUser | undefined) => this.store.dispatch(fromUserActions.selectUserSuccess({selectedUser: user})),
    selectUserCancelFetch: () => this.store.dispatch(fromUserActions.selectUserCancelFetch()),
  };

  select: ISelectUserModel = {
    allUsers$: this.store.select(state => state.user.users),
    error$: this.store.select(state => state.user.error),
    selectedUser$: this.store.select(state => state.user.selectedUser)
  };

  actions: IActionsUserModel = {
    loadUsersFetch: fromUserActions.loadUsersFetch,
    loadUsersCancelFetch: fromUserActions.loadUsersCancelFetch,
    loadUsersSuccess: (users: IUser[]) => fromUserActions.loadUsersSuccess({users}),
    loadUsersFail: fromUserActions.loadUsersFail,
    selectUserFetch: fromUserActions.selectUserFetch,
    selectUserCancelFetch: fromUserActions.selectUserCancelFetch,
    selectUserSuccess: (selectedUser: IUser) => fromUserActions.selectUserSuccess({selectedUser}),
    selectUserFail: fromUserActions.selectUserFail,
  };

  listenActions = {
    loadUsersSuccess: this.actions$.pipe(ofType(types.loadUsersSuccess)),
    loadUsersFail: this.actions$.pipe(ofType(types.loadUsersFail)),
    selectedUserSuccess: this.actions$.pipe(ofType(types.selectUserSuccess)),
    selectedUserFail: this.actions$.pipe(ofType(types.selectUserFail))
  }

}
