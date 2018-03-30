import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './uni-component/login/login.component';
import { SignupComponent } from './uni-component/signup/signup.component';
import { HrComponent } from './uni-component/signup/hr/hr.component';
import { ApplicantComponent } from './uni-component/signup/applicant/applicant.component';
import { OtherQualificationComponent } from './uni-component/signup/applicant/other-qualification/other-qualification.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { PdComponent } from './misc/try/pd/pd.component';
// import { EdComponent } from './misc/try/ed/ed.component';
// import { TryService } from './misc/try/try.service';
// import { QulComponent } from './misc/try/ed/qul/qul.component';
// import { TryComponent } from './misc/try/try.component';
// import { NewComponentComponent } from './app/new-component/new-component.component';
import { SearchComponent } from './dashboard-component/login-dashboard/features/search/search.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HrComponent,
    // QulComponent,
    ApplicantComponent,
    OtherQualificationComponent,
    // TryComponent,
    // PdComponent,
    // EdComponent,
    // NewComponentComponent,
    SearchComponent,
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    //     RouterModule.forRoot([
    //       // basic routes
    //       // { path: 'login', component: LoginComponent },
    //       // { path: 'signin', component: SignupComponent },
    //       // {path: '', redirectTo: 'login', pathMatch: 'full' },
    //       {
    //         path: 'try',
    //         component: TryComponent,
    //         children: [
    //           {
    //             path: 'pd',
    //             component: PdComponent
    //           },
    //           {
    //             path: 'education',
    //             component: EdComponent
    //           }
    //         ]
    //       },

    //       { path: 'try', redirectTo: 'pd', pathMatch: 'full' },
    //         { path : 'signup/applicant', component: ApplicantComponent}
    //         { path: 'contactus', redirectTo: 'contact' },
    //         auth demo
    //         {
    //           path: 'protected',
    //           component: ProtectedComponent,
    //           canActivate: [LoginComponent]
    //         },

    //         nested
    //         {
    //           path: 'products',
    //           component: productcomponent,
    //           children: childRoutes
    //         }
    //     ])
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'login/applicant',
        pathMatch: 'full'
      },
      {
        path: 'login/applicant',
        component: SearchComponent
      }
    ])
  ],
  providers: [
    // TryService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
