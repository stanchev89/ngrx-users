import {AppState} from "../reducers";
import {createSelector} from "@ngrx/store";
import {IUserState} from "../reducers/userReducers";

export const getUserState = (state: AppState) => state.user;
export const getUserStateAllUsers = createSelector(
  getUserState,
  (state: IUserState) => state.users
);
export const getUserStateSelectedUser = createSelector(
  getUserState,
  (state: IUserState) => state.selectedUser
);
export const getUserStateError = createSelector(
  getUserState,
  (state: IUserState) => state.error
)
