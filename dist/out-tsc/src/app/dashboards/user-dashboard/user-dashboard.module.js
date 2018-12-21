"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';
var ng2_select_1 = require("ng2-select");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_img_max_1 = require("ng2-img-max");
var http_2 = require("@angular/common/http");
var ngx_pagination_1 = require("ngx-pagination");
var router_1 = require("@angular/router");
var user_education_add_details_component_1 = require("./features/user-profile/user-education-add-details/user-education-add-details.component");
var user_experience_add_details_component_1 = require("./features/user-profile/user-experience-add-details/user-experience-add-details.component");
var user_personal_details_component_1 = require("./features/user-profile/user-personal-details/user-personal-details.component");
var user_skills_details_component_1 = require("./features/user-profile/user-skills-details/user-skills-details.component");
var user_profile_component_1 = require("./features/user-profile/user-profile.component");
var user_view_component_1 = require("./features/user-view/user-view.component");
var user_view_applied_post_component_1 = require("./features/user-view-applied-post/user-view-applied-post.component");
var user_view_post_deatilssummary_component_1 = require("./features/user-view-post/user-view-post-details/user-view-post-deatilssummary/user-view-post-deatilssummary.component");
var user_view_post_component_1 = require("./features/user-view-post/user-view-post.component");
var user_dashboard_component_1 = require("./user-dashboard.component");
var user_header_component_1 = require("./user-header/user-header.component");
var user_view_post_details_component_1 = require("./features/user-view-post/user-view-post-details/user-view-post-details.component");
var user_view_applied_post_details_component_1 = require("./features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component");
var chat_module_1 = require("../../_shared/components/chat/chat.module");
var user_dashboard_router_config_1 = require("./user-dashboard.router-config");
var statistics_component_1 = require("../../_shared/components/statistics/statistics.component");
var shared_module_1 = require("../../_shared/shared.module");
// import { UserEducationDetailsComponent } from './features/user-profile/user-education-details/user-education-details.component';
var UserDashboardModule = /** @class */ (function () {
    function UserDashboardModule() {
    }
    UserDashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                common_1.CommonModule,
                // BrowserAnimationsModule,
                // BrowserModule,
                ng2_select_1.SelectModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                chat_module_1.ChatModule,
                http_1.HttpModule,
                ng2_img_max_1.Ng2ImgMaxModule,
                http_2.HttpClientModule,
                ngx_pagination_1.NgxPaginationModule,
                router_1.RouterModule.forChild(user_dashboard_router_config_1.userRouterConfig)
            ],
            declarations: [
                // NumberToWordsPipe,
                user_education_add_details_component_1.UserEducationAddDetailsComponent,
                statistics_component_1.StatisticsComponent,
                user_experience_add_details_component_1.UserExperienceAddDetailsComponent,
                user_personal_details_component_1.UserPersonalDetailsComponent,
                user_skills_details_component_1.UserSkillsDetailsComponent,
                user_profile_component_1.UserProfileComponent,
                user_view_component_1.UserViewComponent,
                user_view_applied_post_component_1.UserViewAppliedPostComponent,
                user_view_post_component_1.UserViewPostComponent,
                user_view_post_deatilssummary_component_1.UserViewPostDeatilssummaryComponent,
                user_view_post_details_component_1.UserViewPostDetailsComponent,
                user_header_component_1.UserHeaderComponent,
                user_view_applied_post_details_component_1.UserViewAppliedPostDetailsComponent,
                user_dashboard_component_1.UserDashboardComponent
            ],
            exports: [
                user_view_applied_post_details_component_1.UserViewAppliedPostDetailsComponent,
                user_education_add_details_component_1.UserEducationAddDetailsComponent,
                user_experience_add_details_component_1.UserExperienceAddDetailsComponent,
                user_personal_details_component_1.UserPersonalDetailsComponent,
                user_skills_details_component_1.UserSkillsDetailsComponent,
                user_profile_component_1.UserProfileComponent,
                user_view_component_1.UserViewComponent,
                user_view_applied_post_component_1.UserViewAppliedPostComponent,
                user_view_post_component_1.UserViewPostComponent,
                user_view_post_deatilssummary_component_1.UserViewPostDeatilssummaryComponent,
                user_view_post_details_component_1.UserViewPostDetailsComponent,
                user_header_component_1.UserHeaderComponent,
                user_dashboard_component_1.UserDashboardComponent,
                user_education_add_details_component_1.UserEducationAddDetailsComponent,
                router_1.RouterModule
            ]
        })
    ], UserDashboardModule);
    return UserDashboardModule;
}());
exports.UserDashboardModule = UserDashboardModule;
//# sourceMappingURL=user-dashboard.module.js.map