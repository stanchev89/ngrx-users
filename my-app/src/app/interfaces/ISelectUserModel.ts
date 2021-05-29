import {Observable} from "rxjs";
import {IUser} from "./IUser";

export interface ISelectUserModel{
  allUsers$ : Observable<IUser[] | null>;
  error$ : Observable<string | undefined>
  selectedUser$: Observable<IUser | undefined>
}
