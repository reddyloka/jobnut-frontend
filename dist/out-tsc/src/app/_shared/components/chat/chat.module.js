"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var chat_component_1 = require("./chat.component");
// import { ChatResolve } from './chat-resolve.service';
var chat_service_1 = require("./chat.service");
var chatInvites_service_1 = require("../chat-invites/chatInvites.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var chat_invites_component_1 = require("../chat-invites/chat-invites.component");
var common_1 = require("@angular/common");
var chatRoutes = router_1.RouterModule.forChild([
    {
        path: 'chat',
        component: chat_component_1.ChatComponent,
    },
    {
        path: 'chat-invites',
        component: chat_invites_component_1.ChatInvitesComponent
    }
]);
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            declarations: [
                chat_component_1.ChatComponent,
                chat_invites_component_1.ChatInvitesComponent
            ],
            imports: [
                chatRoutes,
                forms_1.FormsModule,
                common_1.CommonModule,
                // BrowserModule,
                http_1.HttpModule
            ],
            exports: [
                chat_component_1.ChatComponent,
                chat_invites_component_1.ChatInvitesComponent
            ],
            providers: [
                // ChatResolve,
                chat_service_1.ChatService,
                chatInvites_service_1.ChatInvitesService
            ]
        })
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map