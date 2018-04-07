import { Routes } from '@angular/router';
import { LoginComponent } from './uni-component/login/login.component';
import { SignupComponent } from './uni-component/signup/signup.component';
import { HrComponent } from './uni-component/signup/hr/hr.component';
import { ApplicantComponent } from './uni-component/signup/applicant/applicant.component';
import { HrDashboardComponent } from './dashboard-component/hr-dashboard/hr-dashboard.component';
import { HrPostdetailsComponent } from './dashboard-component/hr-dashboard/features/hr-postdetails/hr-postdetails.component';
import { HrPostComponent } from './dashboard-component/hr-dashboard/features/hr-post/hr-post.component';
import { HrEditNewPostComponent } from './dashboard-component/hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component';
import { UserDashboardComponent } from './dashboard-component/user-dashboard/user-dashboard.component';
import { UserViewPostComponent } from './dashboard-component/user-dashboard/features/user-view-post/user-view-post.component';
import { UserViewComponent } from './dashboard-component/user-dashboard/features/user-view/user-view.component';
import { UserViewPostDetailsComponent } from './dashboard-component/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component';
import { UserViewPostDeatilssummaryComponent } from './dashboard-component/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-deatilssummary/user-view-post-deatilssummary.component';

import { CallbackComponent } from './uni-component/misc/callback/callback.component';
import { LoggedInGuard } from './_guards/logged-in.guard';
import { HrDashboardDetailsComponent } from './dashboard-component/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component';
// import { HrDetailsComponent } from './dashboard-component/hr-dashboard/hr-data/hr-details/hr-details.component';
import { UserProfileComponent } from './dashboard-component/user-dashboard/features/user-profile/user-profile.component';
import { NotificationComponent } from './uni-component/misc/notification/notification.component';


export const routerConfig: Routes = [
  // basic routes
  { path: 'notif', component: NotificationComponent },
  { path: 'login', component: LoginComponent },
  {path: 'applicant', canActivate: [LoggedInGuard && localStorage['isApplicant']], redirectTo: 'user-view'},
  {
    path: 'user-view-post',
    component: UserViewComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'signin',
    component: SignupComponent,
    children: [
      {
        path: 'signin-hr',
        component: HrComponent,
        // canActivate: [LoggedInGuard]
      },
      {
        path: 'signin-applicant',
        component: ApplicantComponent,
        // canActivate: [LoggedInGuard]
      }
    ]
  },
  { path: 'callback', component: CallbackComponent },
  // {
  //   path: 'signin', component: SignupComponent, children: [
  //     { path: 'signin-hr', component: HrComponent },
  //     { path: 'signin-applicant', component: ApplicantComponent }
  //   ]
  // },
  // {
  //   path: 'signin',
  //   redirectTo: 'signin-hr',
  //   pathMatch: 'full'
  // },
  { path: 'hr', redirectTo: 'hr/profile' },
  {
    path: 'hr', component: HrDashboardComponent, canActivate: [LoggedInGuard && localStorage['isHr']], children: [
    {
      path: 'profile',
      component: HrDashboardDetailsComponent
    },
    {
      path: 'new-job',
      component: HrEditNewPostComponent
    },
    {
      path: 'jobs-posted',
      component: HrPostComponent,
      children: [
        {
          path: ':id',
          component: HrPostdetailsComponent
        }
      ]
    }
  ]
  },
  // { path: 'hr', redirectTo: 'hr-details' },
  { path: 'login-user-view', component: UserViewComponent },
  { path: 'login-user-view/:login-post.id', component: UserViewPostDetailsComponent },
  { path: 'hr', component: HrDashboardDetailsComponent },
  { path: 'user-view-post/:user-post.id', component: UserViewPostDetailsComponent },
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
