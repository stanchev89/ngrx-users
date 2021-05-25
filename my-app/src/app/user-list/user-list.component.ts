import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromUserSelectors from '../+store/selectors';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  // @ts-ignore
  allUsers$ = this.store.select(fromUserSelectors.getUsers);
  constructor(private store: Store) { }

}
