import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './uni-component/login/login.component';
import { SignupComponent } from './uni-component/signup/signup.component';
import { HrComponent } from './uni-component/signup/hr/hr.component';
import { ApplicantComponent } from './uni-component/signup/applicant/applicant.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HrComponent,
    ApplicantComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
