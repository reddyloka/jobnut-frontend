import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { HrDashboardComponent } from './dashboard-component/hr-dashboard/hr-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HrComponent,
    ApplicantComponent,
    OtherQualificationComponent,
    HrDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      // basic routes
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SignupComponent },
      
      // { path: 'contactus', redirectTo: 'contact' },
      
      // auth demo
      // {
        //   path: 'protected',
        //   component: ProtectedComponent,
        //   canActivate: [LoginComponent]
        // },
        
        // nested
        { path: 'hr', component: HrDashboardComponent },
        
        { path: '', redirectTo: 'login', pathMatch: 'full' },
    ])
  ],
  providers: [ 
    { provide: LocationStrategy, useClass: HashLocationStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
