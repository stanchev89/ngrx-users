import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {IDispatchUserModel} from "../../interfaces/IDispatchUserModel";
import {ISelectUserModel} from "../../interfaces/ISelectUserModel";
import {Actions} from "@ngrx/effects";
import {Connect} from "ngrx-action-bundles";
import {loadUsersBundle, selectUserBundle} from "../actions/userActions";
import {IListenUserModel} from "../../interfaces/IListenUserModel";
import {ICreateUserModel} from "../../interfaces/ICreateUserModel";


@Injectable()
export class UserModel {
  actions = this.connect.connectBundles([loadUsersBundle,selectUserBundle])
  constructor(private store: Store<AppState>, private actions$: Actions, private connect: Connect) {
  }

  dispatch: IDispatchUserModel = {
    loadUsers: {
      fetch: this.actions.dispatch.loadUsers,
      cancel: this.actions.dispatch.loadUsersCancel,
      success: this.actions.dispatch.loadUsersSuccess,
      fail: this.actions.dispatch.loadUsersFailure,
      clear: this.actions.dispatch.loadUsersClear
    },
    selectedUser: {
      fetch: this.actions.dispatch.selectUser,
      cancel: this.actions.dispatch.selectUserCancel,
      success: this.actions.dispatch.selectUserSuccess,
      fail: this.actions.dispatch.selectUserFailure,
      clear: this.actions.dispatch.selectUserClear
    }
  };


  listen: IListenUserModel = {
    loadUsers: {
      fetch: this.actions.listen.loadUsers$,
      cancel: this.actions.listen.loadUsersCancel$,
      success: this.actions.listen.loadUsersSuccess$,
      fail: this.actions.listen.loadUsersFailure$,
      clear: this.actions.listen.loadUsersClear$
    },
    selectedUser: {
      fetch: this.actions.listen.selectUser$,
      cancel: this.actions.listen.selectUserCancel$,
      success: this.actions.listen.selectUserSuccess$,
      fail: this.actions.listen.selectUserFailure$,
      clear: this.actions.listen.selectUserClear$
    }
  };

  create: ICreateUserModel= {
    loadUsers: {
      fetch: this.actions.creators.loadUsers,
      cancel: this.actions.creators.loadUsersCancel,
      success: this.actions.creators.loadUsersSuccess,
      fail: this.actions.creators.loadUsersFailure,
      clear: this.actions.creators.loadUsersClear
    },
    selectedUser: {
      fetch: this.actions.creators.selectUser,
      cancel: this.actions.creators.selectUserCancel,
      success: this.actions.creators.selectUserSuccess,
      fail: this.actions.creators.selectUserFailure,
      clear: this.actions.creators.selectUserClear
    }
  }


  select: ISelectUserModel = {
    allUsers$: this.store.select(state => state.user.users),
    error$: this.store.select(state => state.user.error),
    selectedUser$: this.store.select(state => state.user.selectedUser)
  };


}
