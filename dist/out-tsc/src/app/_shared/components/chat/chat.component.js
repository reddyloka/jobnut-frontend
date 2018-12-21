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
var chat_service_1 = require("./chat.service");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(_chatService) {
        var _this = this;
        this._chatService = _chatService;
        this.expandClick = new core_1.EventEmitter();
        this.messageArray = [];
        this.chatInvitesButton = true;
        this.chatWindow = false;
        this.sendInviteButton = false;
        this._chatService.userLeftRoom()
            .subscribe(function (data) { return _this.messageArray.push(data); });
        this._chatService.newMessageRecieved()
            .subscribe(function (data) {
            _this.messageArray.push(data);
            setTimeout(function () {
                $('#chatBox').scrollTop($('#chatBox')[0].scrollHeight);
            }, 100);
        });
        this._chatService.oldMessage()
            .subscribe(function (data) {
            console.log('Data', data);
            _this.messageArray = data;
        });
        this._chatService.sendInvitation()
            .subscribe(function (data) {
            _this.messageArray.push(data);
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
        //  this.socket = io('http://localhost:5000');
        // this.OnCreate.emit(new Date());/
        this.expandClass = { 'expand': true, 'braille': false };
        this.x = false;
        this.sender = this.initiator ? this.initiator.email : 'NAN';
        this.receiver = this.recepient ? this.recepient.email : 'NAN';
        console.log('val', this.sender, this.receiver);
        this.join();
    };
    // In case there is record of previous chat found join the same conversation
    ChatComponent.prototype.join = function () {
        var _this = this;
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        console.log('jnsnj', this.initiator, this.recepient);
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this.room = text;
        this._chatService.joinRoom(this.initiator, {
            user: this.user, room: this.room,
            sender: this.sender, receiver: this.receiver, chatWindow: false
        }).
            then(function (res) {
            console.log('Inside .............', res.flag);
            _this.formId = res.fromId;
            _this.chatWindow = res.flag;
            _this.sendInviteButton = !res.flag;
            console.log(res.messages);
            // this.runmyFunc(res.messages);
            if (res.flag) {
                _this.messageArray1 = res.messages.sort(function (a, b) {
                    console.log(' a:  ', a.created, ' b: ', b.created, ' :: ', a.created > b.created, ' for ', a.message, ' and ', b.message);
                    return new Date(a.created) > new Date(b.created) ? 1 : new Date(a.created) < new Date(b.created) ? -1 : 0;
                    // return new Date(a.created) > new Date(b.created) ? true : false;
                });
                setTimeout(function () {
                    $('#chatBox').scrollTop($('#chatBox')[0].scrollHeight);
                }, 100);
                console.log('message array is ', _this.messageArray1);
            }
            //  this.messageArray = res.messages;
            // for(let i=0 ; i<len; i++){
            //   this.messageArray.push(res.messages[i])
            // }
            // console.log(this.sendInvite);
        });
    };
    // send a new invite to chat message to a new person
    ChatComponent.prototype.sendInvite = function () {
        console.log('Inside Chat Component', this.initiator, this.recepient);
        this._chatService.sendInvite({
            user: this.sender, room: this.room, sender: this.sender,
            receiver: this.receiver
        });
        this.sendInviteButton = false;
        this.chatWindow = true;
    };
    // User Leaving the conversation room
    ChatComponent.prototype.leave = function () {
        this._chatService.leaveRoom({ user: this.user, sender: this.sender, receiver: this.receiver });
    };
    // Send New Message
    ChatComponent.prototype.sendMessage = function () {
        this._chatService.sendMessage({ user: this.user, message: this.messageText, sender: this.sender, receiver: this.receiver, fromId: this.formId });
        this.messageText = '';
    };
    ChatComponent.prototype.sortByDateAsc = function (lhs, rhs) { return lhs > rhs ? 1 : lhs < rhs ? -1 : 0; };
    ChatComponent.prototype.sortByDateDesc = function (lhs, rhs) { return lhs < rhs ? 1 : lhs > rhs ? -1 : 0; };
    ChatComponent.prototype.getDayAndTime = function (date) {
        var DateEnum = {
            days: {
                0: 'Sunday',
                1: 'Monday',
                2: 'Tuesday',
                3: 'Wednesday',
                4: 'Thursday',
                5: 'Friday',
                6: 'Saturday',
            },
            months: {
                0: 'JAN',
                1: 'FEB',
                2: 'MAR',
                3: 'APR',
                4: 'MAY',
                5: 'JUN',
                6: 'JUL',
                7: 'AUG',
                8: 'SEP',
                9: 'OCT',
                10: 'NOV',
                11: 'DEC',
            }
        };
        var d = new Date();
        date = new Date(date);
        // console.log('todays date is ', d.getDay(), ' ', date.getDate(), ' year ', date.getFullYear());
        if (d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear()) {
            // console.log('second is : ', d.getTime());
            if ((d.getTime() - 2000) <= date.getTime()) {
                return 'Now';
            }
            return 'Today';
        }
        else if (d.getDate() - date.getDate() === 1 && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear()) {
            return 'Yesterday';
        }
        else {
            // return 'hello';
            return "" + (((date.getMonth() === d.getMonth() && d.getFullYear() === date.getFullYear()) ? 'Earlier This Month' : DateEnum.months[date.getMonth()]) + ' ' + date.getFullYear() + ' on ' + DateEnum.days[date.getDay()]);
        }
    };
    // runmyFunc(x) {
    //   x = x.map(p => Date.parse(p.created));
    //   console.log('dates array is : ', x.sort());
    // }
    ChatComponent.prototype.expandClicked = function () {
        this.expandClick.emit(this.x);
        this.x = !this.x;
        console.log('expand clicked');
        this.expandClass = this.expandClass.expand ? { 'expand': false, 'braille': true } : { 'expand': true, 'braille': false };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "initiator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "recepient", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "expandClick", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css'],
            providers: [chat_service_1.ChatService]
        }),
        __metadata("design:paramtypes", [chat_service_1.ChatService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map