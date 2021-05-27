import {Action, createAction, props} from '@ngrx/store';
import {IUser} from '../../interfaces/IUser';
export const userActionNameSpace = '[User Page]';
export const types = {
  loadUsersFetch: `${userActionNameSpace} Load Users Fetch`,
  loadUsersCancelFetch: `${userActionNameSpace} Load Users Cancel Fetch`,
  loadUsersSuccess: `${userActionNameSpace} Load Users Success`,
  loadUsersFail: `${userActionNameSpace} Load Users Fail`,
  selectUserFetch: `${userActionNameSpace} Select User Fetch`,
  selectCancelFetch: `${userActionNameSpace} Select User Cancel Fetch`,
  selectUserSuccess: `${userActionNameSpace} Select User Success`,
  selectUserFail: `${userActionNameSpace} Select User Fail`,
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

export const selectUserFetch = createAction(
  types.selectUserFetch,
  props<{ id: string | number }>()
);

export const selectUserCancelFetch = createAction(
  types.selectCancelFetch,
);

export const selectUserSuccess = createAction(
  types.selectUserSuccess,
  props<{selectedUser: IUser}>()
);

export const selectUserFail = createAction(
  types.selectUserSuccess,
  props<{error: string}>()
);
