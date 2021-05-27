import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./user-page/user-page.component";

const routes: Routes = [
  {
    path: 'users',
    component: UserPageComponent,
  },
  {
    path: 'users/:id',
    component: UserPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
