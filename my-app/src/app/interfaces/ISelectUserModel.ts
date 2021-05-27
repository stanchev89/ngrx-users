import {Observable} from "rxjs";
import {IUser} from "./IUser";
import {AppState} from "../+store/reducers";

export interface ISelectUserModel{
  allUsers$ : Observable<IUser[]>;
  error$ : Observable<string | undefined>
  selectedUser$: Observable<IUser | undefined>
}
