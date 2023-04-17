import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [
    LoginComponent,
    RegistrationComponent
  ]
})
export class UsersModule { }
