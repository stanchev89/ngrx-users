import {createReducer,on} from '@ngrx/store';
import {IUser} from "../../interfaces/IUser";
import {userActions} from '../actions';

export interface IUserState{
  users: IUser[];
  selectedUser: IUser | undefined;
  error: string | undefined;
  isLoading: boolean
}

const initialState: IUserState = {
  users: [],
  selectedUser: undefined,
  error: undefined,
  isLoading: false
};

export const reducers = createReducer(
  initialState,
  on(userActions.loadUsersFetch,((state: IUserState,action) => {
    return {
      ...state,
      isLoading: true
    }
  })),
  on(userActions.loadUsersCancelFetch,((state: IUserState,action) => {
    return {
      ...state,
      isLoading: false
    }
  })),
  on(userActions.loadUsersSuccess,((state: IUserState,action) => {
    return {
      ...state,
      users: action.users,
      isLoading: false
    }
  })),
  on(userActions.loadUsersFail,((state: IUserState,action) => {
    return {
      ...state,
      error: 'Something goes wrong!',
      isLoading: false
    }
  })),
  on(userActions.selectedUser,((state: IUserState, action) => {
    return {
      ...state,
      selectedUser:action.selectedUser,
      isLoading: false
    }
  }))
);
