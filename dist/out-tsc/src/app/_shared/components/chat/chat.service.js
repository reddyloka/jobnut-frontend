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
var io = require("socket.io-client");
var Observable_1 = require("rxjs/Observable");
var environment_1 = require("../../../../environments/environment");
var http_1 = require("@angular/http");
var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.socket = io('http://localhost:5000');
    }
    ChatService.prototype.joinRoom = function (userStatus, value) {
        var _this = this;
        console.log(' data: ', userStatus);
        if (userStatus.isApplicant) {
            value['userType'] = 'applicant';
        }
        else if (userStatus.isHr) {
            value['userType'] = 'hr';
        }
        return this.http.post(environment_1.environment.USER_SERVER + "/join", value)
            .toPromise()
            .then(function (res) {
            // console.log(res);
            var res1 = res.json();
            console.log(res1);
            // console.log('messagesss', res1.data[0]._from);
            var messages = [];
            if (!res1 || !res1.data[0] || !res1.data[0]._from) {
            }
            else {
                messages = Array.of.apply(Array, res1.data[0]._from.messages.concat(res1.data[0]._to.messages));
                console.log('mixed array is : ', messages);
            }
            console.log('messagesss Inside Chat Service', messages, res1);
            if (!res1.data || res1.data.length === 0 || !messages || messages.length === 0) {
                console.log('len 0');
                return { messages: 'nothing', flag: false, fromId: null };
            }
            else {
                _this.socket.emit('join', value);
                return { messages: messages, flag: true, fromId: res1.data[0]._from._id };
            }
            // const temp = res1.data;
            // // Object.assign(messages, )
            // console.log(temp);
        }).catch(function (err) {
            console.log('err is: ', err);
        });
    };
    ChatService.prototype.checkInvites = function (senderInfo) {
        console.log('Inside Check Invites', senderInfo);
        return this.http.post(environment_1.environment.USER_SERVER + "/enter/invites", { senderInfo: senderInfo })
            .toPromise()
            .then(function (res) {
            var res1 = res.json();
            console.log(res1.data);
            return res1.data;
        }).catch(function (err) {
            console.log('err is: ', err);
        });
    };
    ChatService.prototype.toggel = function (id) {
        console.log(id);
        return this.http.put(environment_1.environment.USER_SERVER + "/enter/accept/invites", { id: id })
            .toPromise()
            .then(function (res) {
            var res1 = res.json();
            return res1;
        }).catch(function (err) {
            console.log('err is: ', err);
        });
    };
    ChatService.prototype.leaveRoom = function (data) {
        this.socket.emit('leave', data);
    };
    ChatService.prototype.sendInvite = function (value) {
        console.log('Inside send Invite of chat Service ', value);
        this.socket.emit('sendInvite', value);
    };
    ChatService.prototype.userLeftRoom = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('left room', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.sendMessage = function (data) {
        data.created = new Date();
        this.socket.emit('message', data);
    };
    ChatService.prototype.newMessageRecieved = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('new message', function (data) {
                console.log('fetched from database', data);
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.oldMessage = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('load old msgs', function (data) {
                console.log('Old messages', data);
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.sendInvitation = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('send-invitation', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map