import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './uni-component/login/login.component';
import { ApplicantLoginComponent } from './uni-component/applicant-login/applicant-login.component';
import { HrLoginComponent } from './uni-component/hr-login/hr-login.component';
import { SignupComponent } from './uni-component/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplicantLoginComponent,
    HrLoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
