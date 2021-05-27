import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {StoreModule} from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { reducers } from "./+store/reducers";
import {UserEffects} from './+store/effects/userEffects'
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './user-list/user-list.component';
import { UserPageComponent } from './user-page/user-page.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {UserModel} from './+store/model/userModel';
import { UserDetailsComponent } from './user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserPageComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [UserModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
