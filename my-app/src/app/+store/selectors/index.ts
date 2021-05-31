import {AppState, userModuleStoreName} from "../reducers";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IUserState} from "../reducers/userReducers";

export const getUserState = createFeatureSelector<
  AppState,
  IUserState
  >(userModuleStoreName);

export const userSelectors = {
  allUsers: createSelector(getUserState,state => state.users),
  selectedUser: createSelector(getUserState, state => state.selectedUser),
  error: createSelector(getUserState, state => state.error)
};
