import {createReducer,on} from '@ngrx/store';
import {IUser} from "../../interfaces/IUser";
import {loadUsersBundle, selectUserBundle} from '../actions/userActions';
export interface IUserState{
  users: IUser[] | null;
  selectedUser: IUser | undefined;
  error: string | undefined;
}

const initialState: IUserState = {
  users: [],
  selectedUser: undefined,
  error: undefined,
};

export const reducers = createReducer<IUserState>(
  initialState,
  on(loadUsersBundle.creators.loadUsers,((state) => {
    return {
      ...state,
      users: []
    }
  })),
  on(loadUsersBundle.creators.loadUsersSuccess,((state,{payload: {users}}) => {
    return {
      ...state,
      users
    }
  })),
  on(loadUsersBundle.creators.loadUsersFailure,((state,{payload:{error: {message}}}) => {
    return {
      ...state,
      error: message,
    }
  })),
  on(loadUsersBundle.creators.loadUsersClear,((state) => {
    return {
      ...state,
      users: []
    }
  })),


  on(selectUserBundle.creators.selectUser,( (state,{payload:{id}}) => {
    return {
      ...state,
      id
    }
  })),
  on(selectUserBundle.creators.selectUserSuccess,((state, {payload:{selectedUser}}) => {
    return {
      ...state,
      selectedUser
    }
  })),
  on(selectUserBundle.creators.selectUserFailure,((state, {payload:{error:{message}}}) => {
    return {
      ...state,
      error: message
    }
  })),
  on(selectUserBundle.creators.selectUserClear,(state => {
    return {
      ...state,
      selectedUser: undefined
    }
  }))
);
