import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {Actions} from "@ngrx/effects";
import {Connect} from "ngrx-action-bundles";
import {loadUsersBundle, selectUserBundle} from "../actions/userActions";
import {getUserStateAllUsers, getUserStateError, getUserStateSelectedUser} from "../selectors";


@Injectable()
export class UserModel {
  actions = this.connect.connectBundles([loadUsersBundle,selectUserBundle])
  constructor(private store: Store<AppState>, private actions$: Actions, private connect: Connect) {
  }


  select = {
    allUsers$: getUserStateAllUsers,
    error$: getUserStateError,
    selectedUser$: getUserStateSelectedUser
  };


}
