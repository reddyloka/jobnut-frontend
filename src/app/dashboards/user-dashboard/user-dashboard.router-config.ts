import { Routes } from '@angular/router';
import { UserViewComponent } from './features/user-view/user-view.component';
import { LoggedInGuard } from '../../core/guards/logged-in.guard';
import { UserViewPostDetailsComponent } from './features/user-view-post/user-view-post-details/user-view-post-details.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
export const userRouterConfig: Routes = [
  // applicant routes
  {
    path: 'user-view-post/:user-post.id',
    component: UserViewPostDetailsComponent
  },
  { // applocant dash board home page
    path: 'user-view-post',
    component: UserViewComponent,
    children: [
      {
        path: ':user-post.id',
        component: UserViewPostDetailsComponent
      }
    ]
  },
  { // dashboard
    path: 'user-profile',
    component: UserProfileComponent
  }
  // applicant routes
];
