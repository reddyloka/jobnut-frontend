"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var io = require("socket.io-client");
var Observable_1 = require("rxjs/Observable");
var ChatInvitesService = /** @class */ (function () {
    function ChatInvitesService() {
        this.socket = io('http://localhost:5000');
    }
    ChatInvitesService.prototype.oldMessage = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('load old msgs', function (data) {
                console.log(data);
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatInvitesService = __decorate([
        core_1.Injectable()
    ], ChatInvitesService);
    return ChatInvitesService;
}());
exports.ChatInvitesService = ChatInvitesService;
//# sourceMappingURL=chatInvites.service.js.map