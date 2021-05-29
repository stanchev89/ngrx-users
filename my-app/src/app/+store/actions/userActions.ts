import {createAsyncBundleWithClear} from 'ngrx-action-bundles';
import {IHttpRequestError} from "../../interfaces/IHttpRequestError";
import {ILoadUsersSuccessPayload} from "../../interfaces/ILoadUserSuccessPayload";
import {ISelectUserSuccessPayload} from "../../interfaces/ISelectUserSuccessPayload";
import {ILoadUserFetch} from "../../interfaces/ILoadUserFetch";

const actionNameSpace = '[User]' as const;
const loadUsersActionName = 'loadUsers' as const;
const selectUserActionName = 'selectUser' as const;

export const loadUsersBundle = createAsyncBundleWithClear(loadUsersActionName,actionNameSpace)<
  void,
  ILoadUsersSuccessPayload,
  IHttpRequestError,
  void,
  void
  >();

export const selectUserBundle = createAsyncBundleWithClear(selectUserActionName,actionNameSpace)<
  ILoadUserFetch,
  ISelectUserSuccessPayload,
  IHttpRequestError,
  void,
  void
  >();
