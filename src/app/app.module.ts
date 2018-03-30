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
import { routerConfig } from './app.router-config';
import { UserBaseService } from './services/userbase/user-base.service';
// import { PdComponent } from './misc/try/pd/pd.component';
// import { EdComponent } from './misc/try/ed/ed.component';
// import { TryService } from './misc/try/try.service';
// import { QulComponent } from './misc/try/ed/qul/qul.component';
// import { TryComponent } from './misc/try/try.component';
import { CallbackComponent } from './uni-component/misc/callback/callback.component';
import { AuthService } from './services/authentication/auth.service';
import { HrDashboardComponent } from './dashboard-component/hr-dashboard/hr-dashboard.component';
import { JwtService } from './_helper/jwt.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HrDashboardComponent,
    HrComponent,
    ApplicantComponent,
    OtherQualificationComponent,
    // QulComponent,
    // TryComponent,
    // PdComponent,
    // EdComponent,
    CallbackComponent
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
    AuthService,
    JwtService,
    // TryService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
