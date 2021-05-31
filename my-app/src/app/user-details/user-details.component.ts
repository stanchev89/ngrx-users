import { Component } from '@angular/core';
import {UserModel} from "../+store/model/userModel";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent{
  selectedUser$ = this.userModel.select.selectedUser$;
  constructor(private userModel: UserModel) { }

  clearUserBtnHandler(): void {
    this.userModel.actions.dispatch.selectUserClear();
  }
}
