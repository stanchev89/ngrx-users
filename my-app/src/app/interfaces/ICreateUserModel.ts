interface IActionTypes {
  fetch:  (params?: any) => void,
  cancel: (params?: any) => void,
  success: (params?: any) => void,
  fail: (params?: any) => void,
  clear: (params?: any) => void
}

export interface ICreateUserModel {
  loadUsers: IActionTypes,
  selectedUser: IActionTypes
}
