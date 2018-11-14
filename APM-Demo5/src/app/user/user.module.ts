import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';
import { UserComponent } from './user.component';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', reducer)
  ],
  declarations: [
    LoginComponent,
    UserComponent
  ]
})
export class UserModule { }
