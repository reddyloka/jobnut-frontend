"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./_shared/components/login/login.component");
var callback_component_1 = require("./_shared/components/misc/callback/callback.component");
var signup_home_component_1 = require("./_shared/components/signup/signup-home/signup-home.component");
var signup_component_1 = require("./_shared/components/signup/signup.component");
var hr_component_1 = require("./_shared/components/signup/hr/hr.component");
var applicant_component_1 = require("./_shared/components/signup/applicant/applicant.component");
var notification_component_1 = require("./_shared/components/misc/notification/notification.component");
var forgetpassword_component_1 = require("./_shared/components/forgetpassword/forgetpassword.component");
var logged_in_guard_1 = require("./core/guards/logged-in.guard");
var home_page_component_1 = require("./_shared/components/home-page/home-page.component");
exports.routerConfig = [
    // basic routes
    // login routes during
    { path: 'login-home', component: login_component_1.LoginComponent },
    // {path: 'login', redirectTo: 'login-home'},
    { path: 'home', component: home_page_component_1.HomePageComponent },
    {
        path: 'user-profile',
        loadChildren: './dashboards/user-dashboard/user-dashboard.module#UserDashboardModule'
    },
    // hr routes
    { path: 'applicant', canActivate: [logged_in_guard_1.LoggedInGuard && localStorage['isApplicant']], redirectTo: 'user-view-post' },
    // {
    //   path: 'jobs-posted/:id',
    //   component: HrPostdetailsComponent
    // },
    // {
    //   path: 'user-view-post',
    //   loadChildren: 'app/user-view-post/user-view-post.module#UserDashboardModule',
    // },
    {
        path: 'signin-home',
        component: signup_home_component_1.SignupHomeComponent
    },
    {
        path: 'signin',
        redirectTo: 'signin-home'
    },
    // signup routes during
    {
        path: 'signin',
        component: signup_component_1.SignupComponent,
        children: [
            {
                path: 'signin-hr',
                component: hr_component_1.HrComponent,
            },
            {
                path: 'signin-applicant',
                component: applicant_component_1.ApplicantComponent,
            }
        ]
    },
    // signup routes during
    { path: 'notif', component: notification_component_1.NotificationComponent },
    { path: 'callback', component: callback_component_1.CallbackComponent },
    { path: 'forgetPassword', component: forgetpassword_component_1.ForgetpasswordComponent },
    { path: '', redirectTo: 'login-home', pathMatch: 'full' }
];
//# sourceMappingURL=app.router-config.js.map