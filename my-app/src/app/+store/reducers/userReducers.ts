import {createReducer,on} from '@ngrx/store';
import {IUser} from "../../interfaces/IUser";
import {userActions} from '../actions';

export interface IUserState{
  users: IUser[];
  selectedUser: IUser | undefined;
  error: string | undefined;
}

const initialState: IUserState = {
  users: [],
  selectedUser: undefined,
  error: undefined,
};

export const reducers = createReducer(
  initialState,
  on(userActions.loadUsersFetch,((state: IUserState,action) => {
    return {
      ...state
    }
  })),
  on(userActions.loadUsersCancelFetch,((state: IUserState,action) => {
    return {
      ...state,
    }
  })),
  on(userActions.loadUsersSuccess,((state: IUserState,action) => {
    return {
      ...state,
      users: action.users,
    }
  })),
  on(userActions.loadUsersFail,((state: IUserState,action) => {
    return {
      ...state,
      error: action.error || 'Something goes wrong!',
    }
  })),
  on(userActions.selectUserFetch,((state: IUserState, action) => {
    return {
      ...state,
      id: action.id
    }
  })),
  on(userActions.selectUserCancelFetch,((state: IUserState, action) => {
    return {
      ...state
    }
  })),
  on(userActions.selectUserSuccess,((state: IUserState, action) => {
    return {
      ...state,
      selectedUser: action.selectedUser
    }
  })),
  on(userActions.selectUserFail,((state: IUserState, action) => {
    return {
      ...state,
      error: action.error
    }
  }))
);
