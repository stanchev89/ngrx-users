import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";
import * as fromUserActions from '../actions/userActions';
import {IUser} from "../../interfaces/IUser";
import {IDispatchUserModel} from "../../interfaces/IDispatchUserModel";
import {ISelectUserModel} from "../../interfaces/ISelectUserModel";
import {IActionsUserModel} from "../../interfaces/IActionsUserModel";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export class UserModel {

  constructor(private store: Store<AppState>) {
  }

  dispatch: IDispatchUserModel = {
    loadUsersFetch: () => this.store.dispatch(fromUserActions.loadUsersFetch()),
    loadUsersSuccess: (users: IUser[]) => this.store.dispatch(fromUserActions.loadUsersSuccess({users: users})),
    loadUsersCancelFetch: () => this.store.dispatch(fromUserActions.loadUsersCancelFetch()),
    selectUserFetch: (id: string | number) =>this.store.dispatch(fromUserActions.selectUserFetch({id})),
    selectUserSuccess: (user: IUser) => this.store.dispatch(fromUserActions.selectUserSuccess({selectedUser: user})),
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
    selectUserSuccess: (user: IUser) => fromUserActions.selectUserSuccess({selectedUser: user}),
    selectUserFail: fromUserActions.selectUserFail,
  };

}
