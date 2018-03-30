import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './uni-component/login/login.component';
import { SignupComponent } from './uni-component/signup/signup.component';
import { HrComponent } from './uni-component/signup/hr/hr.component';
import { ApplicantComponent } from './uni-component/signup/applicant/applicant.component';
import { OtherQualificationComponent } from './uni-component/signup/applicant/other-qualification/other-qualification.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routerConfig } from './app.router-config';
import { UserBaseService } from './services/userbase/user-base.service';
import { PdComponent } from './misc/try/pd/pd.component';
import { EdComponent } from './misc/try/ed/ed.component';
import { TryService } from './misc/try/try.service';
import { QulComponent } from './misc/try/ed/qul/qul.component';
import { TryComponent } from './misc/try/try.component';
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




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HrComponent,
    QulComponent,
    ApplicantComponent,
    OtherQualificationComponent,
    TryComponent,
    PdComponent,
    EdComponent,
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
    LoginViewPostDeatilssummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [
    UserBaseService,
    HrbaseService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
