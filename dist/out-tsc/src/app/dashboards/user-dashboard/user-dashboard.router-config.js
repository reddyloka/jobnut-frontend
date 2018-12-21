"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_view_component_1 = require("./features/user-view/user-view.component");
var user_view_post_details_component_1 = require("./features/user-view-post/user-view-post-details/user-view-post-details.component");
var user_profile_component_1 = require("./features/user-profile/user-profile.component");
var user_view_applied_post_component_1 = require("./features/user-view-applied-post/user-view-applied-post.component");
var user_view_applied_post_details_component_1 = require("./features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component");
exports.userRouterConfig = [
    // applicant routes
    {
        path: '',
        component: user_profile_component_1.UserProfileComponent,
    },
    {
        path: 'user-view-post',
        component: user_view_component_1.UserViewComponent,
    },
    {
        path: 'user-view-post/:user-post.id',
        component: user_view_post_details_component_1.UserViewPostDetailsComponent
    },
    {
        path: 'applied-job/:user-post.id',
        component: user_view_applied_post_details_component_1.UserViewAppliedPostDetailsComponent,
    },
    {
        path: 'applied-job',
        component: user_view_applied_post_component_1.UserViewAppliedPostComponent
    },
];
//# sourceMappingURL=user-dashboard.router-config.js.map