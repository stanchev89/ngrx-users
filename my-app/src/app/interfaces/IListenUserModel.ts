import {Observable} from "rxjs";

interface IActionTypes {
  fetch:  Observable<any>,
  cancel: Observable<any>,
  success: Observable<any>,
  fail: Observable<any>,
  clear: Observable<any>
}

export interface IListenUserModel{
  loadUsers: IActionTypes,
  selectedUser: IActionTypes
}
