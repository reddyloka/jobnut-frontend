import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { HrEditNewPostComponent } from './hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component';
import { HrPostComponent } from './hr-dashboard/features/hr-post/hr-post.component';
import { HrPostListSummaryComponent } from './hr-dashboard/features/hr-post/hr-post-list-summary/hr-post-list-summary.component';
import { HrManageApplicantListComponent } from './hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list/hr-manage-applicant-list.component';
import { HrManageApplicantListDetailsComponent } from './hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list-details/hr-manage-applicant-list-details.component';
import { HrPostdetailsSummaryComponent } from './hr-dashboard/features/hr-postdetails/hr-postdetails-summary/hr-postdetails-summary.component';
import { HrManageApplicantComponent } from './hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component';
import { HrPostdetailsEditListComponent } from './hr-dashboard/features/hr-postdetails/hr-postdetails-edit-list/hr-postdetails-edit-list.component';
import { HrPostdetailsComponent } from './hr-dashboard/features/hr-postdetails/hr-postdetails.component';
import { HrDashboardDetailsComponent } from './hr-dashboard/hr-dashboard-details/hr-dashboard-details.component';
import { HrDetailsComponent } from './hr-dashboard/hr-dashboard-details/hr-details/hr-details.component';
import { HrExperienceComponent } from './hr-dashboard/hr-dashboard-details/hr-experience/hr-experience.component';
import { HrExperienceAddDetailsComponent } from './hr-dashboard/hr-dashboard-details/hr-experience-add-details/hr-experience-add-details.component';
import { HrSkillComponent } from './hr-dashboard/hr-dashboard-details/hr-skill/hr-skill.component';
import { HrHeaderComponent } from './hr-dashboard/hr-header/hr-header.component';
import { UserEducationAddDetailsComponent } from './user-dashboard/features/user-profile/user-education-details/user-education-add-details/user-education-add-details.component';
import { UserEducationDetailsComponent } from './user-dashboard/features/user-profile/user-education-details/user-education-details.component';
import { UserExperienceAddDetailsComponent } from './user-dashboard/features/user-profile/user-experience-add-details/user-experience-add-details.component';
import { UserPersonalDetailsComponent } from './user-dashboard/features/user-profile/user-personal-details/user-personal-details.component';
import { UserExperienceDetailsComponent } from './user-dashboard/features/user-profile/user-experience-details/user-experience-details.component';
import { UserSkillsDetailsComponent } from './user-dashboard/features/user-profile/user-skills-details/user-skills-details.component';
import { UserProfileComponent } from './user-dashboard/features/user-profile/user-profile.component';
import { UserViewComponent } from './user-dashboard/features/user-view/user-view.component';
import { UserViewAppliedPostComponent } from './user-dashboard/features/user-view-applied-post/user-view-applied-post.component';
import { UserViewPostComponent } from './user-dashboard/features/user-view-post/user-view-post.component';
import { UserViewPostDeatilssummaryComponent } from './user-dashboard/features/user-view-post/user-view-post-details/user-view-post-deatilssummary/user-view-post-deatilssummary.component';
import { UserViewPostDetailsComponent } from './user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './user-dashboard/user-header/user-header.component';
import { UserViewAppliedPostDetailsComponent } from './user-dashboard/features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SelectModule } from 'ng2-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { routerConfig } from '../app.router-config';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2ImgMaxModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routerConfig),
    BrowserModule
  ],
  declarations: [
    HrDashboardComponent,
    HrPostComponent,
    HrEditNewPostComponent,
    HrPostListSummaryComponent,
    HrManageApplicantListComponent,
    HrManageApplicantListDetailsComponent,
    HrManageApplicantComponent,
    HrPostdetailsEditListComponent,
    HrPostdetailsSummaryComponent,
    HrPostdetailsComponent,
    HrDashboardDetailsComponent,
    HrDetailsComponent,
    HrExperienceComponent,
    UserViewAppliedPostDetailsComponent,
    HrExperienceAddDetailsComponent,
    HrSkillComponent,
    HrHeaderComponent,
    UserEducationAddDetailsComponent,
    UserEducationDetailsComponent,
    UserExperienceAddDetailsComponent,
    UserExperienceDetailsComponent,
    UserPersonalDetailsComponent,
    UserSkillsDetailsComponent,
    UserProfileComponent,
    UserViewComponent,
    UserViewAppliedPostComponent,
    UserViewPostComponent,
    UserViewPostDeatilssummaryComponent,
    UserViewPostDetailsComponent,
    UserHeaderComponent,
    UserDashboardComponent,
  ]
})
export class DashboardModule { }
