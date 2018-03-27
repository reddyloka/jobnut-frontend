import { Routes } from '@angular/router';

import { LoginComponent } from './uni-component/login/login.component';
import { SignupComponent } from './uni-component/signup/signup.component';
import { HrComponent } from './uni-component/signup/hr/hr.component';
import { ApplicantComponent } from './uni-component/signup/applicant/applicant.component';
// import { Routes } from "@angular/router";

export const routerConfig: Routes = [
    // basic routes
    { path: 'login', component: LoginComponent },
    {
      path: 'signin', component: SignupComponent, children: [
        { path: 'signin-hr', component: HrComponent },
        { path: 'signin-applicant', component: ApplicantComponent }
      ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'page-not-avaiable', component: LoginComponent},
    { path: '**', redirectTo: '/page-not-available'},
    // { path: 'contactus', redirectTo: 'contact' },

    // auth demo
    // {
    //   path: 'protected',
    //   component: ProtectedComponent,
    //   canActivate: [LoginComponent]
    // },

    // nested
    // {
    //   path: 'products',
    //   component: productcomponent,
    //   children: childRoutes
    // }
  ];

