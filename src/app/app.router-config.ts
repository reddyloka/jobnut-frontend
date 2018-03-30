import { Routes } from '@angular/router';

import { LoginComponent } from './uni-component/login/login.component';
import { SignupComponent } from './uni-component/signup/signup.component';
import { HrComponent } from './uni-component/signup/hr/hr.component';
import { ApplicantComponent } from './uni-component/signup/applicant/applicant.component';
import { CallbackComponent } from './uni-component/misc/callback/callback.component';
import { HrDashboardComponent } from './dashboard-component/hr-dashboard/hr-dashboard.component';
import { LoggedInGuard } from './_guards/logged-in.guard';

export const routerConfig: Routes = [
  // basic routes
  { path: 'login', component: LoginComponent },
  {
    path: 'hr',
    component: HrDashboardComponent,
    canActivate: [LoggedInGuard]
  },
  { path: 'callback', component: CallbackComponent },
  {
    path: 'signin', component: SignupComponent, children: [
      { path: 'signin-hr', component: HrComponent },
      { path: 'signin-applicant', component: ApplicantComponent }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'page-not-avaiable', component: LoginComponent },
  // { path: '**', redirectTo: '/page-not-available'},
  // {
  //   path: 'try',
  //   component: TryComponent,
  //   children: [
  //     {
  //       path: 'pd',
  //       component: PdComponent
  //     },
  //     {
  //       path: 'education',
  //       component: EdComponent
  //     }
  //   ]
  // },
  { path: 'try', redirectTo: 'pd', pathMatch: 'full' }

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
