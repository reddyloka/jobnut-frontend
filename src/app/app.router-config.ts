import { Routes } from '@angular/router';
import { LoginComponent } from './uni-component/login/login.component';
import { SignupComponent } from './uni-component/signup/signup.component';
import { HrComponent } from './uni-component/signup/hr/hr.component';
import { ApplicantComponent } from './uni-component/signup/applicant/applicant.component';
import { HrDashboardComponent } from './dashboard-component/hr-dashboard/hr-dashboard.component';
import { HrPostdetailsComponent } from './dashboard-component/hr-dashboard/features/hr-postdetails/hr-postdetails.component';
import { HrPostComponent } from './dashboard-component/hr-dashboard/features/hr-post/hr-post.component';
import { HrEditNewPostComponent } from './dashboard-component/hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component';
import { LoginDashboardComponent } from './dashboard-component/login-dashboard/login-dashboard.component';
import { LoginViewPostComponent } from './dashboard-component/login-dashboard/features/login-view-post/login-view-post.component';
import { LoginViewComponent } from './dashboard-component/login-dashboard/features/login-view/login-view.component';
import { LoginViewPostDetailsComponent } from './dashboard-component/login-dashboard/features/login-view-post/login-view-post-details/login-view-post-details.component';
import { LoginViewPostDeatilssummaryComponent } from './dashboard-component/login-dashboard/features/login-view-post/login-view-post-details/login-view-post-deatilssummary/login-view-post-deatilssummary.component';

import { CallbackComponent } from './uni-component/misc/callback/callback.component';
import { LoggedInGuard } from './_guards/logged-in.guard';

export const routerConfig: Routes = [
  // basic routes
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'signin',
  //   component: SignupComponent,
  //   children: [{
  //   path: 'hr',
  //   component: HrDashboardComponent,
  //   canActivate: [LoggedInGuard]
  // }]},
  { path: 'callback', component: CallbackComponent },
  {
    path: 'signin', component: SignupComponent, children: [
      { path: 'signin-hr', component: HrComponent },
      { path: 'signin-applicant', component: ApplicantComponent }
    ]
  },
  // {
  //   path: 'signin',
  //   redirectTo: 'signin-hr',
  //   pathMatch: 'full'
  // },
  { path: 'hr', component: HrDashboardComponent },
  { path: 'login-user-view', component: LoginViewComponent },
  { path: 'login-user-view/:login-post.id', component: LoginViewPostDetailsComponent },
  { path: 'hr-post', component: HrPostComponent },
  { path: 'hr-post/:hr-post.id', component: HrPostdetailsComponent },
  { path: 'hr-new-post', component: HrEditNewPostComponent },

  // {
  //   path: 'try',
  //   redirectTo: 'pd',
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'page-not-avaiable', component: LoginComponent },
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
  //   ],
  //   pathMatch: 'full'
  // },
  // { path: 'contactus', redirectTo: 'contact' },
  //   ]
  // },

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
