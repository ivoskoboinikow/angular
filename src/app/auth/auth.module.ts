import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';


@NgModule({
	declarations: [
		RegistrationComponent, 
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule
  ]
})

export class AuthModule {}
	
