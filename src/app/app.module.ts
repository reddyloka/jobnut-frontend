import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { Ng2ImgMaxModule } from 'ng2-img-max';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {ToasterModule, ToasterService} from '@angular2-toaster';


import { AppComponent } from './app.component';
import { LoginComponent } from './uni-component/login/login.component';
import { SignupComponent } from './uni-component/signup/signup.component';
import { HrComponent } from './uni-component/signup/hr/hr.component';
import { ApplicantComponent } from './uni-component/signup/applicant/applicant.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routerConfig } from './app.router-config';
import { UserBaseService } from './services/userbase/user-base.service';
import { HrDashboardComponent } from './dashboard-component/hr-dashboard/hr-dashboard.component';
import { HrPostdetailsComponent } from './dashboard-component/hr-dashboard/features/hr-postdetails/hr-postdetails.component';
import { HrPostComponent } from './dashboard-component/hr-dashboard/features/hr-post/hr-post.component';
import { HrbaseService } from './services/hrbase.service';
import { HrPostListSummaryComponent } from './dashboard-component/hr-dashboard/features/hr-post/hr-post-list-summary/hr-post-list-summary.component';
import { HrPostdetailsSummaryComponent } from './dashboard-component/hr-dashboard/features/hr-postdetails/hr-postdetails-summary/hr-postdetails-summary.component';
import { HrEditNewPostComponent } from './dashboard-component/hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component';
import { UserDashboardComponent } from './dashboard-component/user-dashboard/user-dashboard.component';
import { UserViewPostComponent } from './dashboard-component/user-dashboard/features/user-view-post/user-view-post.component';
import { UserViewComponent } from './dashboard-component/user-dashboard/features/user-view/user-view.component';
import { UserViewPostDetailsComponent } from './dashboard-component/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component';
import { UserViewPostDeatilssummaryComponent } from './dashboard-component/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-deatilssummary/user-view-post-deatilssummary.component';



import { CallbackComponent } from './uni-component/misc/callback/callback.component';
import { AuthService } from './services/authentication/auth.service';
import { JwtService } from './_helper/jwt.service';
import {SelectModule} from 'ng2-select';
import { LoggedInGuard } from './_guards/logged-in.guard';
import { HrDetailsComponent } from './dashboard-component/hr-dashboard/hr-dashboard-details/hr-details/hr-details.component';

// import { HrHeaderComponent } from './dashboard-component/hr-dashboard/hr-header/hr-header.component';
import { HrDashboardDetailsComponent } from './dashboard-component/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component';
import { HrExperienceComponent } from './dashboard-component/hr-dashboard/hr-dashboard-details/hr-experience/hr-experience.component';
import { HrSkillComponent } from './dashboard-component/hr-dashboard/hr-dashboard-details/hr-skill/hr-skill.component';
import { UserHeaderComponent } from './dashboard-component/user-dashboard/user-header/user-header.component';
import { UserProfileComponent } from './dashboard-component/user-dashboard/features/user-profile/user-profile.component';
import { UserPersonalDetailsComponent } from './dashboard-component/user-dashboard/features/user-profile/user-personal-details/user-personal-details.component';
import { UserExperienceDetailsComponent } from './dashboard-component/user-dashboard/features/user-profile/user-experience-details/user-experience-details.component';
import { UserSkillsDetailsComponent } from './dashboard-component/user-dashboard/features/user-profile/user-skills-details/user-skills-details.component';
import { UserEducationDetailsComponent } from './dashboard-component/user-dashboard/features/user-profile/user-education-details/user-education-details.component';
import { UserEducationAddDetailsComponent } from './dashboard-component/user-dashboard/features/user-profile/user-education-details/user-education-add-details/user-education-add-details.component';
import { NotificationComponent } from './uni-component/misc/notification/notification.component';
import { NotificationService } from './_shared/notification.service';
import { ApplicantPreviewComponent } from './dashboard-component/applicant-preview/applicant-preview.component';
import { UploadImageComponent } from './dashboard-component/utilities/upload-image/upload-image.component';
import { UserExperienceAddDetailsComponent } from './dashboard-component/user-dashboard/features/user-profile/user-experience-add-details/user-experience-add-details.component';
import { HrExperienceAddDetailsComponent } from './dashboard-component/hr-dashboard/hr-dashboard-details/hr-experience-add-details/hr-experience-add-details.component';
import { HrManageApplicantComponent } from './dashboard-component/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component';
import { DataService } from './_shared/data.service';
import { HrManageApplicantListComponent } from './dashboard-component/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list/hr-manage-applicant-list.component';
import { HrHeaderComponent } from './dashboard-component/hr-dashboard/hr-header/hr-header.component';
import { HrManageApplicantListDetailsComponent } from './dashboard-component/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list-details/hr-manage-applicant-list-details.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HrDashboardComponent,
    HrComponent,
    HrDetailsComponent,
    // HrHeaderComponent,
    HrSkillComponent,
    ApplicantComponent,
    CallbackComponent,
    HrSkillComponent,
    HrDashboardComponent,
    HrPostdetailsComponent,
    HrPostComponent,
    HrPostListSummaryComponent,
    HrPostdetailsSummaryComponent,
    HrEditNewPostComponent,
    UserDashboardComponent,
    UserViewPostComponent,
    UserViewComponent,
    UserViewPostDetailsComponent,
    UserViewPostDeatilssummaryComponent,
    CallbackComponent,
    // HrHeaderComponent,
    HrDashboardDetailsComponent,
    HrExperienceComponent,
    UserHeaderComponent,
    UserProfileComponent,
    UserPersonalDetailsComponent,
    UserExperienceDetailsComponent,
    UserSkillsDetailsComponent,
    UserEducationDetailsComponent,
    UserEducationAddDetailsComponent,
    NotificationComponent,
    ApplicantPreviewComponent,
    UploadImageComponent,
    UserExperienceAddDetailsComponent,
    HrExperienceAddDetailsComponent,
    HrManageApplicantComponent,
    HrManageApplicantListComponent,
    HrHeaderComponent,
    HrManageApplicantListDetailsComponent

  ],
  imports: [
    BrowserAnimationsModule,
    // ToasterModule.forRoot(),
    BrowserModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2ImgMaxModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [
    UserBaseService,
    HrbaseService,
    LoggedInGuard,
    NotificationService,
    DataService,
    AuthService,
    JwtService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
