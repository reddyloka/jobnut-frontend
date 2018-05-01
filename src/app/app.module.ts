import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

import { Ng2ImgMaxModule } from 'ng2-img-max';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {ToasterModule, ToasterService} from '@angular2-toaster';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routerConfig } from './app.router-config';


import { SelectModule } from 'ng2-select';


// import { AppRoutingModule } from './resume/app-routing/app-routing.module';
import { HomeComponent } from './resume/home/home.component';
import { ResumeBuilderComponent } from './resume/resume-builder/resume-builder.component';
import { PersonalDetailsComponent } from './resume/resume-builder/personal-details/personal-details.component';
import { EducationComponent } from './resume/resume-builder/education/education.component';
import { SkillsComponent } from './resume/resume-builder/skills/skills.component';
import { ExperienceComponent } from './resume/resume-builder/experience/experience.component';
import { HobbiesComponent } from './resume/resume-builder/hobbies/hobbies.component';
import { InterestsComponent } from './resume/resume-builder/interests/interests.component';
import { CertificatesComponent } from './resume/resume-builder/certificates/certificates.component';
import { LanguagesComponent } from './resume/resume-builder/languages/languages.component';
import { IndexPageComponent } from './resume/index-page/index-page.component';
import { ResumePreviewComponent } from './resume/resume-preview/resume-preview.component';
import { ResumePreview1Component } from './resume/resume-preview-1/resume-preview-1.component';
import { ResumePreview2Component } from './resume/resume-preview-2/resume-preview-2.component';
import { ResumePreview3Component } from './resume/resume-preview-3/resume-preview-3.component';

import { DataStoreService } from './resume/services/data-store.service';
import { FroalaEditorService } from './resume/services/froala-editor.service';
import { PersonalDetailsDataService } from './resume/services/personal-details-data.service';
import { EducationDetailsDataService } from './resume/services/education-details-data.service';
import { SkillsDataService } from './resume/services/skills-data.service';
import { ExperienceDataService } from './resume/services/experience-data.service';
import { HobbiesDataService } from './resume/services/hobbies-data.service';
import { InterestsDataService } from './resume/services/interests-data.service';
import { CertificatesDataService } from './resume/services/certificates-data.service';
import { LanguagesDataService } from './resume/services/languages-data.service';
import { DownloadService } from './resume/services/download.service';

