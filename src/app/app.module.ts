import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './uni-component/login/login.component';
import { SignupComponent } from './uni-component/signup/signup.component';
import { HrComponent } from './uni-component/signup/hr/hr.component';
import { ApplicantComponent } from './uni-component/signup/applicant/applicant.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routerConfig } from './app.router-config';
import { UserBaseService } from './services/userbase/user-base.service';
import { SearchComponent } from './dashboard-component/login-dashboard/features/search/search.component';
import { HrDashboardComponent } from './dashboard-component/hr-dashboard/hr-dashboard.component';
import { HrPostdetailsComponent } from './dashboard-component/hr-dashboard/features/hr-postdetails/hr-postdetails.component';
import { HrPostComponent } from './dashboard-component/hr-dashboard/features/hr-post/hr-post.component';
import { HrbaseService } from './services/hrbase.service';
import { HrPostListSummaryComponent } from './dashboard-component/hr-dashboard/features/hr-post/hr-post-list-summary/hr-post-list-summary.component';
import { HrPostdetailsSummaryComponent } from './dashboard-component/hr-dashboard/features/hr-postdetails/hr-postdetails-summary/hr-postdetails-summary.component';
import { HrEditNewPostComponent } from './dashboard-component/hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component';
import { LoginDashboardComponent } from './dashboard-component/login-dashboard/login-dashboard.component';
import { LoginViewPostComponent } from './dashboard-component/login-dashboard/features/login-view-post/login-view-post.component';
import { LoginViewComponent } from './dashboard-component/login-dashboard/features/login-view/login-view.component';
import { LoginViewPostDetailsComponent } from './dashboard-component/login-dashboard/features/login-view-post/login-view-post-details/login-view-post-details.component';
import { LoginViewPostDeatilssummaryComponent } from './dashboard-component/login-dashboard/features/login-view-post/login-view-post-details/login-view-post-deatilssummary/login-view-post-deatilssummary.component';



import { CallbackComponent } from './uni-component/misc/callback/callback.component';
import { AuthService } from './services/authentication/auth.service';
import { JwtService } from './_helper/jwt.service';
import {SelectModule} from 'ng2-select';
import { LoggedInGuard } from './_guards/logged-in.guard';
import { HrDetailsComponent } from './dashboard-component/hr-dashboard/hr-data/hr-details/hr-details.component';
import { HrNewjobComponent } from './dashboard-component/hr-dashboard/hr-data/hr-newjob/hr-newjob.component';
import { HrHeaderComponent } from './dashboard-component/hr-dashboard/hr-header/hr-header.component';
import { HrDashboardDetailsComponent } from './dashboard-component/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component';
import { HrExperienceComponent } from './dashboard-component/hr-dashboard/hr-dashboard-details/hr-experience/hr-experience.component';
import { HrContactComponent } from './dashboard-component/hr-dashboard/hr-dashboard-details/hr-contact/hr-contact.component';
import { HrSkillComponent } from './dashboard-component/hr-dashboard/hr-data/hr-skill/hr-skill.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HrDashboardComponent,
    HrComponent,
    HrDetailsComponent,
    ApplicantComponent,
    SearchComponent,
    CallbackComponent,
    HrSkillComponent,
    HrDashboardComponent,
    HrPostdetailsComponent,
    HrPostComponent,
    HrPostListSummaryComponent,
    HrPostdetailsSummaryComponent,
    HrEditNewPostComponent,
    LoginDashboardComponent,
    LoginViewPostComponent,
    LoginViewComponent,
    LoginViewPostDetailsComponent,
    LoginViewPostDeatilssummaryComponent,
    CallbackComponent,
    HrHeaderComponent,
    HrDashboardDetailsComponent,
    HrExperienceComponent,
    HrContactComponent

  ],
  imports: [
    BrowserModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [
    UserBaseService,
    HrbaseService,
    AuthService,
    JwtService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
