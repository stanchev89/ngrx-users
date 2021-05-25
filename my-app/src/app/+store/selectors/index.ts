import {createSelector} from "@ngrx/store";
import {IUserState} from "../reducers/userReducers";
import {AppState} from "../reducers";

const getAppUsers = (state: AppState) => state.user;

export const getUsers = createSelector(
  getAppUsers,
  (state: IUserState) => state.users
);

export const isLoading = createSelector(
  getAppUsers,
  (state: IUserState) => state.isLoading
);

export const error = createSelector(
  getAppUsers,
  (state: IUserState) => state.error
);

export const getSelectedUser = createSelector(
  getAppUsers,
  (state: IUserState) => state.selectedUser
);
