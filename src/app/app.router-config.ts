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
import { HrManageApplicantComponent } from './dashboard-component/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component';
import { UserViewAppliedPostComponent } from './dashboard-component/user-dashboard/features/user-view-applied-post/user-view-applied-post.component';
import { UserViewAppliedPostDetailsComponent } from './dashboard-component/user-dashboard/features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component';


export const routerConfig: Routes = [
  // basic routes

  // hr routes
  { path: 'hr', redirectTo: 'hr/profile' }, // hr home page
  {
    path: 'jobs-posted/:id',
    component: HrPostdetailsComponent
  },
  {
    path: 'jobs-posted/:id/manageApplicant',
    component: HrManageApplicantComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  // {
  //   path: 'jobs-posted/:id',
  //   component: HrPostdetailsComponent
  // },
  {
    path: 'hr', component: HrDashboardComponent, children: [
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
            component: HrPostdetailsComponent,
          }
        ]
      }
    ]
  },
  // hr routes


  {
    path: 'user-view-post/:user-post.id',
    component: UserViewPostDetailsComponent,
  },
  {
    path: 'applied-job',
    component: UserViewAppliedPostComponent,
  },
  {
    path: 'applied-job/:user-post.id',
    component: UserViewAppliedPostDetailsComponent,
  },
  // applicant routes
  { path: 'applicant', canActivate: [LoggedInGuard && localStorage['isApplicant']], redirectTo: 'user-view-post' },
  { // applocant dash board home page
    path: 'user-view-post',
    component: UserViewComponent,
    children: [
      {
        path: ':user-post.id',
        component: UserViewPostDetailsComponent,
      }
    ]
  },
  { // dashboard
    path: 'user-profile',
    component: UserProfileComponent
  },
  // applicant routes



  // login routes during
  { path: 'login', component: LoginComponent },
  // login routes during



  // signup routes during
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
  // signup routes during


  { path: 'notif', component: NotificationComponent },
  { path: 'callback', component: CallbackComponent },


  { path: '', redirectTo: 'login', pathMatch: 'full' },

];
