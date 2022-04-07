import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterFormComponent} from "./register-form/register-form.component";
import {SignUpFormComponent} from "./sign-up-form/sign-up-form.component";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'register', component: RegisterFormComponent},
    {path: 'sign-up',component: SignUpFormComponent}])],
  exports: [RouterModule],
})
export class AppRoutingModule { }
