import * as fromUser from './userReducers';
import {ActionReducerMap} from "@ngrx/store";
import {IUserState} from "./userReducers";

export interface AppState{
  readonly user: IUserState
};

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.reducers
};
