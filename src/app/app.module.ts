import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './uni-component/login/login.component';
import { SignupComponent } from './uni-component/signup/signup.component';
import { HrComponent } from './uni-component/signup/hr/hr.component';
import { ApplicantComponent } from './uni-component/signup/applicant/applicant.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';




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
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      // basic routes
      { path: 'login', component: LoginComponent },
      {
        path: 'signin', component: SignupComponent, children: [
          { path: 'signin-hr', component: HrComponent },
          { path: 'signin-applicant', component: ApplicantComponent }
        ]
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {path: 'page-not-avaiable', component: LoginComponent},
      { path: '**', redirectTo: '/page-not-available'},
      // { path: 'contactus', redirectTo: 'contact' },

      // auth demo
      // {
      //   path: 'protected',
      //   component: ProtectedComponent,
      //   canActivate: [LoginComponent]
      // },

      // nested
      // {
      //   path: 'products',
      //   component: productcomponent,
      //   children: childRoutes
      // }
    ])
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
