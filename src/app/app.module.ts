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
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { Route } from '@angular/compiler/src/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BattutaService } from './services/battuta.service';
>>>>>>> 5ff6da708c72b35e02324dfb35d6cb719a8217fc


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HrComponent,
    ApplicantComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      // basic routes
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SignupComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
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
    BattutaService
>>>>>>> 5ff6da708c72b35e02324dfb35d6cb719a8217fc
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
