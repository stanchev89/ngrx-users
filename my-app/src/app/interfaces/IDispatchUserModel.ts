import {IUser} from "./IUser";
import {Observable} from "rxjs";

export interface IDispatchUserModel {
  loadUsersFetch: () => void;
  loadUsersCancelFetch: () => void;
  loadUsersSuccess: (users: IUser[]) => void;
  selectUserFetch: (id: number | string) => void;
  selectUserCancelFetch: () => void;
  selectUserSuccess: (users: IUser) => void;
}
