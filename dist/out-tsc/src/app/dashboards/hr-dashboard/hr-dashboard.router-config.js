"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hr_post_component_1 = require("./features/hr-post/hr-post.component");
var hr_postdetails_component_1 = require("./features/hr-postdetails/hr-postdetails.component");
var hr_edit_new_post_component_1 = require("./features/hr-post/hr-edit-new-post/hr-edit-new-post.component");
var hr_dashboard_details_component_1 = require("./hr-dashboard-details/hr-dashboard-details.component");
var hr_dashboard_component_1 = require("./hr-dashboard.component");
var callback_component_1 = require("../../_shared/components/misc/callback/callback.component");
var hr_manage_applicant_component_1 = require("./features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component");
exports.hrRouterConfig = [
    { path: 'hr', redirectTo: 'hr/profile' },
    // hr home page
    {
        path: 'jobs-posted/:id',
        component: hr_postdetails_component_1.HrPostdetailsComponent
    },
    {
        path: 'jobs-posted/:id/manageApplicant',
        component: hr_manage_applicant_component_1.HrManageApplicantComponent
    },
    {
        path: 'callback',
        component: callback_component_1.CallbackComponent
    },
    {
        path: 'hr', component: hr_dashboard_component_1.HrDashboardComponent, children: [
            {
                path: 'profile',
                component: hr_dashboard_details_component_1.HrDashboardDetailsComponent
            },
            {
                path: 'new-job',
                component: hr_edit_new_post_component_1.HrEditNewPostComponent
            },
            {
                path: 'jobs-posted',
                component: hr_post_component_1.HrPostComponent,
                children: [
                    {
                        path: ':id',
                        component: hr_postdetails_component_1.HrPostdetailsComponent,
                    }
                ]
            }
        ]
    },
];
//# sourceMappingURL=hr-dashboard.router-config.js.map