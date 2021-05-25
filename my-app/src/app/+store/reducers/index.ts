import * as fromUser from './userReducers';
import {ActionReducerMap, createSelector} from "@ngrx/store";
import {IUserState} from "./userReducers";

export interface AppState{
  readonly user: IUserState
};

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.reducers
};
