import {Action, ActionCreator} from "@ngrx/store";
import {Observable} from "rxjs";
import {IUser} from "./IUser";
import * as fromUserActions from "../+store/actions/userActions";

export interface IActionsUserModel{
  loadUsersFetch: ActionCreator;
  loadUsersCancelFetch: ActionCreator;
  loadUsersSuccess: (users: IUser[]) => Action;
  loadUsersFail: ActionCreator;
  selectUserFetch:ActionCreator,
  selectUserCancelFetch:ActionCreator,
  selectUserSuccess: (users: IUser) => Action,
  selectUserFail: ActionCreator;
}