import { UserBaseService } from './_shared/services/user-base.service';
import { HrbaseService } from './_shared/services/hrbase.service';
import { NotificationService } from './_shared/services/notification.service';
import { DataService } from './_shared/services/data.service';
import { AuthService } from './_shared/services/auth.service';
import { QuotesService } from './_shared/services/quotes.service';
import { LoginComponent } from './_shared/components/login/login.component';
import { SignupComponent } from './_shared/components/signup/signup.component';
import { HrDashboardComponent } from './dashboards/hr-dashboard/hr-dashboard.component';
import { HrComponent } from './_shared/components/signup/hr/hr.component';
import { HrDetailsComponent } from './dashboards/hr-dashboard/hr-dashboard-details/hr-details/hr-details.component';
import { HrSkillComponent } from './dashboards/hr-dashboard/hr-dashboard-details/hr-skill/hr-skill.component';
import { ApplicantComponent } from './_shared/components/signup/applicant/applicant.component';
import { CallbackComponent } from './_shared/components/misc/callback/callback.component';
import { HrPostdetailsComponent } from './dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails.component';
import { HrPostComponent } from './dashboards/hr-dashboard/features/hr-post/hr-post.component';
import { HrPostListSummaryComponent } from './dashboards/hr-dashboard/features/hr-post/hr-post-list-summary/hr-post-list-summary.component';
import { HrPostdetailsSummaryComponent } from './dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails-summary/hr-postdetails-summary.component';
import { HrEditNewPostComponent } from './dashboards/hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component';
import { UserDashboardComponent } from './dashboards/user-dashboard/user-dashboard.component';
import { UserViewPostComponent } from './dashboards/user-dashboard/features/user-view-post/user-view-post.component';
import { UserViewComponent } from './dashboards/user-dashboard/features/user-view/user-view.component';
import { UserViewPostDetailsComponent } from './dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component';
import { UserViewPostDeatilssummaryComponent } from './dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-deatilssummary/user-view-post-deatilssummary.component';
import { HrDashboardDetailsComponent } from './dashboards/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component';
import { HrExperienceComponent } from './dashboards/hr-dashboard/hr-dashboard-details/hr-experience/hr-experience.component';
import { UserProfileComponent } from './dashboards/user-dashboard/features/user-profile/user-profile.component';
import { UserHeaderComponent } from './dashboards/user-dashboard/user-header/user-header.component';
import { UserExperienceDetailsComponent } from './dashboards/user-dashboard/features/user-profile/user-experience-details/user-experience-details.component';
import { UserPersonalDetailsComponent } from './dashboards/user-dashboard/features/user-profile/user-personal-details/user-personal-details.component';
import { UserSkillsDetailsComponent } from './dashboards/user-dashboard/features/user-profile/user-skills-details/user-skills-details.component';
import { UserEducationDetailsComponent } from './dashboards/user-dashboard/features/user-profile/user-education-details/user-education-details.component';
import { UserEducationAddDetailsComponent } from './dashboards/user-dashboard/features/user-profile/user-education-details/user-education-add-details/user-education-add-details.component';
import { NotificationComponent } from './_shared/components/misc/notification/notification.component';
import { ApplicantPreviewComponent } from './dashboards/applicant-preview/applicant-preview.component';
import { UserExperienceAddDetailsComponent } from './dashboards/user-dashboard/features/user-profile/user-experience-add-details/user-experience-add-details.component';
import { HrExperienceAddDetailsComponent } from './dashboards/hr-dashboard/hr-dashboard-details/hr-experience-add-details/hr-experience-add-details.component';
import { HrManageApplicantComponent } from './dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component';
import { HrManageApplicantListComponent } from './dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list/hr-manage-applicant-list.component';
import { HrHeaderComponent } from './dashboards/hr-dashboard/hr-header/hr-header.component';
import { HrManageApplicantListDetailsComponent } from './dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list-details/hr-manage-applicant-list-details.component';
import { HrPostdetailsEditListComponent } from './dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails-edit-list/hr-postdetails-edit-list.component';
import { UserViewAppliedPostComponent } from './dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post.component';
import { UserViewAppliedPostDetailsComponent } from './dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component';
import { SignupHomeComponent } from './_shared/components/signup/signup-home/signup-home.component';
import { LoggedInGuard } from './core/gaurds/logged-in.guard';
import { JwtService } from './_shared/services/jwt.service';
import { ForgetpasswordComponent } from './_shared/components/forgetpassword/forgetpassword.component';



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
    UserExperienceAddDetailsComponent,
    HrExperienceAddDetailsComponent,
    HrManageApplicantComponent,
    HrManageApplicantListComponent,
    HrHeaderComponent,
    HrManageApplicantListDetailsComponent,
    ResumeBuilderComponent,
    PersonalDetailsComponent,
    EducationComponent,
    HomeComponent,
    ResumePreviewComponent,
    ResumePreview1Component,
    ResumePreview2Component,
    ResumePreview3Component,
    SkillsComponent,
    ExperienceComponent,
    HobbiesComponent,
    InterestsComponent,
    CertificatesComponent,
    LanguagesComponent,
    IndexPageComponent,
    HrPostdetailsEditListComponent,
    UserViewAppliedPostComponent,
    UserViewAppliedPostDetailsComponent,
    ForgetpasswordComponent,
    SignupHomeComponent

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
    RouterModule.forRoot(routerConfig),
    BrowserModule, FormsModule, AngularFontAwesomeModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [
    UserBaseService,
    HrbaseService,
    LoggedInGuard,
    NotificationService,
    DataService,
    AuthService,
    JwtService,
    QuotesService,
    ResumeBuilderComponent,
    FroalaEditorService,
    DataStoreService,
    PersonalDetailsDataService,
    EducationDetailsDataService,
    SkillsDataService,
    ExperienceDataService,
    HobbiesDataService,
    InterestsDataService,
    CertificatesDataService,
    LanguagesDataService,
    DownloadService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
