"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { BrowserModule } from '@angular/platform-browser';
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var ngx_pagination_1 = require("ngx-pagination");
var ng2_img_max_1 = require("ng2-img-max");
var animations_1 = require("@angular/platform-browser/animations");
// import {ToasterModule, ToasterService} from '@angular2-toaster';
var angular_font_awesome_1 = require("angular-font-awesome");
var angular_froala_wysiwyg_1 = require("angular-froala-wysiwyg");
var app_component_1 = require("./app.component");
var common_1 = require("@angular/common");
var app_router_config_1 = require("./app.router-config");
var ng2_select_1 = require("ng2-select");
var user_base_service_1 = require("./_shared/services/user-base.service");
var hrbase_service_1 = require("./_shared/services/hrbase.service");
var notification_service_1 = require("./_shared/services/notification.service");
var data_service_1 = require("./_shared/services/data.service");
var auth_service_1 = require("./_shared/services/auth.service");
var quotes_service_1 = require("./_shared/services/quotes.service");
var login_component_1 = require("./_shared/components/login/login.component");
var signup_component_1 = require("./_shared/components/signup/signup.component");
var hr_component_1 = require("./_shared/components/signup/hr/hr.component");
var applicant_component_1 = require("./_shared/components/signup/applicant/applicant.component");
var callback_component_1 = require("./_shared/components/misc/callback/callback.component");
var notification_component_1 = require("./_shared/components/misc/notification/notification.component");
var signup_home_component_1 = require("./_shared/components/signup/signup-home/signup-home.component");
var jwt_service_1 = require("./_shared/services/jwt.service");
var forgetpassword_component_1 = require("./_shared/components/forgetpassword/forgetpassword.component");
var chat_module_1 = require("./_shared/components/chat/chat.module");
var logged_in_guard_1 = require("./core/guards/logged-in.guard");
// import { UserDashboardModule } from './dashboards/user-dashboard/user-dashboard.module';
var hr_dashboard_module_1 = require("./dashboards/hr-dashboard/hr-dashboard.module");
var shared_module_1 = require("./_shared/shared.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                hr_component_1.HrComponent,
                applicant_component_1.ApplicantComponent,
                callback_component_1.CallbackComponent,
                callback_component_1.CallbackComponent,
                notification_component_1.NotificationComponent,
                forgetpassword_component_1.ForgetpasswordComponent,
                signup_home_component_1.SignupHomeComponent,
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                // ToasterModule.forRoot(),
                // BrowserModule,
                ng2_select_1.SelectModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                // RouterModule,
                // Routes,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                chat_module_1.ChatModule,
                // UserDashboardModule,
                hr_dashboard_module_1.HrDashboardModule,
                ng2_img_max_1.Ng2ImgMaxModule,
                http_2.HttpClientModule,
                ngx_pagination_1.NgxPaginationModule,
                router_1.RouterModule.forRoot(app_router_config_1.routerConfig),
                // BrowserModule,
                forms_1.FormsModule, angular_font_awesome_1.AngularFontAwesomeModule, angular_froala_wysiwyg_1.FroalaEditorModule.forRoot(), angular_froala_wysiwyg_1.FroalaViewModule.forRoot()
            ],
            providers: [
                user_base_service_1.UserBaseService,
                hrbase_service_1.HrbaseService,
                logged_in_guard_1.LoggedInGuard,
                notification_service_1.NotificationService,
                data_service_1.DataService,
                auth_service_1.AuthService,
                jwt_service_1.JwtService,
                quotes_service_1.QuotesService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map