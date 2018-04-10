import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistratoinComponent } from './registration/registration.component';

const routes: Routes = [
        {path: 'login', component: LoginComponent },
        {path: 'registration', component: RegistratoinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}