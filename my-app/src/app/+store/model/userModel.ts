import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {Actions} from "@ngrx/effects";
import {Connect} from "ngrx-action-bundles";
import {loadUsersBundle, selectUserBundle} from "../actions/userActions";
import {userSelectors} from "../selectors";


@Injectable()
export class UserModel {
  actions = this.connect.connectBundles([loadUsersBundle,selectUserBundle]);
  selectors = this.connect.connectSelectors(userSelectors)
  constructor(private store: Store<AppState>, private actions$: Actions, private connect: Connect) {
  }
  


}
