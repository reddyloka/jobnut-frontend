import { Routes } from '@angular/router';
import { UserViewComponent } from './features/user-view/user-view.component';
import { LoggedInGuard } from '../../core/guards/logged-in.guard';
import { UserViewPostDetailsComponent } from './features/user-view-post/user-view-post-details/user-view-post-details.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { UserViewAppliedPostComponent } from './features/user-view-applied-post/user-view-applied-post.component';
import { UserViewAppliedPostDetailsComponent } from './features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component';
export const userRouterConfig: Routes = [
  // applicant routes

  { // applocant dash board home page
    path: 'user-view-post:user-post.id.module#UserViewPostDetailsComponent',
    component: UserViewPostDetailsComponent,
    // children: [
    //   {
    //     path: '',
    //     component: UserViewPostDetailsComponent
    //   }
    // ]
  },
  { // dashboard
    path: 'user-profile',
    component: UserProfileComponent
  },
  // applicant routes

  {
    path: 'applied-job',
    component: UserViewAppliedPostComponent,
  },
  {
    path: 'applied-job/:user-post.id',
    component: UserViewAppliedPostDetailsComponent,
  },

];
