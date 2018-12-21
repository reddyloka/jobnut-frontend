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
var animations_1 = require("@angular/platform-browser/animations");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_select_1 = require("ng2-select");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_img_max_1 = require("ng2-img-max");
var http_2 = require("@angular/common/http");
var ngx_pagination_1 = require("ngx-pagination");
var router_1 = require("@angular/router");
var hr_dashboard_component_1 = require("./hr-dashboard.component");
var hr_post_component_1 = require("./features/hr-post/hr-post.component");
var hr_edit_new_post_component_1 = require("./features/hr-post/hr-edit-new-post/hr-edit-new-post.component");
var hr_post_list_summary_component_1 = require("./features/hr-post/hr-post-list-summary/hr-post-list-summary.component");
var hr_manage_applicant_list_component_1 = require("./features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list/hr-manage-applicant-list.component");
var hr_manage_applicant_list_details_component_1 = require("./features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list-details/hr-manage-applicant-list-details.component");
var hr_manage_applicant_component_1 = require("./features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component");
var hr_postdetails_edit_list_component_1 = require("./features/hr-postdetails/hr-postdetails-edit-list/hr-postdetails-edit-list.component");
var hr_postdetails_summary_component_1 = require("./features/hr-postdetails/hr-postdetails-summary/hr-postdetails-summary.component");
var hr_postdetails_component_1 = require("./features/hr-postdetails/hr-postdetails.component");
var hr_dashboard_details_component_1 = require("./hr-dashboard-details/hr-dashboard-details.component");
var hr_details_component_1 = require("./hr-dashboard-details/hr-details/hr-details.component");
var hr_experience_add_details_component_1 = require("./hr-dashboard-details/hr-experience-add-details/hr-experience-add-details.component");
var hr_header_component_1 = require("./hr-header/hr-header.component");
var hr_skill_component_1 = require("./hr-dashboard-details/hr-skill/hr-skill.component");
// import { UserExperienceAddDetailsComponent } from './user-dashboard/features/user-profile/user-experience-add-details/user-experience-add-details.component';
var chat_module_1 = require("../../_shared/components/chat/chat.module");
var stringCleaner_1 = require("../../_shared/pipes/stringCleaner");
var hr_dashboard_router_config_1 = require("./hr-dashboard.router-config");
var HrDashboardModule = /** @class */ (function () {
    function HrDashboardModule() {
    }
    HrDashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                ng2_select_1.SelectModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                chat_module_1.ChatModule,
                http_1.HttpModule,
                ng2_img_max_1.Ng2ImgMaxModule,
                http_2.HttpClientModule,
                ngx_pagination_1.NgxPaginationModule,
                router_1.RouterModule.forRoot(hr_dashboard_router_config_1.hrRouterConfig),
                platform_browser_1.BrowserModule
            ],
            declarations: [
                hr_dashboard_component_1.HrDashboardComponent,
                hr_post_component_1.HrPostComponent,
                hr_edit_new_post_component_1.HrEditNewPostComponent,
                hr_post_list_summary_component_1.HrPostListSummaryComponent,
                hr_manage_applicant_list_component_1.HrManageApplicantListComponent,
                hr_manage_applicant_list_details_component_1.HrManageApplicantListDetailsComponent,
                hr_manage_applicant_component_1.HrManageApplicantComponent,
                hr_postdetails_edit_list_component_1.HrPostdetailsEditListComponent,
                hr_postdetails_summary_component_1.HrPostdetailsSummaryComponent,
                hr_postdetails_component_1.HrPostdetailsComponent,
                hr_dashboard_details_component_1.HrDashboardDetailsComponent,
                hr_details_component_1.HrDetailsComponent,
                hr_experience_add_details_component_1.HrExperienceAddDetailsComponent,
                hr_skill_component_1.HrSkillComponent,
                hr_header_component_1.HrHeaderComponent,
                stringCleaner_1.StrinCleaner
            ]
        })
    ], HrDashboardModule);
    return HrDashboardModule;
}());
exports.HrDashboardModule = HrDashboardModule;
//# sourceMappingURL=hr-dashboard.module.js.map