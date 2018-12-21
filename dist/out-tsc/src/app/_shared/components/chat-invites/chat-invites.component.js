"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var chat_service_1 = require("../chat/chat.service");
var ChatInvitesComponent = /** @class */ (function () {
    function ChatInvitesComponent(_chatService) {
        this._chatService = _chatService;
        //  updateStatus: Array<StatusTemplate> = [];
        this._id = [];
        this.status = [];
        this.noOfChatInvites = [];
        this.result = false;
        this.show = false;
    }
    ChatInvitesComponent.prototype.ngOnInit = function () {
        console.log('On the initiation of chatInvite component');
        this.enter();
    };
    ChatInvitesComponent.prototype.enter = function () {
        var _this = this;
        this.sender = this.email;
        this.noOfChatInvites.length = 0;
        this._chatService.checkInvites(this.sender).
            then(function (res) {
            for (var i = 0; i < res.length; i++) {
                _this.noOfChatInvites.push(res[i].message);
                _this._id.push(res[i]._id);
            }
        });
        this.result = true;
    };
    ChatInvitesComponent.prototype.accept = function (index) {
        console.log(index);
        this._chatService.toggel(index).
            then(function (res) {
            console.log(res);
            // this.router.navigate([/ChatComponent]);
        });
    };
    ChatInvitesComponent.prototype.decline = function (index, i) {
        // console.log(i);
        // console.log("Decline se pehle",this.noOfChatInvites);
        this._chatService.toggel(index).
            then(function (res) {
            console.log(res);
        });
        this.noOfChatInvites.splice(i, 1);
        //  console.log("Decline k Baad",this.noOfChatInvites);
        // this.result = false;
        // this.show = false;
    };
    ChatInvitesComponent.prototype.chatInvites = function () {
        this.show = true;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ChatInvitesComponent.prototype, "email", void 0);
    ChatInvitesComponent = __decorate([
        core_1.Component({
            selector: 'app-chat-invites',
            templateUrl: './chat-invites.component.html'
        }),
        __metadata("design:paramtypes", [chat_service_1.ChatService])
    ], ChatInvitesComponent);
    return ChatInvitesComponent;
}());
exports.ChatInvitesComponent = ChatInvitesComponent;
//# sourceMappingURL=chat-invites.component.js.map