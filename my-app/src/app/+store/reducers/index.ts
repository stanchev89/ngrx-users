import * as fromUser from './userReducers';
import {ActionReducerMap} from "@ngrx/store";
import {IUserState} from "./userReducers";
export const userModuleStoreName = 'user';

export interface AppState{
  readonly [userModuleStoreName]: IUserState
};

export const reducers: ActionReducerMap<AppState> = {
  [userModuleStoreName]: fromUser.reducers
};
