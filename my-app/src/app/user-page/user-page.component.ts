import { Component, OnInit } from '@angular/core';
import {IResolveBundle} from "../interfaces/IResolveBundle";
import {Store} from "@ngrx/store";
import * as fromUserActions from '../+store/actions/userActions';
import {AppState} from "../+store/reducers";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  bundle: IResolveBundle = {
    dispatchRequest: () => this.store.dispatch(fromUserActions.loadUsersFetch()),
    dispatchRequestCancel: () => this.store.dispatch(fromUserActions.loadUsersCancelFetch()),
    // @ts-ignore
    requestSuccess$: () => this.store.select((state: AppState) => state.user.selectedUser),
    // @ts-ignore
    requestFailure$: () => this.store.select((state: AppState) => state.user.error)
  };
  bundles:IResolveBundle[] = [this.bundle];
  constructor(private store: Store) { }

}
