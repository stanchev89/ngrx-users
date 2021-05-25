import {Action, createAction, props} from '@ngrx/store';
import {IUser} from '../../interfaces/IUser';
export const userActionNameSpace = '[User Page]';
export const types = {
  loadUsersFetch: `${userActionNameSpace} Load Users Fetch`,
  loadUsersCancelFetch: `${userActionNameSpace} Load Users Cancel Fetch`,
  loadUsersSuccess: `${userActionNameSpace} Load Users Success`,
  loadUsersFail: `${userActionNameSpace} Load Users Fail`,
  selectedUser: `${userActionNameSpace} Selected User`
};

export const loadUsersFetch = createAction(
  types.loadUsersFetch
);

export const loadUsersCancelFetch = createAction(
  types.loadUsersCancelFetch
);

export const loadUsersSuccess = createAction(
  types.loadUsersSuccess,
  props<{users: IUser[]}>()
);

export const loadUsersFail = createAction(
  types.loadUsersFail,
  props<{error: string}>()
);

export const selectedUser = createAction(
  types.selectedUser,
  props<{selectedUser: IUser}>()
);
