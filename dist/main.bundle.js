webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboards/user-dashboard/user-dashboard.module": [
		"./src/app/dashboards/user-dashboard/user-dashboard.module.ts",
		"user-dashboard.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_shared/components/change-password/change-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_shared/components/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <h5>Change password</h5>\r\n    <div class=\"actions\">\r\n      <div class=\"ui cancel\" (click)=\"closeChangePasswordClicked()\">\r\n        <i style=\"color:red\" class=\"close icon\"></i>\r\n      </div>\r\n    </div>\r\n    <form class='ui form' [formGroup]='currentForm'>\r\n      <div class=\"field\">\r\n        <label>Current Password</label>\r\n        <div class=\"ui left icon input\">\r\n          <input auto-focus type={{inputType}} placeholder=\"enter your current password\" formControlName=\"currentPassword\">\r\n          <i class=\"lock icon\"></i>\r\n        </div>\r\n        <div *ngIf=\"currentForm.controls['currentPassword'].touched&&(currentForm.controls['currentPassword'].dirty&&!currentForm.controls['currentPassword'].valid)\">\r\n          <p style=\"color:red\">enter valid password</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>New Password</label>\r\n        <div class=\"ui left icon input\">\r\n          <input type={{inputType}} placeholder=\"create new password\" formControlName=\"newPassword\" [(ngModel)]='password'>\r\n          <i class=\"lock icon\"></i>\r\n        </div>\r\n        <div *ngIf=\"currentForm.controls['newPassword'].touched&&(currentForm.controls['newPassword'].dirty&&!currentForm.controls['newPassword'].valid)\">\r\n          <p style=\"color:red\">create strong password</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Confirm New Password</label>\r\n        <div class=\"ui left icon input\">\r\n          <input type={{inputType}} placeholder=\"confirm your password\" formControlName=\"confirmPassword\" [(ngModel)]='compareValue'>\r\n          <i class=\"lock icon\"></i>\r\n        </div>\r\n        <a href=\"javascript:void(0)\" (click)='tooglepwd()'>show/hide</a>\r\n        <div *ngIf=\"currentForm.controls['confirmPassword'].touched&&!(password===compareValue)\">\r\n          <p style=\"color:red\">Re-enter password as above</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <button auto-focus class=\"ui tomato fluid submit button\" [disabled]=\"!currentForm.valid\" (click)=\"changePassword()\"><i class='lock icon'>Change Password</i></button>\r\n      </div>\r\n    </form>\r\n  "

/***/ }),

/***/ "./src/app/_shared/components/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/_shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(router, _authService, userbase, route) {
        this.router = router;
        this._authService = _authService;
        this.userbase = userbase;
        this.route = route;
        // this.currentForm.value, this.id
        this.closeChangePassword = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputType = 'password';
        this.id = Object(__WEBPACK_IMPORTED_MODULE_5__models_uuid__["a" /* uuid */])();
        this.buildFormGroup();
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        // $(document).ready(function () {
        //   $('.ui.dropdown').dropdown();
        // });
        this.changePassword();
    };
    ChangePasswordComponent.prototype.tooglepwd = function () {
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else if (this.inputType === 'text') {
            this.inputType = 'password';
        }
    };
    ChangePasswordComponent.prototype.buildFormGroup = function () {
        var fg = {
            currentPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            newPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
        };
        this.currentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](fg);
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        console.log('request to change password', this.currentForm.value);
        this.userbase.checkCurrentPassword(this.currentForm.value, this.id).subscribe(function (data) {
            console.log('data', data);
            if (data.status) {
                $('.small.modal').modal({
                    closable: true,
                    onDeny: function () {
                        return true;
                    }
                }).modal('toggle');
                _this.logoutClicked();
            }
            else {
                window.alert(data.errors.message);
                _this.buildFormGroup();
            }
        });
    };
    ChangePasswordComponent.prototype.logoutClicked = function () {
        this._authService.logout();
        this.router.navigateByUrl('login');
    };
    ChangePasswordComponent.prototype.closeChangePasswordClicked = function () {
        console.log('clicked');
        $('.small.modal')
            .modal({
            closable: false,
            onDeny: function () {
                return true;
            }
        })
            .modal('hide');
        this.closeChangePassword.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "closeChangePassword", void 0);
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("./src/app/_shared/components/change-password/change-password.component.html"),
            styles: [__webpack_require__("./src/app/_shared/components/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_user_base_service__["a" /* UserBaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/chat-invites/chat-invites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"result\">\r\n  <a routerLink=\"/chatInvites\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)='chatInvites()'>Chat Invites\r\n          <span class=\"badge\" style=\"background-color:rgb(190,0,0)\">{{noOfChatInvites.length}}</span>\r\n      </button>\r\n  </a>\r\n  <div *ngIf=\"show\">\r\n      <div class=\"jumbotron\" *ngFor=\"let chat of noOfChatInvites;let i=index\">\r\n           <p>{{chat}}</p> \r\n           <div class=\"ui two buttons\">\r\n                  <button routerLink=\"/chat\" type=\"button\" class=\"btn btn-primary\" (click)=\"accept(_id[i])\">Accept</button>\r\n                  <button type=\"button\" class=\"btn btn-primary\" style=\"background-color:rgb(190,0,0)\" (click)=\"decline(_id[i],i)\">Decline</button>\r\n          </div>\r\n      </div>\r\n  </div> \r\n</div>"

/***/ }),

/***/ "./src/app/_shared/components/chat-invites/chat-invites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatInvitesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat_service__ = __webpack_require__("./src/app/_shared/components/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChatInvitesComponent.prototype, "email", void 0);
    ChatInvitesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-invites',
            template: __webpack_require__("./src/app/_shared/components/chat-invites/chat-invites.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_chat_service__["a" /* ChatService */]])
    ], ChatInvitesComponent);
    return ChatInvitesComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/chat-invites/chatInvites.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatInvitesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatInvitesService = /** @class */ (function () {
    function ChatInvitesService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__('http://localhost:5000');
    }
    ChatInvitesService.prototype.oldMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('load old msgs', function (data) {
                console.log(data);
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatInvitesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ChatInvitesService);
    return ChatInvitesService;
}());



/***/ }),

/***/ "./src/app/_shared/components/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = ".ab-send {\r\n  visibility: hidden;\r\n}\r\n\r\n.ab-arrow {\r\n  visibility: visible;\r\n}\r\n\r\n/* .ab-arrow:hover {\r\n    visibility: hidden;\r\n    background: black;\r\n}\r\n\r\n.ab-arrow:hover ~ .ab-send {\r\n    visibility: visible;\r\n    background: black;\r\n} */\r\n\r\n.chat-container {\r\n    overflow: hidden;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    -webkit-transition-duration: 200ms;\r\n            transition-duration: 200ms;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    -webkit-transition-timing-function: ease-in-out;\r\n            transition-timing-function: ease-in-out;\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n}\r\n\r\n.chat-container-shrink {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto 2em;\r\n  border: 1px solid;\r\n  width: 22em;\r\n  border-radius: .6em .6m 0em 0em;\r\n  float: right;\r\n  \r\n}\r\n\r\n.chat-container-expand {\r\n    margin: 1em auto;\r\n    width: 90%;\r\n}\r\n\r\n/* .chat-box {\r\n  overflow-y: auto;\r\n  scroll-behavior: smooth;\r\n  height: 30em;\r\n  width: 22em;\r\n  padding: 1em 1em 1em 1em;\r\n  border: 0px transparent;\r\n  border-radius: 0em 0em 0em 0em;\r\n  overflow-x: hidden;\r\n  margin: 0px;\r\n  background-color: whitesmoke;\r\n} */\r\n\r\n.chat-box {\r\n    overflow-y: auto;\r\n    scroll-behavior: smooth;\r\n    height: 31em;\r\n    width: 100%;\r\n    padding: 1em 1em 1em 1em;\r\n    border: 0px transparent;\r\n    overflow-x: hidden;\r\n    margin: 0px;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.ab-button:focus {\r\n  outline: none;\r\n}\r\n\r\n/* .ab-button {\r\n  border: 0px transparent;\r\n  width: 5em;\r\n  height: fit-content;\r\n  border-bottom-right-radius: 6px;\r\n  border-top-right-radius: 0px;\r\n  background-color: transparent;\r\n  margin-top: 2%;\r\n} */\r\n\r\ninput:focus {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.ng-inValid {\r\n  border: none;\r\n}\r\n\r\n.ng-valid {\r\n  border: none;\r\n}\r\n\r\n.ng-touched {\r\n  border: none;\r\n}\r\n\r\n/* .ab-message-input-box {\r\n    height: 3em;width: 22em;overflow: hidden;border-radius: 0px 6px 6px 0px;\r\n} */\r\n\r\n.ab-message-input-box {\r\n    height: 3em;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    border-radius: 0px 6px 6px 0px;\r\n}\r\n\r\n/* .ab-message-input{\r\n    width:  fit-content;height: 3em;border: none;\r\n} */\r\n\r\n.ab-message-input{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 3em;\r\n    border: none;\r\n}\r\n\r\n.ab-button{\r\n    border: 0px transparent;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    border-bottom-right-radius: 6px;\r\n    border-top-right-radius: 0px;\r\n    background-color: transparent;\r\n    margin-top: 11px;\r\n    position: relative;\r\n    float: right;\r\n    right: 0%;\r\n    width: 6em;\r\n}\r\n\r\n/* .ab-header-chat {\r\n  position: relative;\r\n  background: linear-gradient(to left, #ff5e62, #ff9966);\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n} */\r\n\r\n.ab-header-chat{\r\n    position: relative;\r\n    background: -webkit-gradient(linear, right top, left top, from(#ff5e62), to(#ff9966));\r\n    background: linear-gradient(to left, #ff5e62, #ff9966);\r\n    height: 50px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n}\r\n\r\n.ab-send-arrow {}\r\n\r\n.ab-message-left {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  word-wrap: break-word;\r\n  background: white;\r\n  color: #222222;\r\n  padding: 30px;\r\n  margin: 1em 0em;\r\n  font-family: 'Dosis', sans-serif !important;\r\n  border-radius: .6em .6em .6em 0em;\r\n}\r\n\r\n/* .ab-left.description::before{\r\n    position: absolute;\r\n    content: \" \";\r\n    left: 5px;\r\n    /* bottom: 0; */\r\n\r\n/* border-right: solid 10px #b74545; */\r\n\r\n/* border-top: solid 10px transparent; */\r\n\r\n/* z-index: 0; */\r\n\r\n/* transform: translateY(61px); */\r\n\r\n/* } */\r\n\r\n.ab-message-right {\r\n  float: right;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  background: -webkit-gradient(linear, right top, left top, from(#ff5e62), to(#ff9966));\r\n  background: linear-gradient(to left, #ff5e62, #ff9966);\r\n  color: white;\r\n  padding: 30px;\r\n  margin: 1em 0em;\r\n  border-radius: .6em .6em 0em .6em;\r\n  word-wrap: break-word;\r\n  text-align: right;\r\n  -ms-flex-item-align: end;\r\n      align-self: flex-end;\r\n}\r\n\r\n/* .ab-message-right:hover + .ab-createdAt.right {\r\n    background-color: black;\r\n} */\r\n\r\n/* .ab-message-right::after {\r\n    position: absolute;\r\n    content: \" \";\r\n    right: 6px;\r\n    bottom: -12px;\r\n    border-left: solid 10px #ff5e62;\r\n    border-top: solid 10px transparent;\r\n    z-index: 0;\r\n} */\r\n\r\n.ab-createdAt.right {\r\n  background: transparent;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  position: relative;\r\n  float: right;\r\n  bottom: -44px;\r\n  font-size: xx-small;\r\n  right: -18px;\r\n}\r\n\r\n.ab-createdAt.left {\r\n  background: transparent;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  position: relative;\r\n  float: left;\r\n  bottom: -44px;\r\n  font-size: xx-small;\r\n  left: -18px;\r\n}\r\n\r\n.ab-header-options {\r\n  position: absolute;\r\n  right: 10px;\r\n}\r\n\r\n.ab-header-options>i:hover {\r\n  -webkit-transform: scale(1.2);\r\n          transform: scale(1.2);\r\n  -webkit-transition-duration: 400ms;\r\n          transition-duration: 400ms;\r\n}\r\n"

/***/ }),

/***/ "./src/app/_shared/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='chatWindow' [ngClass]=\"{'chat-container-expand': x, 'chat-container-shrink': !x}\" class=\"chat-container\">\r\n  <div class=\"ab-header-chat\">\r\n    {{receiver}}\r\n    <div class=\"ab-header-options\">\r\n      <i [ngClass]=\"expandClass\" class=\"icon\" (click)=\"expandClicked();\"></i>\r\n    </div>\r\n  </div>\r\n  <div id=\"chatBox\" class=\"chat-box ui card\">\r\n\r\n    <div [ngClass]=\"{'ab-message-left': message?.sender===receiver,'ab-message-right': message?.sender===sender}\" *ngFor=\"let message of messageArray1;\">\r\n      <!-- <span *ngIf=\"getDay(message?.created)\" ></span> -->\r\n      <h4 style=\"color: #222\">{{message?.sender}}</h4>\r\n      <div [ngClass]=\"{'ab-left': message?.sender===receiver,'ab-right': message?.sender===sender}\" class=\"description\">\r\n        {{message?.message}}\r\n      </div>\r\n      <div [ngClass]=\"{'left': message?.sender===receiver,'right': message?.sender===sender}\" class=\"ab-createdAt\">\r\n        {{getDayAndTime(message.created)}} At {{message?.created | date:'shortTime'}}\r\n      </div>\r\n    </div>\r\n    <div [ngClass]=\"{'ab-message-left': message?.sender===receiver,'ab-message-right': message?.sender===sender}\" *ngFor=\"let message of messageArray\">\r\n      <h4 style=\"color: #222\">{{message?.sender}}</h4>\r\n      <div class=\"description\">\r\n        {{message?.message}}\r\n      </div>\r\n      <div [ngClass]=\"{'left': message?.sender===receiver,'right': message?.sender===sender}\" class=\"ab-createdAt\">\r\n        {{getDayAndTime(message.created)}} At {{message?.created | date:'shortTime'}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui action input ab-message-input-box\">\r\n    <input type=\"text\" class=\"form-control ab-message-input\" [(ngModel)]=\"messageText\">\r\n    <button type=\"button\" class=\"ab-button ui\" (click)=\"sendMessage()\">\r\n      <svg height='24' viewbox='0 0 24 24' width='24' style=\"fill: tomato\">\r\n        <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'></path>\r\n      </svg>\r\n    </button>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!chatWindow && initiator.isHr\" class=\"ui segment\">\r\n  <button type=\"button\" (click)=\"sendInvite()\">Send Invite</button>\r\n</div>\r\n<div class=\"ui segment\" *ngIf=\"!chatWindow && initiator.isApplicant\">\r\n  <p class=\"ui mesage error\">\r\n    Please Check Your Invites.\r\n  </p>\r\n</div>"

/***/ }),

/***/ "./src/app/_shared/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/_shared/components/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(_chatService) {
        var _this = this;
        this._chatService = _chatService;
        this.expandClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "initiator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "recepient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "expandClick", void 0);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/_shared/components/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/_shared/components/chat/chat.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_component__ = __webpack_require__("./src/app/_shared/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_service__ = __webpack_require__("./src/app/_shared/components/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_invites_chatInvites_service__ = __webpack_require__("./src/app/_shared/components/chat-invites/chatInvites.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_invites_chat_invites_component__ = __webpack_require__("./src/app/_shared/components/chat-invites/chat-invites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ChatResolve } from './chat-resolve.service';






var chatRoutes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */],
    },
    {
        path: 'chat-invites',
        component: __WEBPACK_IMPORTED_MODULE_7__chat_invites_chat_invites_component__["a" /* ChatInvitesComponent */]
    }
]);
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chat_invites_chat_invites_component__["a" /* ChatInvitesComponent */]
            ],
            imports: [
                chatRoutes,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
                // BrowserModule,
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chat_invites_chat_invites_component__["a" /* ChatInvitesComponent */]
            ],
            providers: [
                // ChatResolve,
                __WEBPACK_IMPORTED_MODULE_3__chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_4__chat_invites_chatInvites_service__["a" /* ChatInvitesService */]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/_shared/components/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__('http://localhost:5000');
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
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USER_SERVER + "/join", value)
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
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USER_SERVER + "/enter/invites", { senderInfo: senderInfo })
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
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USER_SERVER + "/enter/accept/invites", { id: id })
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
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
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
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
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
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
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
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('send-invitation', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/_shared/components/forgetpassword/forgetpassword.component.css":
/***/ (function(module, exports) {

module.exports = "\r\ndiv.login-div::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n    \r\n    display: block;\r\n    background-size:cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n    /* -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n    filter: blur(3px); */\r\n    background-image: url('/assets/images/bg-images/login_page_bg_image.jpg');\r\n}\r\n\r\n\r\n.tomato {\r\n    border-color: tomato;\r\n    background-color: tomato;\r\n}\r\n\r\n\r\n.ng-invalid {\r\n    border-color: red;\r\n    /* background-color: red; */\r\n}"

/***/ }),

/***/ "./src/app/_shared/components/forgetpassword/forgetpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='field' *ngIf='forgetInfo'>\r\n  <div class=\"login-div\">\r\n    <div class=\"mid-body\">\r\n      <div class=\"ui raised very padded text container segment\">\r\n        <h1 class=\"h1-login\">Enter your registered mail address</h1>\r\n        <div class=\"ui middle aligned very relaxed stackable grid\">\r\n          <div class=\"column\">\r\n            <form class=\"ui form\" [formGroup]=\"loginEmailForm\">\r\n              <div class=\"field\">\r\n                <label>Email</label>\r\n                <div class=\"ui left icon input\">\r\n                  <input autofocus type=\"text\" placeholder=\"enter your registered email\" formControlName=\"userEmail\" [(ngModel)]='user_details.email'>\r\n                  <i class=\"user icon\"></i>\r\n                </div>\r\n                <div *ngIf=\"loginEmailForm.controls['userEmail'].touched&&!loginEmailForm.controls['userEmail'].valid\" class=\"alert alert-danger\">\r\n                  <p>please enter valid mail address</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"ui toggle checkbox\">\r\n                  <input type=\"checkbox\" name=\"public\" formControlName=\"isHr\" value=\"\">\r\n                  <label>I am an HR</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <button auto-focus class=\"ui tomato fluid submit button\" [disabled]=\"!loginEmailForm.valid\" (click)=\"resetPassword()\">submit</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"field\" *ngIf='resetInfo'>\r\n  <div class=\"login-div\">\r\n    <div class=\"mid-body\">\r\n      <div class=\"ui raised very padded text container segment\">\r\n        <h1 class=\"h1-login\">Reset password</h1>\r\n        <div class=\"ui middle aligned very relaxed stackable grid\">\r\n          <div class=\"column\">\r\n            <form class=\"ui form\" [formGroup]=\"resetForm\">\r\n              <div class=\"field\">\r\n                <label>Password</label>\r\n                <div class=\"ui left icon input\">\r\n                  <input type={{inputType}} placeholder=\"create new password\" formControlName=\"password\" [(ngModel)]='user_details.password'>\r\n                  <i class=\"lock icon\"></i>\r\n                </div>\r\n                <div *ngIf=\"resetForm.controls['password'].touched&&(resetForm.controls['password'].dirty&&!resetForm.controls['password'].valid)\"\r\n                  class=\"alert alert-danger\">\r\n                  <p>create strong password</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <label>Confirm Password</label>\r\n                <div class=\"ui left icon input\">\r\n                  <input type={{inputType}} placeholder=\"confirm your password\" formControlName=\"confirmPassword\" [(ngModel)]='compareValue'>\r\n                  <i class=\"lock icon\"></i>\r\n                </div>\r\n                <a href=\"javascript:void(0)\" (click)='tooglepwd()'>show/hide</a>\r\n                <div *ngIf=\"resetForm.controls['confirmPassword'].touched&&!(user_details.password===compareValue)\" class=\"alert alert-danger\">\r\n                  <p>Re-enter password as above</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <button auto-focus class=\"ui tomato fluid submit button\" [disabled]=\"!(resetForm.valid&&user_details.password===compareValue)\"\r\n                  (click)=\"onSubmit()\"><i class='lock icon'>Reset Password</i></button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_shared/components/forgetpassword/forgetpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_applicantbase__ = __webpack_require__("./src/app/_shared/models/applicantbase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgetpasswordComponent = /** @class */ (function () {
    function ForgetpasswordComponent(fb, _userbase, router) {
        this.fb = fb;
        this._userbase = _userbase;
        this.router = router;
        this.forgetInfo = true;
        this.resetInfo = false;
        this.inputType = 'password';
        this.user_details = __WEBPACK_IMPORTED_MODULE_3__models_applicantbase__["a" /* ApplicantBase */].createblank();
        this.loginEmailForm = fb.group({
            userEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
            isHr: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](false, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
        this.resetForm = fb.group({
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])
        });
    }
    ForgetpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetpasswordComponent.prototype.tooglepwd = function () {
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else if (this.inputType === 'text') {
            this.inputType = 'password';
        }
    };
    ForgetpasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        console.log('form value', this.loginEmailForm.value);
        this.forgetInfo = false;
        this._userbase.checkMailId(this.loginEmailForm.value).subscribe(function (res) {
            console.log('id exists', res);
            if (res) {
                _this.resetInfo = true;
            }
            else {
                window.alert('Email address was not registered with us Please Signup with Jobnut');
                _this.router.navigateByUrl('signin');
            }
        });
    };
    ForgetpasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userbase.passwordUpdate(this.loginEmailForm.value, this.resetForm.value.password)
            .subscribe(function (res) {
            console.log('password updated successfully', res);
            _this.router.navigateByUrl('login');
        });
    };
    ForgetpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgetpassword',
            template: __webpack_require__("./src/app/_shared/components/forgetpassword/forgetpassword.component.html"),
            styles: [__webpack_require__("./src/app/_shared/components/forgetpassword/forgetpassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__services_user_base_service__["a" /* UserBaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ForgetpasswordComponent);
    return ForgetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ".hidden.menu {\r\n    display: none;\r\n  }\r\n  \r\n  .masthead.segment {\r\n    min-height: 600px;\r\n    padding: 1em 0em;\r\n  }\r\n  \r\n  .masthead .logo.item img {\r\n    margin-right: 1em;\r\n  }\r\n  \r\n  .masthead .ui.menu .ui.button {\r\n    margin-left: 0.5em;\r\n  }\r\n  \r\n  .masthead h1.ui.header {\r\n    margin-top: 2em;\r\n    margin-bottom: 0em;\r\n    font-size: 4em;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  .masthead h2 {\r\n    font-size: 1.7em;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  .ui.vertical.stripe {\r\n    padding: 8em 0em;\r\n  }\r\n  \r\n  .ui.vertical.stripe h3 {\r\n    font-size: 2em;\r\n  }\r\n  \r\n  .ui.vertical.stripe .button + h3,\r\n  .ui.vertical.stripe p + h3 {\r\n    margin-top: 3em;\r\n  }\r\n  \r\n  .ui.vertical.stripe .floated.image {\r\n    clear: both;\r\n  }\r\n  \r\n  .ui.vertical.stripe p {\r\n    font-size: 1.33em;\r\n  }\r\n  \r\n  .ui.vertical.stripe .horizontal.divider {\r\n    margin: 3em 0em;\r\n  }\r\n  \r\n  .quote.stripe.segment {\r\n    padding: 0em;\r\n  }\r\n  \r\n  .quote.stripe.segment .grid .column {\r\n    padding-top: 5em;\r\n    padding-bottom: 5em;\r\n  }\r\n  \r\n  .footer.segment {\r\n    padding: 5em 0em;\r\n  }\r\n  \r\n  .secondary.pointing.menu .toc.item {\r\n    display: none;\r\n  }\r\n  \r\n  @media only screen and (max-width: 700px) {\r\n    .ui.fixed.menu {\r\n      display: none !important;\r\n    }\r\n    .secondary.pointing.menu .item,\r\n    .secondary.pointing.menu .menu {\r\n      display: none;\r\n    }\r\n    .secondary.pointing.menu .toc.item {\r\n      display: block;\r\n    }\r\n    .masthead.segment {\r\n      min-height: 350px;\r\n    }\r\n    .masthead h1.ui.header {\r\n      font-size: 2em;\r\n      margin-top: 1.5em;\r\n    }\r\n    .masthead h2 {\r\n      margin-top: 0.5em;\r\n      font-size: 1.5em;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/_shared/components/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui large top fixed hidden menu\">\r\n  <div class=\"ui container\">\r\n    <a class=\"active item\">Home</a><a class=\"item\">Work</a><a class=\"item\">Company</a><a class=\"item\">Careers</a>\r\n    <div class=\"right menu\">\r\n      <div class=\"item\">\r\n        <a class=\"ui button\" routerLink=\"/login\">Log in</a>\r\n      </div>\r\n      <div class=\"item\">\r\n        <a class=\"ui primary button\">Sign Up</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<!--Sidebar Menu-->\r\n<!-- <div class=\"ui vertical inverted sidebar menu\">\r\n  <a class=\"active item\">Home</a><a class=\"item\">Work</a><a class=\"item\">Company</a><a class=\"item\">Careers</a><a class=\"item\" routerLink=\"/login\" >Login</a><a class=\"item\" (click)=\"signupclicked()\" >Signup</a>\r\n</div> -->\r\n<!--Page Contents-->\r\n<div class=\"pusher\">\r\n  <div class=\"ui inverted vertical masthead center aligned segment\" style=\"background: tomato\">\r\n    <div class=\"ui container\">\r\n      <div class=\"ui large secondary inverted pointing menu\">\r\n        <a class=\"toc item\"><i class=\"sidebar icon\"></i></a><a class=\"active item\">Home</a><a class=\"item\">Work</a><a class=\"item\">Company</a><a class=\"item\">Careers</a>\r\n        <div class=\"right item\">\r\n          <a class=\"ui inverted button\" href=\"javascript:void(0)\" (click)=\"loginclicked()\" >Log in</a><a class=\"ui inverted button\" href=\"javascript:void(0)\" (click)=\"signupclicked()\">Sign Up</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui text container\">\r\n      <h1 class=\"ui inverted header\">\r\n        Imagine-a-Company\r\n      </h1>\r\n      <h2>\r\n        Do whatever you want when you want to.\r\n      </h2>\r\n      <div class=\"ui huge primary button\" (click)=\"signupclicked()\">\r\n        Get Started<i class=\"right arrow icon\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui vertical stripe segment\">\r\n    <div class=\"ui middle aligned stackable grid container\">\r\n      <div class=\"row\">\r\n        <div class=\"eight wide column\">\r\n          <h3 class=\"ui header\">\r\n            We Help Companies and Companions\r\n          </h3>\r\n          <p>\r\n            We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.\r\n          </p>\r\n          <h3 class=\"ui header\">\r\n            We Make Bananas That Can Dance\r\n          </h3>\r\n          <p>\r\n            Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.\r\n          </p>\r\n        </div>\r\n        <div class=\"six wide right floated column\">\r\n          <img class=\"ui large bordered rounded image\" src=\"assets/images/avatars/elyse.png\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"center aligned column\">\r\n          <a class=\"ui huge button\">Check Them Out</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui vertical stripe quote segment\">\r\n    <div class=\"ui equal width stackable internally celled grid\">\r\n      <div class=\"center aligned row\">\r\n        <div class=\"column\">\r\n          <h3>\r\n            \"What a Company\"\r\n          </h3>\r\n          <p>\r\n            That is what they all say about us\r\n          </p>\r\n        </div>\r\n        <div class=\"column\">\r\n          <h3>\r\n            \"I shouldn't have gone with their competitor.\"\r\n          </h3>\r\n          <p>\r\n            <img class=\"ui avatar image\" src=\"assets/images/avatars/elliot.jpg\" /><b>Nan</b>Chief Fun Officer Acme Toys\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui vertical stripe segment\">\r\n    <div class=\"ui text container\">\r\n      <h3 class=\"ui header\">\r\n        Breaking The Grid, Grabs Your Attention\r\n      </h3>\r\n      <p>\r\n        Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.\r\n      </p>\r\n      <a class=\"ui large button\">Read More</a>\r\n      <h4 class=\"ui horizontal header divider\">\r\n        <a href=\"homepage.html#\"> Case Studies</a>\r\n      </h4>\r\n      <h3 class=\"ui header\">\r\n        Did We Tell You About Our Bananas?\r\n      </h3>\r\n      <p>\r\n        Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.\r\n      </p>\r\n      <a class=\"ui large button\">I'm Still Quite Interested</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui inverted vertical footer segment\" style=\"background: tomato\">\r\n    <div class=\"ui container\">\r\n      <div class=\"ui stackable inverted divided equal height stackable grid\">\r\n        <div class=\"three wide column\">\r\n          <h4 class=\"ui inverted header\">\r\n            About\r\n          </h4>\r\n          <div class=\"ui inverted link list\" >\r\n            <a class=\"item\" href=\"homepage.html#\"> Sitemap</a><a class=\"item\" href=\"homepage.html#\"> Contact Us</a><a class=\"item\" href=\"homepage.html#\"> Religious Ceremonies</a><a class=\"item\" href=\"homepage.html#\"> Gazebo Plans</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"three wide column\">\r\n          <h4 class=\"ui inverted header\">\r\n            Services\r\n          </h4>\r\n          <div class=\"ui inverted link list\" >\r\n            <a class=\"item\" href=\"homepage.html#\"> Banana Pre-Order</a><a class=\"item\" href=\"homepage.html#\"> DNA FAQ</a><a class=\"item\" href=\"homepage.html#\"> How To Access</a><a class=\"item\" href=\"homepage.html#\"> Favorite X-Men</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"seven wide column\">\r\n          <h4 class=\"ui inverted header\">\r\n            Footer Header\r\n          </h4>\r\n          <p>\r\n            Extra space for a call to action inside the footer that could help re-engage users.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_shared/components/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router) {
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        $(document)
            .ready(function () {
            // fix menu when passed
            $('.masthead')
                .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });
            // create sidebar and attach to menu open
            $('.ui.sidebar')
                .sidebar('attach events', '.toc.item');
        });
    };
    HomePageComponent.prototype.signupclicked = function () {
        this.router.navigateByUrl('signin');
    };
    HomePageComponent.prototype.loginclicked = function () {
        this.router.navigateByUrl('login');
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/_shared/components/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/_shared/components/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\ndiv.login-div::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n    \r\n    display: block;\r\n    background-size:cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n    /* -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n    filter: blur(3px); */\r\n    background-image: url('/assets/images/bg-images/login_page_bg_image.jpg');\r\n}\r\n\r\nh1.h1-login {\r\n    border:2px solid;\r\n    background-repeat: no-repeat;\r\n    background-size: inherit;\r\n    /* color: seashell; */\r\n    background-image: url('/assets/images/bg-images/login_page_bg_image.jpg');\r\n    text-align: center;\r\n}\r\n\r\n.tomato {\r\n    border-color: tomato;\r\n    background-color: tomato;\r\n}\r\n\r\n.ng-invalid {\r\n    border-color: red;\r\n    /* background-color: red; */\r\n}"

/***/ }),

/***/ "./src/app/_shared/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-div\">\r\n  <div class=\"mid-body\">\r\n    <div class=\"ui raised very padded text container segment\">\r\n      <h1 class=\"h1-login\">Login</h1>\r\n      <div class=\"ui middle aligned very relaxed stackable grid\">\r\n        <div class=\"column\">\r\n          <form class=\"ui form\" [formGroup]=\"loginForm\" >\r\n            <div class=\"field\">\r\n              <label>Username</label>\r\n              <div class=\"ui left icon input\">\r\n                <input  type=\"text\" placeholder=\"Username\" formControlName=\"username\" >\r\n                <i class=\"user icon\"></i>\r\n              </div>\r\n              <div *ngIf=\"loginForm.controls['username'].touched&&!loginForm.controls['username'].valid\" class=\"alert alert-danger\">\r\n                  <p>{{message.username.text}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <label>Password</label>\r\n              <div class=\"ui left icon input\">\r\n                <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" >\r\n                <i class=\"lock icon\"></i>\r\n              </div>\r\n              <div *ngIf=\"loginForm.controls['password'].touched&&!loginForm.controls['password'].valid\" class=\"alert alert-danger\">\r\n                  <p>{{message.password.text}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <button auto-focus class=\"ui tomato fluid submit button\" [disabled]=\"!loginForm.valid\" (click)=\"login()\">login</button>\r\n            </div>\r\n\r\n            <div class=\"field\">\r\n                <div class=\"ui toggle checkbox\">\r\n                  <input type=\"checkbox\" name=\"public\" formControlName=\"isHr\" value=\"\">\r\n                    <label>I am an HR</label>\r\n                  </div>\r\n                </div>\r\n                \r\n            <div class=\"field\">\r\n              <h4><a href=\"javascript:void(0)\" (click)=\"forgetPassword()\">Forgot your password?</a></h4>\r\n            </div>\r\n            </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui container segment text middle text-center aligned padded\">\r\n      New To Jobnut?\r\n      <a href=\"javascript:void(0)\" (click)=\"signupButtonClicked()\">Sign Up</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/_shared/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_jwt_service__ = __webpack_require__("./src/app/_shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/_shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_jwtService, fb, route, router, _authService) {
        this._jwtService = _jwtService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this._authService = _authService;
        this.message = {
            username: {
                text: 'Username Required!',
            },
            password: {
                text: 'Password Required!',
            }
        };
        this.loginForm = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            isHr: [false, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.cover_photo = '../../assets/images/pics/1.png';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._authService.isLoggedIn) {
            this.router.navigateByUrl('hr');
        }
        this.router.navigateByUrl('');
    };
    LoginComponent.prototype.signupButtonClicked = function () {
        this.router.navigateByUrl('signin');
        return false;
    };
    // abhishek's changes for routing data token jwt
    LoginComponent.prototype.login = function () {
        var _this = this;
        var val = this.loginForm.value;
        // console.log(val);
        if (val.username && val.password) {
            // console.log(' :im here');
            this._authService.login(val)
                .subscribe(function (yo) {
                if (yo.user && yo.user.status && yo.user.isHr) {
                    _this.router.navigateByUrl('hr');
                }
                if (yo.user && yo.user.status && yo.user.isApplicant) {
                    console.log('user logged in', yo);
                    _this.router.navigateByUrl('user-profile/user-view-post');
                }
            }, function (error) {
                alert(error.message);
                console.log('fhfhfhfhfh', error);
            });
        }
    };
    LoginComponent.prototype.forgetPassword = function () {
        this.router.navigateByUrl('forgetPassword');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/_shared/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/_shared/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_jwt_service__["a" /* JwtService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/misc/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_shared/components/misc/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/_shared/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(data, route) {
        this.data = data;
        this.route = route;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.applicant = message; });
        this.id = this.route.snapshot.queryParamMap.get('_id');
        this.applicant = JSON.stringify(this.applicant);
        console.log('data is : ', this.id);
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__("./src/app/_shared/components/misc/callback/callback.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/misc/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n  div.anim {\r\n    transition-delay: 100ms;\r\n    /* position: fixed; */\r\n    transform-style: preserve-3d;\r\n    transition-timing-function: ease-in-out;\r\n  }\r\n</style>\r\n<div class=\"ui info message compact swing animated\" style=\"margin: 2em 2em;position: absolute;top:0%;left:0%;\">\r\n  <div class=\"header\">\r\n    {{title}}\r\n  </div>\r\n    <p>{{message}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_shared/components/misc/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("./src/app/_shared/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NotificationService } from '../../../_shared/notification.service';
// @Directive({
//   // tslint:disable-next-line:directive-selector
//   selector: '[popup]'
// })
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(_notif) {
        var _this = this;
        this._notif = _notif;
        this.cssClass = 'active';
        this.donePopup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.message = _notif.message;
        this.title = _notif.title;
        this.stay = _notif.stay;
        this.isActive = _notif.activatePopup;
        // this.cssClass = this.isActive ? 'active' : 'hidden';
        console.log('_notif- ', _notif);
        setTimeout(function () {
            _this.donePopup.emit(false);
        }, this.stay);
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    // ngOnChanges(changes: SimpleChanges): void {
    //   if (this.data) {
    // Object.assign(this, this.data);
    //   }
    //   console.log(this);
    // }
    NotificationComponent.prototype.ngOnChanges = function () {
        this.message = this._notif.message;
        this.title = this._notif.title;
        this.stay = this._notif.stay;
        this.isActive = this._notif.activatePopup;
    };
    NotificationComponent.prototype.displayMessage = function () {
        console.log('messa: ', this.message);
        this.donePopup.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.class'),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "donePopup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NotificationComponent.prototype, "displayMessage", null);
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__("./src/app/_shared/components/misc/notification/notification.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/signup/applicant/applicant.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n  }\r\n  p{\r\n    color:red\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/_shared/components/signup/applicant/applicant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui secondary pointing menu sticky fixed top\" style=\"background-color: #aca978;\">\r\n  <a class=\"item\" style=\"width: 44%;\"></a>\r\n  <!-- <a class=\"item\" style=\"color: white\" [style.border-bottom]=\"personalInfo?'#222 solid':default\"> -->\r\n  <a class=\"item\" style=\"color: white\" [style.border-bottom]=\"personalInfo?'#222 solid':default\">\r\n    Personal Details\r\n  </a>\r\n  <a class=\"item\" style=\"color: white\" [style.border-bottom]=\"educationInfo?'#222 solid':default\">\r\n  <!-- <a class=\"item\" style=\"color: white\" [style.border-bottom]=\"educationInfo?'#222 solid':default\"> -->\r\n    Education\r\n  </a>\r\n</div>\r\n\r\n<div class=\"main ui container\" style=\"position: absolute;background-image: url('assets/images/bg-images/signup_page_bg.png');width: 100%; height: 100%; overflow: auto;; background-size: cover;\">\r\n  <div class=\"ui very padded container segment\" style=\" margin-top: 5%;\">\r\n\r\n    <form class=\"ui form\" [formGroup]=\"applicantForm\">\r\n      <div class=\"field\">\r\n        <div class=\"two fields\">\r\n          <div class=\"field\">\r\n            <label>First Name\r\n              <span style='color:red'>*</span>\r\n            </label>\r\n            <input  autofocus type=\"text\" formControlName=\"firstName\" placeholder=\"john\" [(ngModel)]=\"user_details.firstName\">\r\n            <div *ngIf=\"applicantForm.controls['firstName'].touched&&!applicantForm.controls['firstName'].valid\">\r\n              <p>Name need to be AtLeast 4 characters</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>Last Name</label>\r\n            <input  type=\"text\" formControlName=\"lastName\" placeholder=\"Carter\" [(ngModel)]=\"user_details.lastName\">\r\n          </div>\r\n        </div>\r\n        <div class=\"two fields\">\r\n          <div class=\"field\">\r\n            <label>Date Of Birth\r\n              <span style='color:red'>*</span>\r\n            </label>\r\n            <input type=\"date\" formControlName=\"dob\" placeholder=\"enter date of birth\" [(ngModel)]=\"user_details.dob\">\r\n            <div *ngIf=\"!applicantForm.controls['dob'].dirty && applicantForm.controls['dob'].touched\">\r\n              <p>Date of Birth required</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>Gender\r\n              <span style='color:red'>*</span>\r\n            </label>\r\n            <select class=\"ui fluid search dropdown\" formControlName=\"gender\" [(ngModel)]=\"user_details.gender\">\r\n              <option value=\"\">select your gender</option>\r\n              <option [value]='gender' *ngFor=\"let gender of genders\">{{gender}}</option>\r\n            </select>\r\n            <div *ngIf=\"applicantForm.controls['gender'].touched&&!applicantForm.controls['gender'].valid\">\r\n              <p>please fill required fields</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Mobile Number\r\n            <span style='color:red'>*</span>\r\n          </label>\r\n          <input type=\"number\" formControlName=\"phone\" placeholder=\"please enter your contact number\" [(ngModel)]=\"user_details.phone\">\r\n          <div *ngIf=\"applicantForm.controls['phone'].touched &&!applicantForm.controls['phone'].valid\">\r\n            <p>enter a valid mobile number </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"two fields\">\r\n          <div class=\"field\">\r\n            <label>Email\r\n              <span style='color:red'>*</span>\r\n            </label>\r\n            <input type=\"text\" formControlName=\"email\" placeholder=\"valid Email addresss\" [(ngModel)]=\"user_details.email\">\r\n            <div *ngIf=\"applicantForm.controls['email'].touched&&!applicantForm.controls['email'].valid\">\r\n              <p>Enter a valid email address</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>Password\r\n              <span style='color:red'>*</span>\r\n            </label>\r\n            <div class=\"ui icon input\">\r\n              <input type={{inputType}} name=\"Password\" formControlName=\"password\" placeholder=\"create strong password\" [(ngModel)]=\"user_details.password\" (focus)='userExist()'>\r\n              <i [ngClass]=\"{red: !applicantForm.controls.password.valid, thumbs: !applicantForm.controls.password.valid, down:!applicantForm.controls.password.valid,green: applicantForm.controls.password.valid ,shield: applicantForm.controls.password.valid , alternate: applicantForm.controls.password.valid , icon:true}\"></i>\r\n            </div>\r\n            <a href=\"javascript:void(0)\" (click)=\"tooglepwd()\">show/hide</a>\r\n            <div *ngIf=\"applicantForm.controls['password'].touched&&!applicantForm.controls['password'].valid\">\r\n              <p>please create strong password</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"two fields\">\r\n          <div class=\"field\">\r\n            <label>State\r\n              <span style='color:red'>*</span>\r\n            </label>\r\n            <select class=\"ui fluid search dropdown\" formControlName=\"state\" [(ngModel)]=\"user_details.state\">\r\n              <option value=\"\">select your state</option>\r\n              <option [value]='state' *ngFor=\"let state of states\">{{state}}</option>\r\n            </select>\r\n            <div *ngIf=\"((user_details.state=='select your state')&&!applicantForm.controls['state'].valid)&&applicantForm.controls['state'].touched\">\r\n              <p>please fill required fields</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>city\r\n              <span style='color:red'>*</span>\r\n            </label>\r\n            <select class=\"ui fluid search dropdown\" formControlName=\"city\" [(ngModel)]=\"user_details.city\">\r\n              <option value=''>select your city</option>\r\n              <option [value]='city' *ngFor=\"let city of cities\">{{city}}</option>\r\n            </select>\r\n            <div *ngIf=\"applicantForm.controls['city'].touched&&((user_details.city=='select your city')&&!applicantForm.controls['city'].valid)\">\r\n              <p>please fill required fields</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <label>Address\r\n            <span style='color:red'>*</span>\r\n          </label>\r\n          <input type=\"text\" formControlName=\"address\" placeholder=\"enter your current Address\" [(ngModel)]=\"user_details.address\">\r\n          <div *ngIf=\"applicantForm.controls['address'].touched&&!applicantForm.controls['address'].valid\">\r\n            <p>please fill required fields</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Country\r\n            <span style='color:red'>*</span>\r\n          </label>\r\n          <input type=\"text\" formControlName=\"country\" placeholder=\"enter your current country\" [(ngModel)]=\"user_details.country\">\r\n          <div *ngIf=\"applicantForm.controls['country'].touched&&!applicantForm.controls['country'].valid\">\r\n            <p>please fill required fields</p>\r\n          </div>\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"field\">\r\n          <div class=\"field\">\r\n            <label>Highest Qualification\r\n              <span style='color:red'>*</span>\r\n            </label>\r\n            <select class=\"ui fluid search dropdown\" formControlName=\"higherDegreeValue_{{0}}\" [(ngModel)]=\"user_details.education[0].higherDegreeValue\" (focus)=\"infoChange()\">\r\n              <option value=\"\">Select your highest qualification</option>\r\n              <option [value]='i' *ngFor=\"let i of highestDegreeArray\">{{i}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>University/College/school\r\n              <span style='color:red'>*</span>\r\n            </label>\r\n            <input type=\"text\" placeholder=\"Institute Name\" formControlName=\"universityName_{{0}}\" [(ngModel)]=\"user_details.education[0].universityName\"\r\n            />\r\n          </div>\r\n          <div class=\"two fields\">\r\n            <div class=\"field\">\r\n              <label>Passing Year\r\n                <span style='color:red'>*</span>\r\n              </label>\r\n              <select class=\"ui fluid search dropdown\" formControlName=\"passingYearValue_{{0}}\" [(ngModel)]=\"user_details.education[0].passingYearValue\">\r\n                <option value=\"\">Select passing year</option>\r\n                <option [value]='i' *ngFor=\"let i of yearArray\">{{i}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"field\">\r\n              <label>Percentage/CGPA\r\n                <span style='color:red'>*</span>\r\n              </label>\r\n              <input type=\"text\" placeholder=\"enter you percentage\" formControlName=\"percentageValue_{{0}}\" [(ngModel)]=\"user_details.education[0].percentageValue\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Skills\r\n            <span style='color:red'>*</span>\r\n          </label>\r\n          <select multiple=\"\" formControlName=\"skillValue\" class=\"ui fluid search dropdown\" [(ngModel)]=\"user_details.skillValue\">\r\n            <option value=''>select your skills</option>\r\n            <option [value]='i' *ngFor=\"let i of skills\">{{i}}</option>\r\n          </select>\r\n          <div *ngIf=\"((user_details.skillValue.includes('select your skills'))&&!applicantForm.controls['skillValue'].valid )&& applicantForm.controls['skillValue'].touched\">\r\n            <p>Please fill required fields</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui toggle checkbox\">\r\n          <input type=\"checkbox\" name=\"public\" formControlName='termsCheck'>\r\n          <label>I Agree to the\r\n            <a href=\"#\">Terms and Conditions</a>\r\n          </label>\r\n          <div *ngIf=\"!applicantForm.controls['termsCheck'].valid&&applicantForm.controls['termsCheck'].touched\">\r\n            <p>{{errorMsg}}*</p>\r\n          </div>\r\n        </div>\r\n        <div class='field'>\r\n          <button  auto-focus class=\"btn btn-success\" (click)=\"onSubmit()\" [disabled]=\"!applicantForm.valid\">Sign Up</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_shared/components/signup/applicant/applicant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_applicantbase__ = __webpack_require__("./src/app/_shared/models/applicantbase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_india_cities_json__ = __webpack_require__("./src/app/_shared/data/india-cities.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_india_cities_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__data_india_cities_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApplicantComponent = /** @class */ (function () {
    function ApplicantComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
        this.cities = [];
        this.states = [];
        this.genders = [];
        this.personalInfo = false;
        this.educationInfo = false;
        this.user_details = __WEBPACK_IMPORTED_MODULE_3__models_applicantbase__["a" /* ApplicantBase */].createblank();
        this.buildFormGroup();
        this.states = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'TamilNadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
        ];
        this.genders = ['Male', 'Female', 'Other'];
        this.highestDegreeArray = ['B.A', 'B.Arch', 'B.Des', 'B.EL.Ed', 'B.P.Ed', 'B.U.M.S', 'BAMS', 'BCA', 'B.B.A/B.B.M', 'B.Com', 'B.Ed', 'BDS', 'BFA', 'BHM', 'B.Phrama', 'B.Sc', 'B.Tech/B.E', 'BHMS', 'MBBS', 'Diploma', 'BVSC', '12th', '10th', 'other'];
        this.skills = ['Angular', 'ASP.Net', 'C#', 'C#.Net', 'ADO.Net', 'SQL Server', 'Spring', 'C', 'C++', 'JAVA', 'CSS', 'Graphic Design', 'Ember', 'DataBase', 'PHP', 'Full Stack Developing', 'Testing', 'HTML', 'Javascript', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
        this.yearArray = this.years();
        this.cities = __WEBPACK_IMPORTED_MODULE_5__data_india_cities_json__;
        this.profile_photo = null;
        this.isApplicant = true;
        this.isHr = false;
        this.status = true;
        this.inputType = 'password';
    }
    ApplicantComponent.prototype.years = function () {
        var year = [];
        for (var i = 1990; i <= 2030; i++) {
            year.push(i);
        }
        return year;
    };
    ApplicantComponent.prototype.buildFormGroup = function () {
        var fg = {
            'firstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)]),
            'lastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            'dob': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'gender': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]{10}')]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            'state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'skillValue': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'termsCheck': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        };
        if (this.user_details.education) {
            for (var i = 0; i < this.user_details.education.length; i++) {
                fg['higherDegreeValue_' + i] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.user_details.education[i].higherDegreeValue, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
                fg['universityName_' + i] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.user_details.education[i].universityName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
                fg['passingYearValue_' + i] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.user_details.education[i].passingYearValue, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
                fg['percentageValue_' + i] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.user_details.education[i].percentageValue, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
            }
        }
        this.user_details.isApplicant = true;
        this.user_details.isHr = false;
        this.user_details.status = true;
        this.applicantForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](fg);
    };
    ApplicantComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
    };
    ApplicantComponent.prototype.infoChange = function () {
        this.personalInfo = false;
        this.educationInfo = true;
    };
    ApplicantComponent.prototype.userExist = function () {
        var _this = this;
        var emailObj = {
            userEmail: this.applicantForm.value.email,
            isHr: false
        };
        if (this.applicantForm.value.email != null && this.applicantForm.value.email !== undefined) {
            this._userService.checkMailId(emailObj).subscribe(function (res) {
                if (res.status) {
                    window.alert('Email address was already registered with us Please click ok to login');
                    _this.router.navigateByUrl('login');
                }
            });
        }
    };
    ApplicantComponent.prototype.tooglepwd = function () {
        console.log('form pass', this.applicantForm.controls.password.valid);
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else if (this.inputType === 'text') {
            this.inputType = 'password';
        }
    };
    ApplicantComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Applicant details', this.user_details);
        this.user_details.skillValue = this.user_details.skillValue.filter(function (ele) {
            if (ele !== 'select your skills') {
                return ele;
            }
        });
        this._userService.addNewUser(this.user_details, {
            profile_photo: this.profile_photo
        }).then(function (result) {
            _this.router.navigateByUrl('login');
            console.log(result);
        });
    };
    ApplicantComponent.prototype.fileTypeCheck = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file_1 = event.target.files[0];
            if (file_1.type.split('/')[0] === 'image') {
                var reader = new FileReader();
                reader.onload = function (rdr) {
                    console.log('image: ', file_1.type.split('/')[0]);
                    _this.imageFile = false;
                };
                // reader reads the image uploaded
                reader.readAsDataURL(event.target.files[0]);
                this.profile_photo = event.target.files[0];
            }
            else {
                alert('Filetype Not Supported.');
                this.imageFile = true;
                // this.fileTypeCheck(event);
            }
        }
    };
    ApplicantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applicant',
            template: __webpack_require__("./src/app/_shared/components/signup/applicant/applicant.component.html"),
            styles: [__webpack_require__("./src/app/_shared/components/signup/applicant/applicant.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_user_base_service__["a" /* UserBaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ApplicantComponent);
    return ApplicantComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/signup/hr/hr.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n.ui button {\r\n  background-color: rgb(0, 106, 114);\r\n  color: white\r\n}\r\np{\r\n  color:red\r\n}\r\n.registration-hr {\r\n  margin: 2em auto;\r\n}\r\n/* arrow back animation */\r\n.arrow {\r\n  position: absolute;\r\n  top: 50%;\r\n  width: 3vmin;\r\n  height: 3vmin;\r\n  background: transparent;\r\n  border-top: 1vmin solid #222222;\r\n  border-right: 1vmin solid #222222;\r\n  -webkit-box-shadow: 0 0 0 rgb(20, 17, 17);\r\n          box-shadow: 0 0 0 rgb(20, 17, 17);\r\n  -webkit-transition: all 200ms ease;\r\n  transition: all 200ms ease;\r\n}\r\n.arrow.left {\r\n  left: 3em;\r\n  -webkit-transform: translate3d(0, -50%, 0) rotate(-135deg);\r\n          transform: translate3d(0, -50%, 0) rotate(-135deg);\r\n}\r\n.arrow:hover {\r\n  border-color: tomato;\r\n  -webkit-box-shadow: 0.5vmin -0.5vmin 0 white;\r\n          box-shadow: 0.5vmin -0.5vmin 0 white;\r\n}\r\n.arrow:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-40%, -60%) rotate(45deg);\r\n          transform: translate(-40%, -60%) rotate(45deg);\r\n  width: 200%;\r\n  height: 200%;\r\n}\r\n/* arrow back animation */"

/***/ }),

/***/ "./src/app/_shared/components/signup/hr/hr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main ui container\" style=\"position: absolute;background-image: url('assets/images/bg-images/signup_page_bg.png');width: 100%; height: 100%; overflow: auto;; background-size: cover;\">\r\n<div class=\"registration-hr\">\r\n  <div class=\"ui\" style=\"float: left;\" (click)=\"goBack()\">\r\n    <span class=\"arrow left\"></span>\r\n  </div>\r\n</div>\r\n<div class=\"ui very padded container segment\">\r\n  <form [formGroup]=\"signupForm\" class=\"ui form\">\r\n    <h4 class=\"ui dividing header\">New H.R Registration</h4>\r\n    <div class=\"field\">\r\n      <label>Name *</label>\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <input autofocus type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"hrDetails.firstName\" formControlName=\"firstName\">\r\n          <div *ngIf=\"!signupForm.controls['firstName'].valid && signupForm.controls['firstName'].touched\">\r\n              <p>{{errorMsg}}*</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"hrDetails.lastName\" formControlName=\"lastName\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Email *</label>\r\n      <div class=\"fields\">\r\n        <div class=\"eight wide field\">\r\n          <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"hrDetails.email\" formControlName=\"email\">\r\n          <div *ngIf=\"!signupForm.controls['email'].valid && signupForm.controls['email'].touched\">\r\n              <p>{{errorMsg}}*</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"eight wide field\">\r\n          <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"hrDetails.password\" formControlName=\"password\" (focus)=\"hrExist()\">\r\n          <div *ngIf=\"!signupForm.controls['password'].valid && signupForm.controls['password'].touched\">\r\n              <p>{{errorMsg}}*</p>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Date Of Birth\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"date\" formControlName=\"dob\" placeholder=\"enter date of birth\" [(ngModel)]=\"hrDetails.dob\">\r\n      <div *ngIf=\"!signupForm.controls['dob'].valid && signupForm.controls['dob'].touched\">\r\n          <p>{{errorMsg}}*</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Phone *</label>\r\n      <div class=\"field\">\r\n        <input type=\"text\" placeholder=\"phone\" [(ngModel)]=\"hrDetails.phone\" formControlName=\"phone\">\r\n        <div *ngIf=\"!signupForm.controls['phone'].valid && signupForm.controls['phone'].touched\">\r\n            <p>{{errorMsg}}*</p>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"two fields\">\r\n      <div class=\"field\">\r\n        <label>Industry type</label>\r\n        <select class=\"ui fluid search dropdown\"  [(ngModel)]=\"hrDetails.industry\" formControlName=\"industry\">\r\n          <option value=''>select your industry</option>\r\n          <option [value]=\"industry\" *ngFor=\"let industry of options\">{{industry}}</option>\r\n        </select>\r\n        <div *ngIf=\"(hrDetails.industry==='select your industry')&&signupForm.controls['industry'].valid\">\r\n            <p>{{errorMsg}}*</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Country *</label>\r\n        <input type=\"text\" placeholder=\"country\" [(ngModel)]=\"hrDetails.country\" formControlName=\"country\">\r\n      </div>\r\n    </div>\r\n    <div class=\"two fields\">\r\n      <div class=\"field\">\r\n        <label>State *</label>\r\n        <select class=\"ui fluid search dropdown\"  formControlName=\"state\" [(ngModel)]=\"hrDetails.state\">\r\n            <option value=''>select your state</option>\r\n            <option [value]=\"state\" *ngFor=\"let state of states\">{{state}}</option>\r\n          </select>\r\n          <div *ngIf=\"(hrDetails.state==='select your state')&&signupForm.controls['state'].valid\">\r\n              <p>{{errorMsg}}*</p>\r\n            </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>City</label>\r\n        <select  class=\"ui fluid search dropdown\"  formControlName=\"city\" [(ngModel)]=\"hrDetails.city\">\r\n            <option value=''>select your city</option>\r\n          <option [value]=\"city\" *ngFor=\"let city of cities\">{{city}}</option>\r\n        </select>\r\n        <div *ngIf=\"(hrDetails.city==='select your city')&&signupForm.controls['city'].valid\">\r\n            <p>{{errorMsg}}*</p>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Designation *</label>\r\n      <input type=\"text\" placeholder=\"Designation\" [(ngModel)]=\"hrDetails.designation\" formControlName=\"designation\">\r\n      <div *ngIf=\"!signupForm.controls['designation'].valid && signupForm.controls['designation'].touched\">\r\n          <p>{{errorMsg}}*</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"sixteen wide padded field\">\r\n      <label>Address *</label>\r\n      <input type=\"text\" placeholder=\"Address\" [(ngModel)]=\"hrDetails.address\" formControlName=\"address\">\r\n      <div *ngIf=\"!signupForm.controls['address'].valid && signupForm.controls['address'].touched\">\r\n          <p>{{errorMsg}}*</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Job Profile *</label>\r\n      <div class=\"eight wide field\">\r\n        <textarea type=\"text\" placeholder=\"jobProfile\" [(ngModel)]=\"hrDetails.jobProfile\" formControlName=\"jobProfile\"></textarea>\r\n      </div>\r\n      <div *ngIf=\"!signupForm.controls['jobProfile'].valid && signupForm.controls['jobProfile'].touched\">\r\n          <p>{{errorMsg}}*</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Profile Photo:</label>\r\n      <input type=\"file\" placeholder=\"Photo\" required=\"\" capture (change)=\"fileTypeCheck($event)\">\r\n    </div>\r\n    <div class=\"ui toggle checkbox\">\r\n      <input type=\"checkbox\" name=\"public\" formControlName='termsCheck' >\r\n      <label>I Agree to the\r\n        <a href=\"#\">Terms and Conditions</a>\r\n      </label>\r\n      <div *ngIf=\"!signupForm.controls['termsCheck'].valid&&signupForm.controls['termsCheck'].touched\">\r\n          <p>{{errorMsg}}*</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <button auto-focus [disabled]=\"signupForm.invalid || imageFile\" (click)=\"onSubmit()\" class=\"ui button\" type=\"submit\" tabindex=\"0\" (click)=\"gethrDash()\">Sign Up</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/_shared/components/signup/hr/hr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_hrbase__ = __webpack_require__("./src/app/_shared/models/hrbase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_india_cities_json__ = __webpack_require__("./src/app/_shared/data/india-cities.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_india_cities_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__data_india_cities_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HrComponent = /** @class */ (function () {
    function HrComponent(_userService, router, location, http) {
        this._userService = _userService;
        this.router = router;
        this.location = location;
        this.http = http;
        this.cities = {};
        this.errorMsg = 'please fill required fields';
        this.options = ['Textiles / Garments / Fashion / Accessories', 'Accounting / Finance', 'Advertising / PR / MR / Event Management', 'Agriculture / Dairy', 'Hotels / Restaurants / Airlines / Travel', 'Architecture / Interior Design', 'Automobile / Auto Anciliary / Auto Components', 'Pharma / Biotechnology / Clinical Research', 'Construction / Engineering / Cement / Metals', 'Chemicals / PetroChemical / Plastics / Rubber', 'FMCG / Foods / Beverage', 'Consumer Goods / Durables', 'Courier / Transportation / Freight/ Warehousing', 'BPO / Call Centre / ITES', 'Education / Teaching / Training', 'Recruitment', 'Media / Dotcom / Entertainment', 'Export / Import', 'Gems / Jewellery', 'IT Hardware / Networking', 'Medical / Healthcare / Hospital', 'Insurance', 'Legal', 'Industrial Products/ Heavy Machinery', 'NGO / Social Services', 'Office Equipment / Automation', 'Oil and Gas / Power / Infrastructure / Projects', 'Packaging / Printing', 'Real Estate / Property', 'Retail', 'Security / Law Enforcement', 'IT Software / Software Services', 'Semiconductors / Electronics', 'Telecom/ISP', 'Other', 'Shipping/Marine', 'Animation / Gaming', 'Banking/FinancialServices/Broking', 'Brewery/Distillery', 'Ceramics/Sanitaryware', 'Government/Defence', 'Electricals/Switchgears', 'FacilityManagement', 'fertilizers/Pesticides', 'FoodProcessing', 'HeatVentilation/AirConditioning', 'KPO/Research/Analytics', 'Mining', 'Publishing', 'Steel', 'Strategy/ManagementConsultingFirms', 'Tyres', 'WaterTreatment/WasteManagement', 'Wellness/Fitness/Sports'];
        this.states = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'TamilNadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
        ];
        this.cities = __WEBPACK_IMPORTED_MODULE_7__data_india_cities_json__;
        this.hrDetails = __WEBPACK_IMPORTED_MODULE_5__models_hrbase__["a" /* Hrbase */].createBlankUser();
        this.buildFormGroup();
        this.profile_photo = null;
        this.userExist = false;
        this.hrDetails.isHr = true;
        this.hrDetails.status = true;
    }
    HrComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.imageFile = false;
        this.hrsignupActive = true;
    };
    HrComponent.prototype.buildFormGroup = function () {
        var fg = {
            'firstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'lastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            'dob': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]{10}')]),
            'industry': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'designation': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'jobProfile': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'termsCheck': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        };
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](fg);
    };
    HrComponent.prototype.hrExist = function () {
        var _this = this;
        var emailObj = {
            userEmail: this.signupForm.value.email,
            isHr: true
        };
        if (this.signupForm.value.email != null && this.signupForm.value.email != undefined) {
            this._userService.checkMailId(emailObj).subscribe(function (res) {
                if (res.status) {
                    window.alert('Email address was already registered with us Please click ok to login');
                    _this.router.navigateByUrl('login');
                }
            });
        }
    };
    HrComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('hr details', this.hrDetails);
        this._userService.addNewUser(this.hrDetails, {
            profile_photo: this.profile_photo
        })
            .then(function (result) {
            console.log(result);
            _this.router.navigateByUrl('login');
        });
    };
    HrComponent.prototype.fileTypeCheck = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file_1 = event.target.files[0];
            if (file_1.type.split('/')[0] === 'image') {
                var reader = new FileReader();
                reader.onload = function (rdr) {
                    console.log('image: ', file_1.type.split('/')[0]);
                    _this.imageFile = false;
                };
                // reader reads the image uploaded
                reader.readAsDataURL(event.target.files[0]);
                this.profile_photo = event.target.files[0];
            }
            else {
                alert('Filetype Not Supported.');
                this.imageFile = true;
                // this.fileTypeCheck(event);
            }
        }
    };
    HrComponent.prototype.gethrDash = function () {
    };
    HrComponent.prototype.goBack = function () {
        this.location.back();
    };
    HrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr',
            template: __webpack_require__("./src/app/_shared/components/signup/hr/hr.component.html"),
            styles: [__webpack_require__("./src/app/_shared/components/signup/hr/hr.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_user_base_service__["a" /* UserBaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], HrComponent);
    return HrComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/signup/signup-home/signup-home.component.css":
/***/ (function(module, exports) {

module.exports = "div.sign-up {\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/_shared/components/signup/signup-home/signup-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui main container\" style=\"background-image: url('assets/images/bg-images/login_page_bg_image.jpg'); width: 100%;\">\r\n  <div class=\"mid-body sign-up\">\r\n    <!-- '/../src/assets/images/bg-images/login_page_bg_image.jpg' -->\r\n    <div class=\"ui raised container\">\r\n      <div class=\"ui two column centered grid\">\r\n        <div class=\"column\">\r\n        <div [ngClass]=\"signUpHead\" class=\"text-center fnt alfa abhi frame\" style=\"margin:0 auto;\">\r\n          <p class=\"alp\"> Tell Us Something About You </p>\r\n        </div>\r\n      </div>\r\n      <div [ngClass]=\"userActiveClasses\" class=\"four column centered row\">\r\n        <div class=\"column\">\r\n          <div class=\"ui segment\">\r\n            <div class=\"ui fluid card\">\r\n              <div class=\"image\">\r\n                <img src=\"/assets/images/avatars/daniel.jpg\" alt=\"applicant\">\r\n              </div>\r\n              <div class=\"content\">\r\n                <a (click)=\"signupComponentCall('applicant')\" class=\"text-center header\">I've got some talent.</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"column two wide\"></div>\r\n        <div class=\"column\">\r\n          <div class=\"ui segment\">\r\n            <div class=\"ui fluid card\">\r\n              <div class=\"image\">\r\n                <img src=\"/assets/images/avatars/elliot.jpg\" alt=\"hr\">\r\n              </div>\r\n              <div class=\"content\">\r\n                <a (click)=\"signupComponentCall('hr')\" class=\"text-center header\">I'm searching for a talent.</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column\" [ngClass]=\"userActiveClasses\">\r\n        <div class=\"ui horizontal divider\">\r\n          Already In?\r\n        </div>\r\n        <div class=\"column\">\r\n          <button class=\"ui orange fluid basic button\" (click)=\"loginButton()\"> Login </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/_shared/components/signup/signup-home/signup-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SignupHomeComponent = /** @class */ (function () {
    function SignupHomeComponent(router, location, platform, activatedRoute) {
        this.router = router;
        this.location = location;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.userActiveClasses = [];
        this.signupActive = true;
        this.signUpHead = {
            'fadeOutDownBig': false,
            'animated': true
        };
        this.applicantActive = false;
        this.hrActive = false;
        this.t = platform.pathname;
        platform.onPopState(function () {
            // this.signupActive = true;
            console.log('back button clicked');
        });
    }
    SignupHomeComponent.prototype.ngOnInit = function () {
        if (this.router.url.split('/').splice(-1).toString() === 'signin-hr' || this.router.url.split('/').splice(-1).toString() === 'signin-applicant') {
            this.signupActive = false;
        }
        // console.log(this.router.url);
        // console.log('hrsignup: ', this.hrsignupActive);
    };
    SignupHomeComponent.prototype.loginButton = function () {
        console.log('login page');
        this.router.navigateByUrl('login');
    };
    SignupHomeComponent.prototype.frontViewChange = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.signUpHead['fadeOutDownBig'] = true;
            _this.userActiveClasses.push('fadeOut', 'animated');
            setTimeout(resolve, 200);
        });
    };
    SignupHomeComponent.prototype.signupComponentCall = function (caller) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.frontViewChange()];
                    case 1:
                        _a.sent();
                        this.signupActive = false;
                        if (caller === 'hr') {
                            this.router.navigateByUrl('signin/signin-hr');
                        }
                        else if (caller === 'applicant') {
                            console.log('in here', this.router.navigate(['./', 'signin-applicant']));
                            this.router.navigateByUrl('signin/signin-applicant');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup-home',
            template: __webpack_require__("./src/app/_shared/components/signup/signup-home/signup-home.component.html"),
            styles: [__webpack_require__("./src/app/_shared/components/signup/signup-home/signup-home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["PlatformLocation"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SignupHomeComponent);
    return SignupHomeComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/_shared/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/_shared/components/signup/signup.component.html"),
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/_shared/data/india-cities.json":
/***/ (function(module, exports) {

module.exports = ["Mumbai","Delhi","Bengaluru","Ahmedabad","Gandhinagar","Hyderabad","Chennai","Kolkata","Pune","Jaipur","Surat","Lucknow","Kanpur","Nagpur","Patna","Indore","Thane","Bhopal","Visakhapatnam","Vadodara","Firozabad","Ludhiana","Rajkot","Agra","Siliguri","Nashik","Faridabad","Patiala","Meerut","Kalyan-Dombivali","Vasai-Virar","Varanasi","Srinagar","Dhanbad","Jodhpur","Amritsar","Raipur","Allahabad","Coimbatore","Jabalpur","Gwalior","Vijayawada","Madurai","Guwahati","Chandigarh","Hubli-Dharwad","Amroha","Moradabad","Gurgaon","Aligarh","Solapur","Ranchi","Jalandhar","Tiruchirappalli","Bhubaneswar","Salem","Warangal","Mira-Bhayandar","Thiruvananthapuram","Bhiwandi","Saharanpur","Guntur","Amravati","Bikaner","Noida","Jamshedpur","Bhilai Nagar","Cuttack","Kochi","Udaipur","Bhavnagar","Dehradun","Asansol","Nanded-Waghala","Ajmer","Jamnagar","Ujjain","Sangli","Loni","Jhansi","Pondicherry","Nellore","Jammu","Belagavi","Raurkela","Mangaluru","Tirunelveli","Malegaon","Gaya","Tiruppur","Davanagere","Kozhikode","Akola","Kurnool","Bokaro Steel City","Rajahmundry","Ballari","Agartala","Bhagalpur","Latur","Dhule","Korba","Bhilwara","Brahmapur","Mysore","Muzaffarpur","Ahmednagar","Kollam","Raghunathganj","Bilaspur","Shahjahanpur","Thrissur","Alwar","Kakinada","Nizamabad","Sagar","Tumkur","Hisar","Rohtak","Panipat","Darbhanga","Kharagpur","Aizawl","Ichalkaranji","Tirupati","Karnal","Bathinda","Rampur","Shivamogga","Ratlam","Modinagar","Durg","Shillong","Imphal","Hapur","Ranipet","Anantapur","Arrah","Karimnagar","Parbhani","Etawah","Bharatpur","Begusarai","New Delhi","Chhapra","Kadapa","Ramagundam","Pali","Satna","Vizianagaram","Katihar","Hardwar","Sonipat","Nagercoil","Thanjavur","Murwara (Katni)","Naihati","Sambhal","Nadiad","Yamunanagar","English Bazar","Eluru","Munger","Panchkula","Raayachuru","Panvel","Deoghar","Ongole","Nandyal","Morena","Bhiwani","Porbandar","Palakkad","Anand","Purnia","Baharampur","Barmer","Morvi","Orai","Bahraich","Sikar","Vellore","Singrauli","Khammam","Mahesana","Silchar","Sambalpur","Rewa","Unnao","Hugli-Chinsurah","Raiganj","Phusro","Adityapur","Alappuzha","Bahadurgarh","Machilipatnam","Rae Bareli","Jalpaiguri","Bharuch","Pathankot","Hoshiarpur","Baramula","Adoni","Jind","Tonk","Tenali","Kancheepuram","Vapi","Sirsa","Navsari","Mahbubnagar","Puri","Robertson Pet","Erode","Batala","Haldwani-cum-Kathgodam","Vidisha","Saharsa","Thanesar","Chittoor","Veraval","Lakhimpur","Sitapur","Hindupur","Santipur","Balurghat","Ganjbasoda","Moga","Proddatur","Srinagar","Medinipur","Habra","Sasaram","Hajipur","Bhuj","Shivpuri","Ranaghat","Shimla","Tiruvannamalai","Kaithal","Rajnandgaon","Godhra","Hazaribag","Bhimavaram","Mandsaur","Dibrugarh","Kolar","Bankura","Mandya","Dehri-on-Sone","Madanapalle","Malerkotla","Lalitpur","Bettiah","Pollachi","Khanna","Neemuch","Palwal","Palanpur","Guntakal","Nabadwip","Udupi","Jagdalpur","Motihari","Pilibhit","Dimapur","Mohali","Sadulpur","Rajapalayam","Dharmavaram","Kashipur","Sivakasi","Darjiling","Chikkamagaluru","Gudivada","Baleshwar Town","Mancherial","Srikakulam","Adilabad","Yavatmal","Barnala","Nagaon","Narasaraopet","Raigarh","Roorkee","Valsad","Ambikapur","Giridih","Chandausi","Purulia","Patan","Bagaha","Hardoi ","Achalpur","Osmanabad","Deesa","Nandurbar","Azamgarh","Ramgarh","Firozpur","Baripada Town","Karwar","Siwan","Rajampet","Pudukkottai","Anantnag","Tadpatri","Satara","Bhadrak","Kishanganj","Suryapet","Wardha","Ranebennuru","Amreli","Neyveli (TS)","Jamalpur","Marmagao","Udgir","Tadepalligudem","Nagapattinam","Buxar","Aurangabad","Jehanabad","Phagwara","Khair","Sawai Madhopur","Kapurthala","Chilakaluripet","Aurangabad","Malappuram","Rewari","Nagaur","Sultanpur","Nagda","Port Blair","Lakhisarai","Panaji","Tinsukia","Itarsi","Kohima","Balangir","Nawada","Jharsuguda","Jagtial","Viluppuram","Amalner","Zirakpur","Tanda","Tiruchengode","Nagina","Yemmiganur","Vaniyambadi","Sarni","Theni Allinagaram","Margao","Akot","Sehore","Mhow Cantonment","Kot Kapura","Makrana","Pandharpur","Miryalaguda","Shamli","Seoni","Ranibennur","Kadiri","Shrirampur","Rudrapur","Parli","Najibabad","Nirmal","Udhagamandalam","Shikohabad","Jhumri Tilaiya","Aruppukkottai","Ponnani","Jamui","Sitamarhi","Chirala","Anjar","Karaikal","Hansi","Anakapalle","Mahasamund","Faridkot","Saunda","Dhoraji","Paramakudi","Balaghat","Sujangarh","Khambhat","Muktsar","Rajpura","Kavali","Dhamtari","Ashok Nagar","Sardarshahar","Mahuva","Bargarh","Kamareddy","Sahibganj","Kothagudem","Ramanagaram","Gokak","Tikamgarh","Araria","Rishikesh","Shahdol","Medininagar (Daltonganj)","Arakkonam","Washim","Sangrur","Bodhan","Fazilka","Palacole","Keshod","Sullurpeta","Wadhwan","Gurdaspur","Vatakara","Tura","Narnaul","Kharar","Yadgir","Ambejogai","Ankleshwar","Savarkundla","Paradip","Virudhachalam","Kanhangad","Kadi","Srivilliputhur","Gobindgarh","Tindivanam","Mansa","Taliparamba","Manmad","Tanuku","Rayachoti","Virudhunagar","Koyilandy","Jorhat","Karur","Valparai","Srikalahasti","Neyyattinkara","Bapatla","Fatehabad","Malout","Sankarankovil","Tenkasi","Ratnagiri","Rabkavi Banhatti","Sikandrabad","Chaibasa","Chirmiri","Palwancha","Bhawanipatna","Kayamkulam","Pithampur","Nabha","Shahabad, Hardoi","Dhenkanal","Uran Islampur","Gopalganj","Bongaigaon City","Palani","Pusad","Sopore","Pilkhuwa","Tarn Taran","Renukoot","Mandamarri","Shahabad","Barbil","Koratla","Madhubani","Arambagh","Gohana","Ladnu","Pattukkottai","Sirsi","Sircilla","Tamluk","Jagraon","AlipurdUrban Agglomerationr","Alirajpur","Tandur","Naidupet","Tirupathur","Tohana","Ratangarh","Dhubri","Masaurhi","Visnagar","Vrindavan","Nokha","Nagari","Narwana","Ramanathapuram","Ujhani","Samastipur","Laharpur","Sangamner","Nimbahera","Siddipet","Suri","Diphu","Jhargram","Shirpur-Warwade","Tilhar","Sindhnur","Udumalaipettai","Malkapur","Wanaparthy","Gudur","Kendujhar","Mandla","Mandi","Nedumangad","North Lakhimpur","Vinukonda","Tiptur","Gobichettipalayam","Sunabeda","Wani","Upleta","Narasapuram","Nuzvid","Tezpur","Una","Markapur","Sheopur","Thiruvarur","Sidhpur","Sahaswan","Suratgarh","Shajapur","Rayagada","Lonavla","Ponnur","Kagaznagar","Gadwal","Bhatapara","Kandukur","Sangareddy","Unjha","Lunglei","Karimganj","Kannur","Bobbili","Mokameh","Talegaon Dabhade","Anjangaon","Mangrol","Sunam","Gangarampur","Thiruvallur","Tirur","Rath","Jatani","Viramgam","Rajsamand","Yanam","Kottayam","Panruti","Dhuri","Namakkal","Kasaragod","Modasa","Rayadurg","Supaul","Kunnamkulam","Umred","Bellampalle","Sibsagar","Mandi Dabwali","Ottappalam","Dumraon","Samalkot","Jaggaiahpet","Goalpara","Tuni","Lachhmangarh","Bhongir","Amalapuram","Firozpur Cantt.","Vikarabad","Thiruvalla","Sherkot","Palghar","Shegaon","Jangaon","Bheemunipatnam","Panna","Thodupuzha","KathUrban Agglomeration","Palitana","Arwal","Venkatagiri","Kalpi","Rajgarh (Churu)","Sattenapalle","Arsikere","Ozar","Thirumangalam","Petlad","Nasirabad","Phaltan","Rampurhat","Nanjangud","Forbesganj","Tundla","BhabUrban Agglomeration","Sagara","Pithapuram","Sira","Bhadrachalam","Charkhi Dadri","Chatra","Palasa Kasibugga","Nohar","Yevla","Sirhind Fatehgarh Sahib","Bhainsa","Parvathipuram","Shahade","Chalakudy","Narkatiaganj","Kapadvanj","Macherla","Raghogarh-Vijaypur","Rupnagar","Naugachhia","Sendhwa","Byasanagar","Sandila","Gooty","Salur","Nanpara","Sardhana","Vita","Gumia","Puttur","Jalandhar Cantt.","Nehtaur","Changanassery","Mandapeta","Dumka","Seohara","Umarkhed","Madhupur","Vikramasingapuram","Punalur","Kendrapara","Sihor","Nellikuppam","Samana","Warora","Nilambur","Rasipuram","Ramnagar","Jammalamadugu","Nawanshahr","Thoubal","Athni","Cherthala","Sidhi","Farooqnagar","Peddapuram","Chirkunda","Pachora","Madhepura","Pithoragarh","Tumsar","Phalodi","Tiruttani","Rampura Phul","Perinthalmanna","Padrauna","Pipariya","Dalli-Rajhara","Punganur","Mattannur","Mathura","Thakurdwara","Nandivaram-Guduvancheri","Mulbagal","Manjlegaon","Wankaner","Sillod","Nidadavole","Surapura","Rajagangapur","Sheikhpura","Parlakhemundi","Kalimpong","Siruguppa","Arvi","Limbdi","Barpeta","Manglaur","Repalle","Mudhol","Shujalpur","Mandvi","Thangadh","Sironj","Nandura","Shoranur","Nathdwara","Periyakulam","Sultanganj","Medak","Narayanpet","Raxaul Bazar","Rajauri","Pernampattu","Nainital","Ramachandrapuram","Vaijapur","Nangal","Sidlaghatta","Punch","Pandhurna","Wadgaon Road","Talcher","Varkala","Pilani","Nowgong","Naila Janjgir","Mapusa","Vellakoil","Merta City","Sivaganga","Mandideep","Sailu","Vyara","Kovvur","Vadalur","Nawabganj","Padra","Sainthia","Siana","Shahpur","Sojat","Noorpur","Paravoor","Murtijapur","Ramnagar","Sundargarh","Taki","Saundatti-Yellamma","Pathanamthitta","Wadi","Rameshwaram","Tasgaon","Sikandra Rao","Sihora","Tiruvethipuram","Tiruvuru","Mehkar","Peringathur","Perambalur","Manvi","Zunheboto","Mahnar Bazar","Attingal","Shahbad","Puranpur","Nelamangala","Nakodar","Lunawada","Murshidabad","Mahe","Lanka","Rudauli","Tuensang","Lakshmeshwar","Zira","Yawal","Thana Bhawan","Ramdurg","Pulgaon","Sadasivpet","Nargund","Neem-Ka-Thana","Memari","Nilanga","Naharlagun","Pakaur","Wai","Tarikere","Malavalli","Raisen","Lahar","Uravakonda","Savanur","Sirohi","Udhampur","Umarga","Pratapgarh","Lingsugur","Usilampatti","Palia Kalan","Wokha","Rajpipla","Vijayapura","Rawatbhata","Sangaria","Paithan","Rahuri","Patti","Zaidpur","Lalsot","Maihar","Vedaranyam","Nawapur","Solan","Vapi","Sanawad","Warisaliganj","Revelganj","Sabalgarh","Tuljapur","Simdega","Musabani","Kodungallur","Phulabani","Umreth","Narsipatnam","Nautanwa","Rajgir","Yellandu","Sathyamangalam","Pilibanga","Morshi","Pehowa","Sonepur","Pappinisseri","Zamania","Mihijam","Purna","Puliyankudi","Shikarpur, Bulandshahr","Umaria","Porsa","Naugawan Sadat","Fatehpur Sikri","Manuguru","Udaipur","Pipar City","Pattamundai","Nanjikottai","Taranagar","Yerraguntla","Satana","Sherghati","Sankeshwara","Madikeri","Thuraiyur","Sanand","Rajula","Kyathampalle","Shahabad, Rampur","Tilda Newra","Narsinghgarh","Chittur-Thathamangalam","Malaj Khand","Sarangpur","Robertsganj","Sirkali","Radhanpur","Tiruchendur","Utraula","Patratu","Vijainagar, Ajmer","Periyasemur","Pathri","Sadabad","Talikota","Sinnar","Mungeli","Sedam","Shikaripur","Sumerpur","Sattur","Sugauli","Lumding","Vandavasi","Titlagarh","Uchgaon","Mokokchung","Paschim Punropara","Sagwara","Ramganj Mandi","Tarakeswar","Mahalingapura","Dharmanagar","Mahemdabad","Manendragarh","Uran","Tharamangalam","Tirukkoyilur","Pen","Makhdumpur","Maner","Oddanchatram","Palladam","Mundi","Nabarangapur","Mudalagi","Samalkha","Nepanagar","Karjat","Ranavav","Pedana","Pinjore","Lakheri","Pasan","Puttur","Vadakkuvalliyur","Tirukalukundram","Mahidpur","Mussoorie","Muvattupuzha","Rasra","Udaipurwati","Manwath","Adoor","Uthamapalayam","Partur","Nahan","Ladwa","Mankachar","Nongstoin","Losal","Sri Madhopur","Ramngarh","Mavelikkara","Rawatsar","Rajakhera","Lar","Lal Gopalganj Nindaura","Muddebihal","Sirsaganj","Shahpura","Surandai","Sangole","Pavagada","Tharad","Mansa","Umbergaon","Mavoor","Nalbari","Talaja","Malur","Mangrulpir","Soro","Shahpura","Vadnagar","Raisinghnagar","Sindhagi","Sanduru","Sohna","Manavadar","Pihani","Safidon","Risod","Rosera","Sankari","Malpura","Sonamukhi","Shamsabad, Agra","Nokha","PandUrban Agglomeration","Mainaguri","Afzalpur","Shirur","Salaya","Shenkottai","Pratapgarh","Vadipatti","Nagarkurnool","Savner","Sasvad","Rudrapur","Soron","Sholingur","Pandharkaoda","Perumbavoor","Maddur","Nadbai","Talode","Shrigonda","Madhugiri","Tekkalakote","Seoni-Malwa","Shirdi","SUrban Agglomerationr","Terdal","Raver","Tirupathur","Taraori","Mukhed","Manachanallur","Rehli","Sanchore","Rajura","Piro","Mudabidri","Vadgaon Kasba","Nagar","Vijapur","Viswanatham","Polur","Panagudi","Manawar","Tehri","Samdhan","Pardi","Rahatgarh","Panagar","Uthiramerur","Tirora","Rangia","Sahjanwa","Wara Seoni","Magadi","Rajgarh (Alwar)","Rafiganj","Tarana","Rampur Maniharan","Sheoganj","Raikot","Pauri","Sumerpur","Navalgund","Shahganj","Marhaura","Tulsipur","Sadri","Thiruthuraipoondi","Shiggaon","Pallapatti","Mahendragarh","Sausar","Ponneri","Mahad","Lohardaga","Tirwaganj","Margherita","Sundarnagar","Rajgarh","Mangaldoi","Renigunta","Longowal","Ratia","Lalgudi","Shrirangapattana","Niwari","Natham","Unnamalaikadai","PurqUrban Agglomerationzi","Shamsabad, Farrukhabad","Mirganj","Todaraisingh","Warhapur","Rajam","Urmar Tanda","Lonar","Powayan","P.N.Patti","Palampur","Srisailam Project (Right Flank Colony) Township","Sindagi","Sandi","Vaikom","Malda","Tharangambadi","Sakaleshapura","Lalganj","Malkangiri","Rapar","Mauganj","Todabhim","Srinivaspur","Murliganj","Reengus","Sawantwadi","Tittakudi","Lilong","Rajaldesar","Pathardi","Achhnera","Pacode","Naraura","Nakur","Palai","Morinda, India","Manasa","Nainpur","Sahaspur","Pauni","Prithvipur","Ramtek","Silapathar","Songadh","Safipur","Sohagpur","Mul","Sadulshahar","Phillaur","Sambhar","Prantij","Nagla","Pattran","Mount Abu","Reoti","Tenu dam-cum-Kathhara","Panchla","Sitarganj","Pasighat","Motipur","O' Valley","Raghunathpur","Suriyampalayam","Qadian","Rairangpur","Silvassa","Nowrozabad (Khodargama)","Mangrol","Soyagaon","Sujanpur","Manihari","Sikanderpur","Mangalvedhe","Phulera","Ron","Sholavandan","Saidpur","Shamgarh","Thammampatti","Maharajpur","Multai","Mukerian","Sirsi","Purwa","Sheohar","Namagiripettai","Parasi","Lathi","Lalganj","Narkhed","Mathabhanga","Shendurjana","Peravurani","Mariani","Phulpur","Rania","Pali","Pachore","Parangipettai","Pudupattinam","Panniyannur","Maharajganj","Rau","Monoharpur","Mandawa","Marigaon","Pallikonda","Pindwara","Shishgarh","Patur","Mayang Imphal","Mhowgaon","Guruvayoor","Mhaswad","Sahawar","Sivagiri","Mundargi","Punjaipugalur","Kailasahar","Samthar","Sakti","Sadalagi","Silao","Mandalgarh","Loha","Pukhrayan","Padmanabhapuram","Belonia","Saiha","Srirampore","Talwara","Puthuppally","Khowai","Vijaypur","Takhatgarh","Thirupuvanam","Adra","Piriyapatna","Obra","Adalaj","Nandgaon","Barh","Chhapra","Panamattom","Niwai","Bageshwar","Tarbha","Adyar","Narsinghgarh","Warud","Asarganj","Sarsod"]

/***/ }),

/***/ "./src/app/_shared/models/applicantbase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicantBase; });
var ApplicantBase = /** @class */ (function () {
    function ApplicantBase(firstName, lastName, dob, gender, phone, email, password, state, city, address, country, skillValue, isA, dashB, isH, st, pp, education, experience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.state = state;
        this.city = city;
        this.address = address;
        this.country = country;
        this.skillValue = skillValue;
        this.dashboard = dashB;
        this.isApplicant = isA;
        this.isHr = isH;
        this.status = st;
        this.profile_photo = pp;
        this.education = education;
        this.experience = experience;
    }
    ApplicantBase.createblank = function () {
        return new ApplicantBase(null, null, null, null, null, null, null, null, null, null, null, [], null, null, null, null, null, [{ higherDegreeValue: '', universityName: '', passingYearValue: '', percentageValue: '' }], []);
    };
    return ApplicantBase;
}());



/***/ }),

/***/ "./src/app/_shared/models/hrbase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hrbase; });
var Hrbase = /** @class */ (function () {
    function Hrbase(f, l, em, p, pp, dob, phone, industry, skillValue, currDesignation, jobProfile, address, country, city, state, gender, experience, dashB, ihr, iApl, ad, st, des) {
        this.firstName = f;
        this.lastName = l;
        this.email = em;
        this.dob = dob;
        this.phone = phone;
        this.industry = industry;
        this.address = address;
        this.country = country;
        this.city = city;
        this.state = state;
        this.gender = gender;
        this.skillValue = skillValue;
        this.currDesignation = currDesignation;
        this.jobProfile = jobProfile;
        this.experience = experience;
        this.password = p;
        this.profile_photo = pp;
        this.dashboard = dashB;
        this.isHr = ihr;
        this.isApplicant = iApl;
        this.admin = ad;
        this.status = st;
        this.designation = des;
    }
    Hrbase.createBlankUser = function () {
        return new Hrbase(null, null, null, null, null, null, null, null, [], null, null, null, null, null, null, null, [], null, false, false, false, false, null);
    };
    return Hrbase;
}());



/***/ }),

/***/ "./src/app/_shared/models/hrpostdetails.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrPostDetail; });
var HrPostDetail = /** @class */ (function () {
    function HrPostDetail(id, title, companyname, description, startdate, enddate, skills, location, salary, experinece, dateOfJoining, extraRequirement, noOfJobOpenings, CompanyUrl, bondDetails, ReportingVenue, ResourcePersonContact, selectionProcedure, applicants) {
        this._id = id;
        this.title = title;
        this.companyname = companyname;
        this.description = description;
        this.startdate = startdate;
        this.enddate = enddate;
        this.skills = skills;
        this.location = location;
        this.salary = salary;
        this.experinece = experinece;
        this.dateOfJoining = dateOfJoining;
        this.extraRequirement = extraRequirement;
        this.noOfJobOpenings = noOfJobOpenings;
        this.CompanyUrl = CompanyUrl;
        this.bondDetails = bondDetails;
        this.ReportingVenue = ReportingVenue;
        this.ResourcePersonContact = ResourcePersonContact;
        this.selectionProcedure = selectionProcedure;
        this.applicants = applicants;
    }
    HrPostDetail.createblank = function () {
        return new HrPostDetail(null, null, null, null, null, null, [], null, null, null, null, null, null, null, null, null, null, null, []);
    };
    return HrPostDetail;
}());



/***/ }),

/***/ "./src/app/_shared/models/uuid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uuid;
function uuid() {
    return localStorage.getItem('uuid') || 'null';
}


/***/ }),

/***/ "./src/app/_shared/pipes/numberToWords.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberToWordsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberToWordsPipe = /** @class */ (function () {
    function NumberToWordsPipe() {
        this.a = [
            '',
            'one ',
            'two ',
            'three ',
            'four ',
            'five ',
            'six ',
            'seven ',
            'eight ',
            'nine ',
            'ten ',
            'eleven ',
            'twelve ',
            'thirteen ',
            'fourteen ',
            'fifteen ',
            'sixteen ',
            'seventeen ',
            'eighteen ',
            'nineteen '
        ];
        this.b = [
            '',
            '',
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety'
        ];
    }
    NumberToWordsPipe.prototype.transform = function (value, args) {
        if (value) {
            if (value > 9999) {
                return 'Five <br> Thousand+';
            }
            if ((value / 1000) > 0) {
                var val = value / 1000;
                console.log('val: ', Number(val).toFixed());
                return this.a[Number(val).toFixed()];
            }
        }
        else {
            return 'Nan';
        }
    };
    NumberToWordsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'numberToWords'
        })
    ], NumberToWordsPipe);
    return NumberToWordsPipe;
}());



/***/ }),

/***/ "./src/app/_shared/pipes/stringCleaner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrinCleaner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StrinCleaner = /** @class */ (function () {
    function StrinCleaner() {
    }
    StrinCleaner.prototype.transform = function (value) {
        return value.replace(/(,\s,)|(^,)/, '');
    };
    StrinCleaner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'removeExtraComma'
        })
    ], StrinCleaner);
    return StrinCleaner;
}());



/***/ }),

/***/ "./src/app/_shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiServiceService = /** @class */ (function () {
    function ApiServiceService() {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    // protected formatErrors(error: any) {
    // return new ErrorObservable(error.error);
    // }
    // get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    // return this.http.get(`${environment.USER_SERVER}${path}`, {
    // params
    // })
    // .pipe(catchError(this.formatErrors));
    // }
    // put(path: string, body: Object = {}): Observable<any> {
    // return this.http.put(
    // `${environment.USER_SERVER}${path}`,
    // JSON.stringify(body)
    // ).pipe(catchError(this.formatErrors));
    // }
    // post(path: string, body: Object = {}): Observable<any> {
    // return this.http.post(
    // `${environment.USER_SERVER}${path}`,
    // JSON.stringify(body)
    // ).pipe(catchError(this.formatErrors));
    // }
    // delete(path): Observable<any> {
    // return this.http.delete(
    // `${environment.USER_SERVER}${path}`
    // ).pipe(catchError(this.formatErrors));
    // }
    ApiServiceService.prototype.post = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers, method: 'post' });
    };
    ApiServiceService.prototype.get = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    };
    ApiServiceService.prototype.put = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers, method: 'put' });
    };
    ApiServiceService.prototype.patch = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers, method: 'patch' });
    };
    ApiServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/app/_shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/shareReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jwt_service__ = __webpack_require__("./src/app/_shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// const USER_SERVER = 'https://jobnut-server-dedhtvmcgh.now.sh';
var USER_SERVER = 'http://localhost:3000';
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtservice) {
        this.http = http;
        this.jwtservice = jwtservice;
        this.userStatus = new __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.userStatusIs = this.userStatus.asObservable().pipe();
        this.status = {
            'isHr': false,
            'isApplicant': false
        };
    }
    AuthService.prototype.populate = function () {
        if (this.jwtservice.getToken(this.status)) {
        }
    };
    AuthService.prototype.login = function (formData) {
        var _this = this;
        console.log('inside', formData);
        return this.http.post(USER_SERVER + '/api/login', formData)
            .catch(function (error) {
            console.log('message is: ', error.error.errors);
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].throw(error.error.errors);
        })
            .do(function (res) {
            // if (res.errors) {
            // return;
            // }
            console.log('response is: ');
            console.log('response is: ', res);
            if (res.status) {
                return res;
            }
            return _this.setSession(res);
        })
            .shareReplay();
    };
    AuthService.prototype.setSession = function (authResult) {
        console.log(' authResult is : ');
        console.log(' authResult is : ', authResult.user);
        // const expiresAt = moment().add(authResult.expiresIn, 'second');
        // if (authResult.user.id) {
        window.localStorage['uuid'] = authResult.user.id;
        // if (authResult.user.isHr) {
        //   window.localStorage['isHr'] = authResult.user.isHr;
        // }
        // if (authResult.user.isApplicant) {
        //   window.localStorage['isApplicant'] = authResult.user.isApplicant;
        // }
        // }
        this.status = {
            'isHr': authResult.user.isHr,
            'isApplicant': authResult.user.isApplicant
        };
        this.userStatus.next(this.status);
        this.jwtservice.saveToken(authResult.user);
        return {
            status: authResult.user.status,
            isHr: authResult.user.isHr,
            isApplicant: authResult.user.isApplicant
        };
        // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    };
    AuthService.prototype.logout = function () {
        console.log(window.localStorage['uuid']);
        this.jwtservice.destroyToken(this.status);
        localStorage.clear();
        localStorage.removeItem('uuid');
        // localStorage.removeItem('expires_at');
    };
    AuthService.prototype.isLoggedIn = function () {
        console.log('you got this : ', this.jwtservice.getToken(this.status));
        if (this.jwtservice.getToken(this.status) && this.jwtservice.getToken(this.status).length) {
            return true;
        }
        return false;
        // return moment().isBefore(this.getExpiration());
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__jwt_service__["a" /* JwtService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_shared/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.obj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.currentMessage = this.obj.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.obj.next(message);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/_shared/services/hrbase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrbaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__("./src/app/_shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HrbaseService = /** @class */ (function () {
    function HrbaseService(http, _authService) {
        this.http = http;
        this._authService = _authService;
    }
    HrbaseService.prototype.setStatus = function (st) {
        if (st.isHr) {
            this.token = localStorage.getItem('id_token_hr');
        }
        else if (st.isApplicant) {
            this.token = localStorage.getItem('id_token_applicant');
        }
    };
    HrbaseService.prototype.getAllHrPost = function (user, status) {
        console.log('user is : ', user, this._authService.status);
        this.setStatus(status);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].USER_SERVER + "/api/posts", {
            params: {
                'token': this.token
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    HrbaseService.prototype.HrPostUpdate = function (updateDetails, user) {
        console.log('hr_id', user);
        console.log('hr update details', updateDetails);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].USER_SERVER + "/api/posts/update", updateDetails, {
            params: {
                'id': user
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    HrbaseService.prototype.getHrPostById = function (hrpost_id, status) {
        console.log(' :: ', hrpost_id);
        this.setStatus(status);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].USER_SERVER + "/api/posts/" + hrpost_id, {
            params: { token: this.token }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    HrbaseService.prototype.addNewPost = function (hrpostdetail, user, status) {
        // this.hrpostdetails.unshift(hrpostdetail);
        console.log('data123', hrpostdetail);
        this.setStatus(status);
        user = localStorage['id_token'];
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].USER_SERVER + "/api/posts/new-post", hrpostdetail, {
            params: {
                'token': this.token
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    HrbaseService.prototype.getAllUserViewPost = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].USER_SERVER + "/api/posts/all/post").map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    HrbaseService.prototype.getHrDetailsById = function (user) {
        console.log('user_id', user);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].USER_SERVER + "/api/hrs", {
            params: {
                'id': user
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    HrbaseService.prototype.updateHrDetailsById = function (updateDetails, user) {
        console.log('hr_id', user);
        console.log('hr update details', updateDetails);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].USER_SERVER + "/api/hrs/update", updateDetails, {
            params: {
                'id': user
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    HrbaseService.prototype.hrShortlist = function (data, postid, userid) {
        console.log('post_id', postid);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].USER_SERVER + "/api/posts/shortlist", data, {
            params: {
                'id': postid,
                'hrRef': userid
            }
        }).map(function (res) {
            var body = res.json();
            return body.data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    HrbaseService.prototype.deleteHrPost = function (id) {
        console.log('id', id);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].USER_SERVER + "/api/posts/deleteHrPost", {}, {
            params: {
                'id': id
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    HrbaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */]])
    ], HrbaseService);
    return HrbaseService;
}());



/***/ }),

/***/ "./src/app/_shared/services/jwt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function (status) {
        if (status.isHr) {
            return window.localStorage['id_token_hr'];
        }
        else if (status.isApplicant) {
            return window.localStorage['id_token_applicant'];
        }
    };
    JwtService.prototype.saveToken = function (token) {
        // console.log('ddd', window.localStorage['id_token']);
        if (token.isHr) {
            window.localStorage['id_token_hr'] = token.token;
        }
        else if (token.isApplicant) {
            window.localStorage['id_token_applicant'] = token.token;
        }
    };
    JwtService.prototype.destroyToken = function (status) {
        if (status.isHr) {
            window.localStorage.removeItem('id_status_hr');
        }
        else if (status.isApplicant) {
            window.localStorage.removeItem('id_token_applicant');
        }
    };
    JwtService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/_shared/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.donePopup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.message = 'nothing to display';
        this.title = 'Notifiation';
        this.stay = 3000;
        this.activatePopup = false;
    }
    NotificationService.prototype.pop = function (message, title, stay) {
        console.log('popped', this);
        this.activatePopup = true;
        this.message = message;
        this.title = title;
        this.stay = stay;
        this.donePopup.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NotificationService.prototype, "donePopup", void 0);
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/_shared/services/quotes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotesService = /** @class */ (function () {
    function QuotesService(http) {
        this.http = http;
    }
    QuotesService.prototype.getQOD = function () {
        return fetch('http://quotes.rest/qod.json').then(function (res) { return res.json(); }).then(function (d) {
            console.log('dataaaaaaaaaa\n\n', d.contents.quotes[0].quote);
            return d.contents.quotes[0].quote;
        });
        // this.quoteOfTheDay = data;
        // console.log(this.quoteOfTheDay.contents.quotes[0].quote);
    };
    QuotesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], QuotesService);
    return QuotesService;
}());



/***/ }),

/***/ "./src/app/_shared/services/user-base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_service__ = __webpack_require__("./src/app/_shared/services/api.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var UserBaseService = /** @class */ (function (_super) {
    __extends(UserBaseService, _super);
    function UserBaseService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    UserBaseService.prototype.checkMailId = function (checkDetails) {
        var emailDetails = {
            email: checkDetails.userEmail,
            isHr: checkDetails.isHr
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_SERVER + "/api/checkMailId", emailDetails, this.post()).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    UserBaseService.prototype.checkCurrentPassword = function (value, id) {
        var obj = {
            id: id,
            currentPassword: value.currentPassword,
            newPassword: value.newPassword
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_SERVER + "/api/changePassword", obj, this.post())
            .map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    UserBaseService.prototype.passwordUpdate = function (emailDetails, password) {
        var personalDetails = {
            email: emailDetails.userEmail,
            isHr: emailDetails.isHr,
            password: password
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_SERVER + "/api/resetPassword", personalDetails, this.post())
            .map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    UserBaseService.prototype.addNewUser = function (userDetail, files) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_SERVER + "/api/hr", userDetail)
            .toPromise()
            .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            var final_data;
            return __generator(this, function (_a) {
                final_data = response.json().data;
                console.log(final_data);
                this.updateProfilePicture(final_data, files);
                return [2 /*return*/, final_data];
            });
        }); });
    };
    UserBaseService.prototype.getUserDetailsById = function (user) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_SERVER + "/api/users", {
            params: {
                'id': user
            }
        }).map(function (res) {
            console.log('res data ', res);
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    UserBaseService.prototype.getUserApplyPost = function (user) {
        console.log('user_id', user);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_SERVER + "/api/users/appliedposts", {
            params: {
                'id': user
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    UserBaseService.prototype.updateUserDetailsById = function (updateDetails, user) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_SERVER + "/api/users/update", updateDetails, {
            params: {
                'id': user
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    UserBaseService.prototype.updateUserApplyPost = function (postid, userid) {
        console.log('post_id u', postid);
        console.log('user_id u', userid);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_SERVER + "/api/users/apply", {}, {
            params: {
                'id': postid,
                'hrRef': userid
            }
        }).map(function (res) {
            console.log('re data', res);
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
        });
    };
    UserBaseService.prototype.updateProfilePicture = function (final_data, files) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, file, d, image_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('respoonse is : ', final_data, files);
                        formData = new FormData();
                        file = files['profile_photo'];
                        // formData.append('profile_photo', file, file.name);
                        // }
                        console.log('AAAAA', file);
                        d = formData.append('profile_photo', file, file.name);
                        return [4 /*yield*/, this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_SERVER + "/api/user/upload-profile", formData, {
                                params: {
                                    id: final_data._id,
                                    isHr: Boolean(final_data.isHr),
                                    isApplicant: final_data.isApplicant
                                }
                            }).toPromise()];
                    case 1:
                        image_response = _a.sent();
                        console.log('lml: ', image_response.json());
                        return [2 /*return*/, image_response.json()];
                }
            });
        });
    };
    UserBaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], UserBaseService);
    return UserBaseService;
}(__WEBPACK_IMPORTED_MODULE_8__api_service__["a" /* ApiServiceService */]));



/***/ }),

/***/ "./src/app/_shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_numberToWords_pipe__ = __webpack_require__("./src/app/_shared/pipes/numberToWords.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_change_password_change_password_component__ = __webpack_require__("./src/app/_shared/components/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_select__ = __webpack_require__("./node_modules/ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_page_home_page_component__ = __webpack_require__("./src/app/_shared/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_numberToWords_pipe__["a" /* NumberToWordsPipe */],
                __WEBPACK_IMPORTED_MODULE_2__components_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_page_home_page_component__["a" /* HomePageComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_numberToWords_pipe__["a" /* NumberToWordsPipe */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-notification *ngIf=\"notifActivate\" (donePopup)=\"popupClicked($event)\"></app-notification>\r\n<!-- <button type=\"submit\" (click)=\"popup.isActive='true'\">\r\n    click for popup\r\n</button>\r\n<app-applicant-preview></app-applicant-preview> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__ = __webpack_require__("./src/app/_shared/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ToasterService } from 'angular2-toaster';

var AppComponent = /** @class */ (function () {
    function AppComponent(router, _notif) {
        this.router = router;
        this.title = 'app';
        this._notif = _notif;
        this.notifActivate = this._notif.activatePopup;
    }
    AppComponent.prototype.popupClicked = function (event) {
        console.log('poppup clicking');
        this._notif.activatePopup = event;
        this.notifActivate = event;
        // this._notif.pop('message1', 'message2', 3000);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__["a" /* NotificationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_img_max__ = __webpack_require__("./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_froala_wysiwyg__ = __webpack_require__("./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_router_config__ = __webpack_require__("./src/app/app.router-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_select__ = __webpack_require__("./node_modules/ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_notification_service__ = __webpack_require__("./src/app/_shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_data_service__ = __webpack_require__("./src/app/_shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_auth_service__ = __webpack_require__("./src/app/_shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_quotes_service__ = __webpack_require__("./src/app/_shared/services/quotes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_components_login_login_component__ = __webpack_require__("./src/app/_shared/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_components_signup_signup_component__ = __webpack_require__("./src/app/_shared/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_components_signup_hr_hr_component__ = __webpack_require__("./src/app/_shared/components/signup/hr/hr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_components_signup_applicant_applicant_component__ = __webpack_require__("./src/app/_shared/components/signup/applicant/applicant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_components_misc_callback_callback_component__ = __webpack_require__("./src/app/_shared/components/misc/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_components_misc_notification_notification_component__ = __webpack_require__("./src/app/_shared/components/misc/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_components_signup_signup_home_signup_home_component__ = __webpack_require__("./src/app/_shared/components/signup/signup-home/signup-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_services_jwt_service__ = __webpack_require__("./src/app/_shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_components_forgetpassword_forgetpassword_component__ = __webpack_require__("./src/app/_shared/components/forgetpassword/forgetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_components_chat_chat_module__ = __webpack_require__("./src/app/_shared/components/chat/chat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__core_guards_logged_in_guard__ = __webpack_require__("./src/app/core/guards/logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dashboards_hr_dashboard_hr_dashboard_module__ = __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_shared_module__ = __webpack_require__("./src/app/_shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { BrowserModule } from '@angular/platform-browser';








// import {ToasterModule, ToasterService} from '@angular2-toaster';























// import { UserDashboardModule } from './dashboards/user-dashboard/user-dashboard.module';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__shared_components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__shared_components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_components_signup_hr_hr_component__["a" /* HrComponent */],
                __WEBPACK_IMPORTED_MODULE_23__shared_components_signup_applicant_applicant_component__["a" /* ApplicantComponent */],
                __WEBPACK_IMPORTED_MODULE_24__shared_components_misc_callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_24__shared_components_misc_callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shared_components_misc_notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_28__shared_components_forgetpassword_forgetpassword_component__["a" /* ForgetpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_26__shared_components_signup_signup_home_signup_home_component__["a" /* SignupHomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                // ToasterModule.forRoot(),
                // BrowserModule,
                __WEBPACK_IMPORTED_MODULE_13_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_32__shared_shared_module__["a" /* SharedModule */],
                // RouterModule,
                // Routes,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_29__shared_components_chat_chat_module__["a" /* ChatModule */],
                // UserDashboardModule,
                __WEBPACK_IMPORTED_MODULE_31__dashboards_hr_dashboard_hr_dashboard_module__["a" /* HrDashboardModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_img_max__["a" /* Ng2ImgMaxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_router_config__["a" /* routerConfig */]),
                // BrowserModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__["a" /* AngularFontAwesomeModule */], __WEBPACK_IMPORTED_MODULE_9_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_9_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__shared_services_user_base_service__["a" /* UserBaseService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_services_hrbase_service__["a" /* HrbaseService */],
                __WEBPACK_IMPORTED_MODULE_30__core_guards_logged_in_guard__["a" /* LoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_16__shared_services_notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_17__shared_services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_18__shared_services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_27__shared_services_jwt_service__["a" /* JwtService */],
                __WEBPACK_IMPORTED_MODULE_19__shared_services_quotes_service__["a" /* QuotesService */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_11__angular_common__["HashLocationStrategy"] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_components_login_login_component__ = __webpack_require__("./src/app/_shared/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_misc_callback_callback_component__ = __webpack_require__("./src/app/_shared/components/misc/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_signup_signup_home_signup_home_component__ = __webpack_require__("./src/app/_shared/components/signup/signup-home/signup-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_signup_signup_component__ = __webpack_require__("./src/app/_shared/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_signup_hr_hr_component__ = __webpack_require__("./src/app/_shared/components/signup/hr/hr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_signup_applicant_applicant_component__ = __webpack_require__("./src/app/_shared/components/signup/applicant/applicant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_misc_notification_notification_component__ = __webpack_require__("./src/app/_shared/components/misc/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_forgetpassword_forgetpassword_component__ = __webpack_require__("./src/app/_shared/components/forgetpassword/forgetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_guards_logged_in_guard__ = __webpack_require__("./src/app/core/guards/logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_components_home_page_home_page_component__ = __webpack_require__("./src/app/_shared/components/home-page/home-page.component.ts");










var routerConfig = [
    // basic routes
    // login routes during
    { path: 'login-home', component: __WEBPACK_IMPORTED_MODULE_0__shared_components_login_login_component__["a" /* LoginComponent */] },
    // {path: 'login', redirectTo: 'login-home'},
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__shared_components_home_page_home_page_component__["a" /* HomePageComponent */] },
    {
        path: 'user-profile',
        loadChildren: './dashboards/user-dashboard/user-dashboard.module#UserDashboardModule'
    },
    // hr routes
    { path: 'applicant', canActivate: [__WEBPACK_IMPORTED_MODULE_8__core_guards_logged_in_guard__["a" /* LoggedInGuard */] && localStorage['isApplicant']], redirectTo: 'user-view-post' },
    // {
    //   path: 'jobs-posted/:id',
    //   component: HrPostdetailsComponent
    // },
    // {
    //   path: 'user-view-post',
    //   loadChildren: 'app/user-view-post/user-view-post.module#UserDashboardModule',
    // },
    {
        path: 'signin-home',
        component: __WEBPACK_IMPORTED_MODULE_2__shared_components_signup_signup_home_signup_home_component__["a" /* SignupHomeComponent */]
    },
    {
        path: 'signin',
        redirectTo: 'signin-home'
    },
    // signup routes during
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_3__shared_components_signup_signup_component__["a" /* SignupComponent */],
        children: [
            {
                path: 'signin-hr',
                component: __WEBPACK_IMPORTED_MODULE_4__shared_components_signup_hr_hr_component__["a" /* HrComponent */],
            },
            {
                path: 'signin-applicant',
                component: __WEBPACK_IMPORTED_MODULE_5__shared_components_signup_applicant_applicant_component__["a" /* ApplicantComponent */],
            }
        ]
    },
    // signup routes during
    { path: 'notif', component: __WEBPACK_IMPORTED_MODULE_6__shared_components_misc_notification_notification_component__["a" /* NotificationComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_1__shared_components_misc_callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'forgetPassword', component: __WEBPACK_IMPORTED_MODULE_7__shared_components_forgetpassword_forgetpassword_component__["a" /* ForgetpasswordComponent */] },
    { path: '', redirectTo: 'login-home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/core/guards/logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("./src/app/_shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(authService) {
        this.authService = authService;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        var isLoggedIn = this.authService.isLoggedIn();
        console.log('canActivate', isLoggedIn);
        return isLoggedIn;
        // return true;
    };
    LoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hr-header [hrdata]='hrdata'></app-hr-header>\r\n<div class=\"ui very padded container segment\">\r\n\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\" style=\"margin-bottom:50px;\"> -->\r\n\r\n  <form class=\"ui form\" [formGroup]='hrpostNewDataForm'>\r\n\r\n    <div class=\"field\">\r\n      <label>Company Name\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input autofocus type=\"text\" formControlName=\"companyname\" [(ngModel)]=\"hrpostNewData.companyname\" class=\"form-control\" placeholder=\"please company name\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['companyname'].valid && hrpostNewDataForm.controls['companyname'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Job Title\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"title\" [(ngModel)]=\"hrpostNewData.title\" class=\"form-control\" placeholder=\"Full Name\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['title'].valid && hrpostNewDataForm.controls['title'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Job Description\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"description\" [(ngModel)]=\"hrpostNewData.description\" class=\"form-control\" placeholder=\"please description\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['description'].valid && hrpostNewDataForm.controls['description'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Skills\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <select class=\"ui fluid search dropdown\" multiple=\"\" formControlName=\"skills\" [(ngModel)]=\"hrpostNewData.skills\">\r\n        <option value=\"\">select your skills</option>\r\n        <option [value]='skill' *ngFor=\"let skill of skillsArray\">{{skill}}</option>\r\n      </select>\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['skills'].valid && hrpostNewDataForm.controls['skills'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Selection Procedure\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <textarea type=\"text\" formControlName=\"selectionProcedure\" [(ngModel)]=\"hrpostNewData.selectionProcedure\" class=\"form-control\"\r\n        placeholder=\"please enter steps for  selection procedure\"></textarea>\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['selectionProcedure'].valid && hrpostNewDataForm.controls['selectionProcedure'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Start Date to Register\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"date\" formControlName=\"startdate\" [(ngModel)]=\"hrpostNewData.startdate\" class=\"form-control\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['startdate'].valid && hrpostNewDataForm.controls['startdate'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>End Date to Register\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"date\" formControlName=\"enddate\" [(ngModel)]=\"hrpostNewData.enddate\" class=\"form-control\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['enddate'].valid && hrpostNewDataForm.controls['enddate'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label> Job Location\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"location\" [(ngModel)]=\"hrpostNewData.location\" class=\"form-control\" placeholder=\"please enter location\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['location'].valid && hrpostNewDataForm.controls['location'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Salary\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"salary\" [(ngModel)]=\"hrpostNewData.salary\" class=\"form-control\" placeholder=\"please enter salary\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['salary'].valid && hrpostNewDataForm.controls['salary'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Experinece\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"experinece\" [(ngModel)]=\"hrpostNewData.experinece\" class=\"form-control\" placeholder=\"please  the minumum experinece\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['experinece'].valid && hrpostNewDataForm.controls['experinece'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>DateOfJoining\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"date\" formControlName=\"dateOfJoining\" [(ngModel)]=\"hrpostNewData.dateOfJoining\" class=\"form-control\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['dateOfJoining'].valid && hrpostNewDataForm.controls['dateOfJoining'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Company Url\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"CompanyUrl\" [(ngModel)]=\"hrpostNewData.CompanyUrl\" class=\"form-control\" placeholder=\"please enter Company Url\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['CompanyUrl'].valid && hrpostNewDataForm.controls['CompanyUrl'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Bond Details\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"bondDetails\" [(ngModel)]=\"hrpostNewData.bondDetails\" class=\"form-control\" placeholder=\"please enter Bond Details\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['bondDetails'].valid && hrpostNewDataForm.controls['bondDetails'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Reporting Venue\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"ReportingVenue\" [(ngModel)]=\"hrpostNewData.ReportingVenue\" class=\"form-control\" placeholder=\"please enter Reporting Venue\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['ReportingVenue'].valid && hrpostNewDataForm.controls['ReportingVenue'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Resource Person Contact\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"ResourcePersonContact\" [(ngModel)]=\"hrpostNewData.ResourcePersonContact\" class=\"form-control\"\r\n        placeholder=\"please enter Resource Person Contact\">\r\n\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['ResourcePersonContact'].valid && hrpostNewDataForm.controls['ResourcePersonContact'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>No Of Job Openings</label>\r\n      <input type=\"text\" formControlName=\"noOfJobOpenings\" [(ngModel)]=\"hrpostNewData.noOfJobOpenings\" class=\"form-control\" placeholder=\"please enter Extra Requirement\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['noOfJobOpenings'].valid && hrpostNewDataForm.controls['noOfJobOpenings'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Extra Requirement</label>\r\n      <input type=\"text\" formControlName=\"extraRequirement\" [(ngModel)]=\"hrpostNewData.extraRequirement\" class=\"form-control\" placeholder=\"please enter Extra Requirement\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['extraRequirement'].valid && hrpostNewDataForm.controls['extraRequirement'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <button class=\"btn btn-success\" [disabled]='hrpostNewDataForm.invalid' (click)=\"onSubmit()\">submit</button>\r\n    </div>\r\n  </form>\r\n  <!-- </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrEditNewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__ = __webpack_require__("./src/app/_shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_hrpostdetails__ = __webpack_require__("./src/app/_shared/models/hrpostdetails.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HrEditNewPostComponent = /** @class */ (function () {
    function HrEditNewPostComponent(hrbaseservice, router, _notif) {
        this.hrbaseservice = hrbaseservice;
        this.router = router;
        this._notif = _notif;
        this.popup = {
            isActive: false,
            message: 'this is popup',
            title: 'My Popup',
            stay: 3000
        };
        this.hrpostNewData = __WEBPACK_IMPORTED_MODULE_5__shared_models_hrpostdetails__["a" /* HrPostDetail */].createblank();
        console.log(this.hrpostNewData);
        this.buildFormGroup();
        this.id = Object(__WEBPACK_IMPORTED_MODULE_6__shared_models_uuid__["a" /* uuid */])();
        this.skillsArray = ['Angular', 'ASP.Net', 'C#', 'C#.Net', 'ADO.Net', 'SQL Server', 'Spring', 'C', 'C++', 'JAVA', 'CSS', 'Graphic Design', 'Ember', 'DataBase', 'PHP', 'Full Stack Developing', 'Testing', 'HTML', 'Javascript', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
    }
    HrEditNewPostComponent.prototype.buildFormGroup = function () {
        var fg = {
            'title': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.title, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'description': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.description, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'companyname': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.companyname, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'startdate': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.startdate, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'enddate': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.enddate, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'skills': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.skills, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'location': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.location, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'salary': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.salary, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'experinece': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.experinece, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'dateOfJoining': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.dateOfJoining, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'extraRequirement': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.extraRequirement, []),
            'noOfJobOpenings': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.noOfJobOpenings, []),
            'CompanyUrl': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.CompanyUrl, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'bondDetails': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.bondDetails, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'ReportingVenue': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.ReportingVenue, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'ResourcePersonContact': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.ResourcePersonContact, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'selectionProcedure': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hrpostNewData.selectionProcedure, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
        };
        this.hrpostNewDataForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"](fg);
    };
    HrEditNewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            _this.hrdata = data;
        });
    };
    // accept incoming change new notification feature added
    HrEditNewPostComponent.prototype.onSubmit = function () {
        var _this = this;
        this.hrbaseservice.addNewPost(this.hrpostNewData, this.id, {
            'isHr': true,
            'isApplicant': false
        })
            .subscribe(function (res) {
            _this._notif.pop(res.message, 'Successfull', 3000);
            if (res.success) {
                _this.router.navigateByUrl('hr/jobs-posted');
                console.log(res.message, res.data);
            }
        });
        // this.router.navigate(['hr-post']);
    };
    HrEditNewPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-edit-new-post',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_hrbase_service__["a" /* HrbaseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__["a" /* NotificationService */]])
    ], HrEditNewPostComponent);
    return HrEditNewPostComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-post/hr-post-list-summary/hr-post-list-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hr-header [hrdata]='hrdata'></app-hr-header>\r\n   <div class='panel panel-default' style=\"max-width:900px\">\r\n      <div class=\"panel-body\">\r\n        <div style=\"float: left\">\r\n          <h2>{{hrpost.title}}</h2>\r\n          <div>\r\n            <p><i class=\"building icon\"></i> {{hrpost.companyname}}</p>\r\n          </div>\r\n          <div>\r\n            <p>\r\n              <span class=\"glyphicon glyphicon-map-marker\"></span> {{hrpost.location}}\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <h4>Skills Required:</h4>\r\n            <p>{{hrpost.skills}}</p>\r\n          </div>\r\n        </div>\r\n        <div style=\"float: right; padding-right:20px\">\r\n          <div>\r\n              <h5>\r\n                  <span class=\"glyphicon glyphicon-user\"></span>Applicants Registered\r\n                </h5>\r\n               <p><span class=\"glyphicon glyphicon-thumbs-up\"></span>{{hrpost?.applicants.length}}</p>\r\n          </div>\r\n          <br>\r\n           <div>\r\n             <button class=\"btn btn-primary\" (click)='userclicked()'>More Details</button>\r\n             <button class=\"btn btn-danger\" (click)='deletePost()'>Delete</button>\r\n           </div>\r\n\r\n        </div> \r\n\r\n      </div>\r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-post/hr-post-list-summary/hr-post-list-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrPostListSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HrPostListSummaryComponent = /** @class */ (function () {
    function HrPostListSummaryComponent(hrbaseservice, router) {
        this.hrbaseservice = hrbaseservice;
        this.router = router;
        this.userclick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.id = Object(__WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__["a" /* uuid */])();
    }
    HrPostListSummaryComponent.prototype.userclicked = function () {
        this.userclick.emit(this.hrpost._id);
    };
    HrPostListSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            _this.hrdata = data;
        });
    };
    HrPostListSummaryComponent.prototype.deletePost = function () {
        var windowStatus = window.confirm('confirm to delete post');
        if (windowStatus) {
            this.hrbaseservice.deleteHrPost(this.hrpost._id).subscribe(function () {
                console.log('deleted successfully');
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrPostListSummaryComponent.prototype, "hrpost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], HrPostListSummaryComponent.prototype, "userclick", void 0);
    HrPostListSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-post-list-summary',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-post/hr-post-list-summary/hr-post-list-summary.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_hrbase_service__["a" /* HrbaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HrPostListSummaryComponent);
    return HrPostListSummaryComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-post/hr-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hr-header [hrdata]=\"hrdata\"></app-hr-header>\r\n<br>\r\n<div style=\"height: 100%;width: 100%; background-image: url('assets/images/bg-images/backjobpost.jpg');background-repeat: no-repeat;background-position: center;background-size: cover;position: absolute;margin: -4em auto;overflow: hidden;scroll-behavior: unset;\">\r\n</div>\r\n<div class=\"ui grid\" style=\"margin: 4em auto;\">\r\n  <div class=\"three wide column\">\r\n\r\n  </div>\r\n  <div class=\"ten wide column\" style=\"border: 2px solid transparent;height: 50em; padding: 4em 9em;align-items: center;overflow-y: scroll;scroll-behavior: smooth;\">\r\n    <br>\r\n    <div *ngIf='!loadPage && !loadError'>\r\n        <h4>loading...... please wait</h4>\r\n       <span> <img src=\"assets/loader.svg\" height=\"64\" alt=\"Nice green circle\"/></span>\r\n    </div>\r\n    <h4 *ngIf='loadPage && !loadError && (!hrpost || !hrpost.length)'>\r\n        No jobs were posted by you\r\n    </h4>\r\n    <div *ngIf=\"loadError\">\r\n        <div class=\"alert alert-danger\">\r\n          {{error_text}}\r\n        </div>\r\n    </div>\r\n   <app-hr-post-list-summary *ngFor=\"let hrpos of hrpost\" [hrpost]=\"hrpos\" (userclick)=\"routeronclicked($event)\"></app-hr-post-list-summary>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-post/hr-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HrPostComponent = /** @class */ (function () {
    function HrPostComponent(hrbaseservice, router) {
        this.hrbaseservice = hrbaseservice;
        this.router = router;
        this.loadPage = false;
        this.loadError = false;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__["a" /* uuid */])();
    }
    HrPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            _this.hrdata = data;
        });
        this.hrbaseservice.getAllHrPost(this.id, {
            'isHr': true,
            'isApplicant': false
        }).
            subscribe(function (hrpost) {
            _this.hrpost = hrpost;
            console.log('here: ', hrpost);
            _this.loadPage = true;
        });
        // .catch((error=>{
        //  this.loadError = true;
        // this.error_text = "Get error on server request ";
        // }))
    };
    HrPostComponent.prototype.routeronclicked = function (hrpost_id) {
        this.router.navigateByUrl('/jobs-posted/' + hrpost_id);
    };
    HrPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-post',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-post/hr-post.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__["a" /* HrbaseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HrPostComponent);
    return HrPostComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list-details/hr-manage-applicant-list-details.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui very padded container segment\">\r\n  <div>\r\n      <button class=\"fr ui button primary\" (click)=\"chatOpenClicked()\">Chat</button>\r\n      <input type=\"button\" class=\"fr ui button primary\" id=\"shortlist\" (click)=\"shortlist($event.target.value)\" [value]=\"isShortlisted ? 'Deselect' : 'Shortlisted'\" >\r\n      <br>\r\n      <h3 class=\"ui dividing header\">Applicant Details</h3>\r\n  </div>\r\n  <br>\r\n    <div class=\"field\">\r\n        <div class=\"ui grid\">\r\n            <div class=\"eight wide column\">\r\n              <h5>Full Name</h5>\r\n            </div>\r\n            <div class=\"eight wide column\">\r\n             <h1>{{userdata.firstName}} {{userdata.lastName }}</h1> \r\n            </div>\r\n          </div>\r\n          <div class=\"ui grid\">\r\n            <div class=\"eight wide column\">\r\n              <h5>Email</h5>\r\n            </div>\r\n            <div class=\"eight wide column\">\r\n              {{userdata.email}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui grid\">\r\n            <div class=\"eight wide column\">\r\n              <h5>Mobile Number</h5>\r\n            </div>\r\n            <div class=\"eight wide column\">\r\n              {{userdata.phone}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui grid\">\r\n            <div class=\"eight wide column\">\r\n              <h5>Date of birth</h5>\r\n            </div>\r\n            <div class=\"eight wide column\">\r\n              {{userdata.dob | date: 'dd/MM/yyyy'}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui grid\">\r\n            <div class=\"eight wide column\">\r\n              <h5>Address</h5>\r\n            </div>\r\n            <div class=\"eight wide column\">\r\n              {{userdata.address}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui grid\">\r\n            <div class=\"eight wide column\">\r\n              <h5>Location</h5>\r\n            </div>\r\n            <div class=\"eight wide column\">\r\n              {{userdata.location}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui grid\">\r\n            <div class=\"eight wide column\">\r\n              <h5>Gender</h5>\r\n            </div>\r\n            <div class=\"eight wide column\">\r\n              {{userdata.gender}}\r\n            </div>\r\n          </div>\r\n    </div>\r\n  \r\n    <hr>\r\n    <div class=\"field\">\r\n      <h4 class=\"inline\">Education Qualifications</h4>\r\n      <br>\r\n      <div *ngFor=\"let education of userdata.education; let i = index\">\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column\">\r\n                <h5>Highest Qualification</h5>\r\n              </div>\r\n              <div class=\"eight wide column\">\r\n                {{userdata.education[i].higherDegreeValue}}\r\n              </div>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column\">\r\n                <h5>University/College/School</h5>\r\n              </div>\r\n              <div class=\"eight wide column\">\r\n                {{userdata.education[i].universityName}}\r\n              </div>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column\">\r\n                <h5>Passing Year</h5>\r\n              </div>\r\n              <div class=\"eight wide column\">\r\n                {{userdata.education[i].passingYearValue}}\r\n              </div>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column\">\r\n                <h5>Percentage</h5>\r\n              </div>\r\n              <div class=\"eight wide column\">\r\n                {{userdata.education[i].percentageValue}}\r\n              </div>\r\n            </div>\r\n        \r\n          <hr>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"field\">\r\n      <h4 class=\"inline\">Skills</h4>\r\n      <br>\r\n      <br> {{userdata.skillValue}}\r\n    </div>\r\n    <hr>\r\n    <div class=\"field\">\r\n      <h4 class=\"inline\">Experience</h4>\r\n      <br>\r\n      <br>\r\n      <div *ngFor=\"let experience of userdata.experience; let i = index\">\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column\">\r\n                <h5>Profile Title</h5>\r\n              </div>\r\n              <div class=\"eight wide column\">\r\n                {{userdata.experience[i].designation}}\r\n              </div>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column\">\r\n                <h5>Experiences</h5>\r\n              </div>\r\n              <div class=\"eight wide column\">\r\n                {{userdata.experience[i].totalExperience}}\r\n              </div>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column\">\r\n                <h5>Description</h5>\r\n              </div>\r\n              <div class=\"eight wide column\">\r\n                {{userdata.experience[i].description}}\r\n              </div>\r\n            </div>\r\n\r\n       \r\n          <hr>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n\r\n  </div>\r\n  \r\n\r\n  <!-- <div *ngIf=\"chatOpen\"  [ngClass]=\"{'visible': chatOpen , 'active': chatOpen }\" class=\"ui dimmer modals page top aligned transition\"\r\n  style=\"display: flex !important;\">\r\n  <app-chat [initiator]=\"this.userdata.hrRef\" [recepient]=\"this.hrpostdata._id\"></app-chat> -->\r\n  <!-- <app-chat-invites></app-chat-invites> -->\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list-details/hr-manage-applicant-list-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrManageApplicantListDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_notification_service__ = __webpack_require__("./src/app/_shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HrManageApplicantListDetailsComponent = /** @class */ (function () {
    function HrManageApplicantListDetailsComponent(_notif, hrbaseservice) {
        this._notif = _notif;
        this.hrbaseservice = hrbaseservice;
        this.openChat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.st = {
            'isHr': true,
            'isApplicant': false
        };
        this.id = Object(__WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__["a" /* uuid */])();
        this.chatOpen = false;
        // this.st 
    }
    HrManageApplicantListDetailsComponent.prototype.ngOnInit = function () {
        console.log('looo', this.hrpost);
        this.isShortlisted = this.postData.isShortlisted;
        this.userdata = this.postData._id;
        this.hrpostdata = this.hrpost;
    };
    HrManageApplicantListDetailsComponent.prototype.shortlist = function (event) {
        this.isShortlisted = !this.isShortlisted;
        var applicants = {
            isShortlisted: this.isShortlisted
        };
        console.log('short', applicants);
        console.log('short hr ', this.hrpostdata);
        console.log('short user', this.userdata);
        this.hrbaseservice.hrShortlist(applicants, this.hrpostdata._id, this.userdata._id).
            subscribe(function (res) {
            console.log('success');
        });
        // if (this.isShortlisted) {
        //   this._notif.pop(`${this.userdata.firstName + ' ' + this.userdata.lastName} has been shortlisted\nfor Job Tittle`, 'Success', 3000);
        // } else {
        //   this._notif.pop(`${this.userdata.firstName + ' ' + this.userdata.lastName} has been deselected\nfrom Job Tittle`, 'Deselect Successfull', 3000);
        // }
    };
    HrManageApplicantListDetailsComponent.prototype.chatOpenClicked = function () {
        this.chatOpen = true;
        this.openChat.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HrManageApplicantListDetailsComponent.prototype, "openChat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrManageApplicantListDetailsComponent.prototype, "postData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrManageApplicantListDetailsComponent.prototype, "hrpost", void 0);
    HrManageApplicantListDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-manage-applicant-list-details',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list-details/hr-manage-applicant-list-details.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__["a" /* HrbaseService */]])
    ], HrManageApplicantListDetailsComponent);
    return HrManageApplicantListDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list/hr-manage-applicant-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n    <div class=\"sixteen wide column\">\r\n  <div class=\"ui container segment\">\r\n    <div class=\"ui cards\">\r\n      <div class=\"card\">\r\n        <div class=\"content\">\r\n          <img class=\"right floated mini ui image\" src=\"/images/avatar/large/elliot.jpg\">\r\n          <div class=\"header\">\r\n            {{applicants?._id?.firstName + ' ' + applicants?._id?.lastName}}\r\n          </div>\r\n          <div class=\"meta\">\r\n            {{applicants?._id?.email}}\r\n          </div>\r\n          <div class=\"description\">\r\n            {{applicants?._id?.skills}}\r\n          </div>\r\n        </div>\r\n        <div class=\"extra content\">\r\n          <div class=\"ui two buttons\">\r\n            <div class=\"ui basic green button\" (click)=\"viewProfile()\">View Profile</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list/hr-manage-applicant-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrManageApplicantListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HrManageApplicantListComponent = /** @class */ (function () {
    function HrManageApplicantListComponent() {
        this.viewProfiles = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HrManageApplicantListComponent.prototype.viewProfile = function () {
        this.viewProfiles.emit(this.applicants);
    };
    HrManageApplicantListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrManageApplicantListComponent.prototype, "applicants", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HrManageApplicantListComponent.prototype, "viewProfiles", void 0);
    HrManageApplicantListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-manage-applicant-list',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list/hr-manage-applicant-list.component.html"),
        })
    ], HrManageApplicantListComponent);
    return HrManageApplicantListComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-hr-header [hrdata]='hrdata' ></app-hr-header>\r\n<br>\r\n<div class=\"ui grid\">\r\n  <div class=\"four wide column\" style=\"background-color: rgb(100, 99, 99); height:750px\">\r\n      <div *ngIf=\"manageBack\">\r\n          <div style=\"margin-top: 30px; background-color: lightbalck\">\r\n              <a (click)='backpage()'>\r\n                <h4 class=\"nav\">Back</h4>\r\n               </a>\r\n         </div>\r\n      </div>\r\n\r\n      <div style=\"margin-top: 30px; background-color: lightbalck\">\r\n          <a (click)='viewprofile($event)'>\r\n            <h4 class=\"nav\">{{textInfo}}</h4>\r\n          </a>\r\n        </div>\r\n  </div>\r\n<div class=\"eight wide column\">\r\n    \r\n  <div *ngIf=\"manageApplicantInfo\">\r\n\r\n      <div *ngIf='!loadPage && !loadError'>\r\n          <h4>loading...... please wait</h4>\r\n         <span> <img src=\"assets/loader.svg\" height=\"64\" alt=\"Nice green circle\"/></span>\r\n      </div>\r\n      <h4 *ngIf='loadPage && !loadError && (!hrpost?.applicants || !hrpost?.applicants)'>\r\n          No one is apply to this post\r\n      </h4>\r\n      <div *ngIf=\"loadError\">\r\n          <div class=\"alert alert-danger\">\r\n            {{error_text}}\r\n          </div>\r\n      </div>\r\n    <div class=\"\">\r\n      <app-hr-manage-applicant-list *ngFor=\"let applicant of hrpost.applicants\" [applicants]=\"applicant\" (viewProfiles)=\"viewprofile($event)\"></app-hr-manage-applicant-list>\r\n   </div>\r\n  </div>\r\n  <div *ngIf=\"applicantDetailsInfo\">\r\n    <div class=\"\">\r\n     <app-hr-manage-applicant-list-details (openChat)=\"chatOpen = $event\" [postData]=\"applicant\" [hrpost]=\"hrpost\"></app-hr-manage-applicant-list-details>\r\n   </div>\r\n  </div>\r\n</div>\r\n  <div class=\"four wide column\">\r\n    <div style=\"border: solid 2px lightblue; margin-top:10px\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <h4>\r\n            <span class=\"glyphicon glyphicon-user\"></span>\r\n            <br>Applicant Registered\r\n          </h4>\r\n        </div>\r\n        <div class=\"col-md-5\" style=\"margin-top:15px\">\r\n           <span class=\"glyphicon glyphicon-thumbs-up\"></span>\r\n           <h2>{{hrpost?.applicants.length}}</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-chat *ngIf=\"chatOpen\" [initiator]=\"this.hrpost.hrRef\" [recepient]=\"this.applicant?._id\" (expandClick)=\"st = $event;\"></app-chat>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrManageApplicantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_service__ = __webpack_require__("./src/app/_shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HrManageApplicantComponent = /** @class */ (function () {
    function HrManageApplicantComponent(data, route, router, hrbaseservice, location) {
        this.data = data;
        this.route = route;
        this.router = router;
        this.hrbaseservice = hrbaseservice;
        this.location = location;
        this.loadPage = false;
        this.loadError = false;
        this.chatOpen = false;
        this.manageApplicantInfo = true;
        this.applicantDetailsInfo = false;
        this.textInfo = '';
        this.manageBack = true;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_5__shared_models_uuid__["a" /* uuid */])();
    }
    HrManageApplicantComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('hrpost', this.hrpost);
        // this.data.currentMessage.subscribe(message => this.hrpost = message );
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            console.log('hr dqata', _this.hrdata);
            _this.hrdata = data;
        });
        this.applicantdetails();
    };
    HrManageApplicantComponent.prototype.viewprofile = function (event) {
        console.log('applicant data', event);
        if (!this.applicantDetailsInfo) {
            this.applicant = event;
            this.applicantDetailsInfo = true;
            this.manageApplicantInfo = false;
            this.textInfo = 'Back';
            this.manageBack = false;
        }
        else {
            this.applicantDetailsInfo = false;
            this.manageApplicantInfo = true;
            this.textInfo = '';
            this.applicantdetails();
            this.manageBack = true;
        }
    };
    HrManageApplicantComponent.prototype.applicantdetails = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var hrpost_id = params.get('id');
            _this.hrbaseservice.getHrPostById(hrpost_id, {
                'isHr': true,
                'isApplicant': false
            }).
                subscribe(function (hrpost) {
                console.log(hrpost);
                _this.hrpost = hrpost;
                _this.loadPage = true;
            });
            // .catch((error=>{
            //   this.loadError = true;
            //  this.error_text = "Get error on server request ";
            //  }))
        });
    };
    HrManageApplicantComponent.prototype.backpage = function () {
        this.location.back();
    };
    HrManageApplicantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-manage-applicant',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_hrbase_service__["a" /* HrbaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], HrManageApplicantComponent);
    return HrManageApplicantComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails-edit-list/hr-postdetails-edit-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui very padded container segment\">\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\" style=\"margin-bottom:50px;\"> -->\r\n\r\n  <form class=\"ui form\" [formGroup]='hrpostNewDataForm'>\r\n\r\n    <div class=\"field\">\r\n      <label>Company Name\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"companyname\" [(ngModel)]=\"hrpost.companyname\" class=\"form-control\" placeholder=\"please company name\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['companyname'].valid && hrpostNewDataForm.controls['companyname'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Job Title\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"title\" [(ngModel)]=\"hrpost.title\" class=\"form-control\" placeholder=\"Full Name\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['title'].valid && hrpostNewDataForm.controls['title'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Job Description\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"description\" [(ngModel)]=\"hrpost.description\" class=\"form-control\" placeholder=\"please description\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['description'].valid && hrpostNewDataForm.controls['description'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Skills\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <select class=\"ui fluid search dropdown\" multiple=\"\" formControlName=\"skills\" [(ngModel)]=\"hrpost.skills\">\r\n        <option value=\"\">select your skills</option>\r\n        <option [value]='skill' *ngFor=\"let skill of skillsArray\">{{skill}}</option>\r\n      </select>\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['skills'].valid && hrpostNewDataForm.controls['skills'].touched\">\r\n        <p>Please fill required fields\r\n          <span style=\"color:red\">*</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Selection Procedure\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <textarea type=\"text\" formControlName=\"selectionProcedure\" [(ngModel)]=\"hrpost.selectionProcedure\" class=\"form-control\" placeholder=\"please enter steps for  selection procedure\"></textarea>\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['selectionProcedure'].valid && hrpostNewDataForm.controls['selectionProcedure'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Start Date to Register\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"date\" formControlName=\"startdate\"[value]='hrpost.startdate' [(ngModel)]=\"hrpost.startdate\" class=\"form-control\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['startdate'].valid && hrpostNewDataForm.controls['startdate'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>End Date to Register\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"date\" formControlName=\"enddate\" [(ngModel)]=\"hrpost.enddate\" class=\"form-control\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['enddate'].valid && hrpostNewDataForm.controls['enddate'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label> Job Location\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"location\" [(ngModel)]=\"hrpost.location\" class=\"form-control\" placeholder=\"please enter location\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['location'].valid && hrpostNewDataForm.controls['location'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Salary\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"salary\" [(ngModel)]=\"hrpost.salary\" class=\"form-control\" placeholder=\"please enter salary\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['salary'].valid && hrpostNewDataForm.controls['salary'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Experinece\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"experinece\" [(ngModel)]=\"hrpost.experinece\" class=\"form-control\" placeholder=\"please  the minumum experinece\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['experinece'].valid && hrpostNewDataForm.controls['experinece'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>DateOfJoining\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"date\" formControlName=\"dateOfJoining\" [(ngModel)]=\"hrpost.dateOfJoining\" class=\"form-control\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['dateOfJoining'].valid && hrpostNewDataForm.controls['dateOfJoining'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Company Url\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"CompanyUrl\" [(ngModel)]=\"hrpost.CompanyUrl\" class=\"form-control\" placeholder=\"please enter Company Url\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['CompanyUrl'].valid && hrpostNewDataForm.controls['CompanyUrl'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Bond Details\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"bondDetails\" [(ngModel)]=\"hrpost.bondDetails\" class=\"form-control\" placeholder=\"please enter Bond Details\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['bondDetails'].valid && hrpostNewDataForm.controls['bondDetails'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Reporting Venue\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"ReportingVenue\" [(ngModel)]=\"hrpost.ReportingVenue\" class=\"form-control\" placeholder=\"please enter Reporting Venue\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['ReportingVenue'].valid && hrpostNewDataForm.controls['ReportingVenue'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Resource Person Contact\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" formControlName=\"ResourcePersonContact\" [(ngModel)]=\"hrpost.ResourcePersonContact\" class=\"form-control\"\r\n        placeholder=\"please enter Resource Person Contact\">\r\n\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['ResourcePersonContact'].valid && hrpostNewDataForm.controls['ResourcePersonContact'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>No Of Job Openings</label>\r\n      <input type=\"text\" formControlName=\"noOfJobOpenings\" [(ngModel)]=\"hrpost.noOfJobOpenings\" class=\"form-control\" placeholder=\"please enter Extra Requirement\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['noOfJobOpenings'].valid && hrpostNewDataForm.controls['noOfJobOpenings'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>Extra Requirement</label>\r\n      <input type=\"text\" formControlName=\"extraRequirement\" [(ngModel)]=\"hrpost.extraRequirement\" class=\"form-control\" placeholder=\"please enter Extra Requirement\">\r\n      <div *ngIf=\"!hrpostNewDataForm.controls['extraRequirement'].valid && hrpostNewDataForm.controls['extraRequirement'].touched\">\r\n        <p style=\"color:red\">Please fill required fields*</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <button class=\"btn btn-success\" [disabled]='hrpostNewDataForm.invalid' (click)=\"onSubmit()\">submit</button>\r\n      <button class=\"ui button\" (click)=\"discardClicked()\"> Discard </button>\r\n    </div>\r\n  </form>\r\n  <!-- </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails-edit-list/hr-postdetails-edit-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrPostdetailsEditListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HrPostdetailsEditListComponent = /** @class */ (function () {
    function HrPostdetailsEditListComponent(hrbaseservice, router) {
        this.hrbaseservice = hrbaseservice;
        this.router = router;
        this.saveClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.buildFormGroup();
        this.skillsArray = ['Angular', 'ASP.Net', 'C#', 'C#.Net', 'ADO.Net', 'SQL Server', 'Spring', 'C', 'C++', 'JAVA', 'CSS', 'Graphic Design', 'Ember', 'DataBase', 'PHP', 'Full Stack Developing', 'Testing', 'HTML', 'Javascript', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
    }
    HrPostdetailsEditListComponent.prototype.buildFormGroup = function () {
        var fg = {
            'title': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'description': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'companyname': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'startdate': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'enddate': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'skills': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'location': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'salary': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'experinece': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'dateOfJoining': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'extraRequirement': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, []),
            'noOfJobOpenings': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, []),
            'CompanyUrl': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'bondDetails': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'ReportingVenue': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'ResourcePersonContact': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            'selectionProcedure': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
        };
        this.hrpostNewDataForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"](fg);
    };
    HrPostdetailsEditListComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.id = this.hrpost._id;
    };
    HrPostdetailsEditListComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('edit', this.hrpostNewDataForm.value);
        this.hrbaseservice.HrPostUpdate(this.hrpostNewDataForm.value, this.id).
            subscribe(function () {
            _this.saveClick.emit(true);
            console.log('success');
        });
    };
    HrPostdetailsEditListComponent.prototype.discardClicked = function () {
        window.alert('Your changes will not get updated in our database');
        this.router.navigateByUrl('hr/jobs-posted');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrPostdetailsEditListComponent.prototype, "hrpost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HrPostdetailsEditListComponent.prototype, "saveClick", void 0);
    HrPostdetailsEditListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-postdetails-edit-list',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails-edit-list/hr-postdetails-edit-list.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_hrbase_service__["a" /* HrbaseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HrPostdetailsEditListComponent);
    return HrPostdetailsEditListComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails-summary/hr-postdetails-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n    <div class=\"six wide column\">\r\n      <h6>Job Title:</h6>\r\n    </div>\r\n    <div class=\"ten wide column\">\r\n      <h1 style=\"text-align: center\">{{hrpost?.title}}</h1>\r\n    </div>\r\n  \r\n    <div class=\"six wide column\">\r\n      <h6>Job Description:</h6>\r\n    </div>\r\n    <div class=\"ten wide column\">\r\n      <p>{{hrpost?.description}}</p>\r\n    </div>\r\n  \r\n  \r\n      <div class=\"six wide column\">\r\n        <h6>Company Name:</h6>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <p>{{hrpost?.companyname}}</p>\r\n      </div>\r\n  \r\n  \r\n      <div class=\"six wide column\">\r\n        <h6>Selection Procedure:</h6>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <p>{{hrpost?.selectionProcedure}}</p>\r\n      </div>\r\n  \r\n  \r\n    <div class=\"six wide column\">\r\n      <h6>StartDate To Register:</h6>\r\n    </div>\r\n    <div class=\"ten wide column\">\r\n      <p>{{hrpost?.startdate}}</p>\r\n    </div>\r\n  \r\n  \r\n    <div class=\"six wide column\">\r\n      <h6>EndDate To Register:</h6>\r\n    </div>\r\n    <div class=\"ten wide column\">\r\n      <p>{{hrpost?.enddate}}</p>\r\n    </div>\r\n  \r\n  \r\n    <div class=\"six wide column\">\r\n      <h6>Skills Required:</h6>\r\n    </div>\r\n    <div class=\"ten wide column\">\r\n      <p>{{hrpost?.skills}}</p>\r\n    </div>\r\n  \r\n  \r\n    <div class=\"six wide column\">\r\n      <h6>Job Location:</h6>\r\n    </div>\r\n    <div class=\"ten wide column\">\r\n      <p> {{hrpost?.location}}</p>\r\n    </div>\r\n  \r\n  \r\n    <div class=\"six wide column\">\r\n      <h6>Salary:</h6>\r\n    </div>\r\n    <div class=\"ten wide column\">\r\n      <p>{{hrpost?.salary}}</p>\r\n    </div>\r\n  \r\n  \r\n      <div class=\"six wide column\">\r\n        <h6>Experinece Required:</h6>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <p>{{hrpost?.experinece}}</p>\r\n      </div>\r\n  \r\n  \r\n      <div class=\"six wide column\">\r\n        <h6>Date of Joining:</h6>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <p>{{hrpost?.dateOfJoining}}</p>\r\n      </div>\r\n  \r\n  \r\n      <div class=\"six wide column\">\r\n        <h6>Extra Requirement:</h6>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <p>{{hrpost?.extraRequirement}}</p>\r\n      </div>\r\n  \r\n  \r\n      <div class=\"six wide column\">\r\n        <h6>No Of Job Openings:</h6>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <p>{{hrpost?.noOfJobOpenings}}</p>\r\n      </div>\r\n  \r\n  \r\n      <div class=\"six wide column\">\r\n        <h6>Company Url:</h6>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <a target=\"blank\" href=\"http://{{hrpost?.CompanyUrl}}\">{{hrpost?.CompanyUrl}}</a>\r\n      </div>\r\n  \r\n  \r\n      <div class=\"six wide column\">\r\n        <h6>Bond Details:</h6>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <p>{{hrpost?.bondDetails}}</p>\r\n      </div>\r\n  \r\n  \r\n      <div class=\"six wide column\">\r\n        <h6>Reporting Venue:</h6>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <p>{{hrpost?.ReportingVenue}}</p>\r\n      </div>\r\n  \r\n  \r\n      <div class=\"six wide column\">\r\n        <h6>Resource Person Contact:</h6>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <p>{{hrpost?.ResourcePersonContact}}</p>\r\n      </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails-summary/hr-postdetails-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrPostdetailsSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HrPostdetailsSummaryComponent = /** @class */ (function () {
    function HrPostdetailsSummaryComponent() {
        this.a = this.hrpost;
        console.log('nulls is hers', this.hrpost);
    }
    HrPostdetailsSummaryComponent.prototype.ngOnInit = function () {
        // if (this.hrpost == null) {
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrPostdetailsSummaryComponent.prototype, "hrpost", void 0);
    HrPostdetailsSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-postdetails-summary',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails-summary/hr-postdetails-summary.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], HrPostdetailsSummaryComponent);
    return HrPostdetailsSummaryComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails.component.css":
/***/ (function(module, exports) {

module.exports = ".glyphicon.glyphicon-user{\r\n    font-size: 65px;\r\n}\r\n\r\n.glyphicon.glyphicon-thumbs-up{\r\n    font-size: 30px;\r\n}\r\n\r\n.nav{\r\n    color: azure;\r\n    font-size: 20px;\r\n    padding-left: 10px\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hr-header [hrdata]=\"hrdata\"></app-hr-header>\r\n<br>\r\n<div class=\"ui grid\">\r\n  <div class=\"four wide column\" style=\"background-color: rgb(100, 99, 99); height:750px\">\r\n      <div *ngIf=\"postviewback\">\r\n          <div style=\"margin-top: 30px; background-color: lightbalck\">\r\n              <a (click)='postbackpage()'>\r\n                <h4 class=\"nav\">Back</h4>\r\n               </a>\r\n          </div>\r\n      </div>\r\n    <div *ngIf=\"editviewback\">\r\n        <div style=\"margin-top: 30px; background-color: lightbalck\">\r\n            <a (click)='editbackpage()'>\r\n              <h4 class=\"nav\">Back</h4>\r\n             </a>\r\n       </div>\r\n    </div>\r\n    \r\n    <div style=\"margin-top: 30px; background-color: lightbalck\">\r\n      <a (click)='manageApplicant()'>\r\n        <h4 class=\"nav\">{{textInfo}}</h4>\r\n      </a>\r\n    </div>\r\n    <!-- <div style=\"margin-top: 30px; background-color: lightbalck\">\r\n      <a href=\"\">\r\n        <h4 class=\"nav\">Chating</h4>\r\n      </a>\r\n    </div> -->\r\n  </div>\r\n<div class=\"eight wide column\">\r\n    <div *ngIf=\"postDetailsInfo\">\r\n        <div class=\"\" style=\"border: 2px solid lightgrey\">\r\n          <div style=\"margin-top:20px\">\r\n            <app-hr-postdetails-summary [hrpost]='hrpost'> </app-hr-postdetails-summary>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"editpostDetailsInfo\">\r\n      <div class=\"\" style=\"border: 2px solid lightgrey\">\r\n        <div style=\"margin-top:20px\">\r\n          <app-hr-postdetails-edit-list [hrpost]=\"hrpost\" (saveClick)=\"editbackpage()\" ></app-hr-postdetails-edit-list>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n  <div class=\"four wide column\">\r\n    <div style=\"border: solid 2px lightblue; margin-top:10px\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <h4>\r\n            <span class=\"glyphicon glyphicon-user\"></span>\r\n            <br>Applicant Registered\r\n          </h4>\r\n        </div>\r\n        <div class=\"col-md-5\" style=\"margin-top:15px\">\r\n           <span class=\"glyphicon glyphicon-thumbs-up\"></span>\r\n           <h2>{{hrpost?.applicants.length}}</h2>\r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n    <div style=\"margin-top:10px\">\r\n        <div class=\"row\" >\r\n            <button class=\"btn btn-success\" (click)=\"editpost()\">Edit</button>\r\n          </div>\r\n    </div>\r\n    <div style=\"margin-top:10px\">\r\n      <div class=\"row\" >\r\n          <button class=\"btn btn-danger\" (click)=\"deletepost()\">Delete</button>\r\n        </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrPostdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_data_service__ = __webpack_require__("./src/app/_shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HrPostdetailsComponent = /** @class */ (function () {
    function HrPostdetailsComponent(route, hrbaseservice, data, router, location) {
        this.route = route;
        this.hrbaseservice = hrbaseservice;
        this.data = data;
        this.router = router;
        this.location = location;
        this.postDetailsInfo = true;
        this.editpostDetailsInfo = false;
        this.textInfo = 'Manage Applicant';
        this.postviewback = true;
        this.editviewback = false;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_5__shared_models_uuid__["a" /* uuid */])();
    }
    HrPostdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            _this.hrdata = data;
        });
        this.postdetails();
    };
    HrPostdetailsComponent.prototype.manageApplicant = function () {
        this.data.changeMessage(this.hrpost);
        this.router.navigate(['jobs-posted/' + this.hrpost._id + '/manageApplicant']);
    };
    HrPostdetailsComponent.prototype.editpost = function () {
        this.postviewback = false;
        this.editviewback = true;
        this.postDetailsInfo = false;
        this.editpostDetailsInfo = true;
    };
    HrPostdetailsComponent.prototype.postdetails = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var hrpost_id = params.get('id');
            _this.hrbaseservice.getHrPostById(hrpost_id, {
                'isHr': true,
                'isApplicant': false
            }).
                subscribe(function (hrpost) {
                console.log(hrpost);
                _this.hrpost = hrpost;
                _this.hrpost.dateOfJoining = _this.hrpost.dateOfJoining.replace(/T00:00:00.000Z/, '');
                _this.hrpost.startdate = _this.hrpost.startdate.replace(/T00:00:00.000Z/, '');
                _this.hrpost.enddate = _this.hrpost.enddate.replace(/T00:00:00.000Z/, '');
                // console.log('hrpost',this.hrpost);
            });
        });
    };
    HrPostdetailsComponent.prototype.postbackpage = function () {
        this.location.back();
    };
    HrPostdetailsComponent.prototype.editbackpage = function () {
        this.postviewback = true;
        this.editviewback = false;
        this.postDetailsInfo = true;
        this.editpostDetailsInfo = false;
    };
    HrPostdetailsComponent.prototype.deletepost = function () {
        var _this = this;
        var windowStatus = window.confirm('confirm to delete post');
        if (windowStatus) {
            this.hrbaseservice.deleteHrPost(this.hrpost._id).subscribe(function () {
                _this.router.navigateByUrl('hr/jobs-posted');
                console.log('deleted successfully');
            });
        }
    };
    HrPostdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-postdetails',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_hrbase_service__["a" /* HrbaseService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], HrPostdetailsComponent);
    return HrPostdetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin: 10px\r\n}"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hr-header [hrdata]=\"hrdata\"></app-hr-header>\r\n\r\n<div class=\"ui grid centered\" style=\"margin-top: 2%;\">\r\n  <div class=\"four wide ui segment column grid\" style=\"padding-left: 0%; padding-right: 20px;\">\r\n\r\n    <div class=\"row centered\">\r\n      <div class=\"avatar-upload\">\r\n        <div class=\"avatar-edit\">\r\n          <input type=\"file\" id=\"imageUpload\" accept=\".png, .jpg, .jpeg\" (change)=\"updateProfilePicture($event.target.files)\" />\r\n\r\n          <label for=\"imageUpload\"></label>\r\n        </div>\r\n        <div class=\"avatar-preview\">\r\n          <!-- <div  [ngStyle]=\"{background: 'url(http://localhost:3000/images/' + ')'}\"></div> -->\r\n          <div id=\"imagePreview\" [ngStyle]=\"{'background-image': profile_photo_for_viewing}\"></div>\r\n          <!-- <div id=\"imagePreview\" [ngStyle]=\"{background: 'url(http://localhost:3000/images/' + hrdata.profile_photo + ')'\"></div>\r\n                       -->\r\n          <!-- {{\"url(http://localhost:3000/images/\" + {{hrdata.profile_photo}} + \")\"}}> -->\r\n\r\n        </div>\r\n        <div class=\"container ui\">\r\n          <a class=\"fr\" (click)=\"EditPersonalDetails()\" style=\"float: right;\">Edit</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row centered\">\r\n      <div class=\"segment fluid ui\" style=\"width: 100%; border-color: tomato\">\r\n        {{hrdata?.firstName}} {{hrdata?.lastName }}\r\n      </div>\r\n      <div class=\"ui container fluid\">\r\n        <a class=\"ui teal image label\">\r\n          <i class=\"at icon\"></i>\r\n          <div class=\"detail\">{{hrdata?.email}}</div>\r\n        </a>\r\n      </div>\r\n      <div class=\"ui container compact\" style=\"width: fit-content; margin-top: 1em;\">\r\n        <div class=\"ui celled list\">\r\n          <div class=\"item\">\r\n            <i class=\"mobile icon\"></i>\r\n            {{hrdata?.phone}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <i class=\"birthday cake icon\"></i>\r\n            {{hrdata?.dob | date: 'dd/MM/yyyy'}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <i class=\"home icon\"></i>\r\n            {{hrdata?.address}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <i class=\"location arrow icon\"></i>\r\n            {{(hrdata?.city + ', ' + hrdata?.state + ', ' + hrdata?.country) | removeExtraComma}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <label for=\"\">Designation: </label>\r\n            {{hrdata?.designation}}\r\n          </div>\r\n          <div class=\"item\">\r\n              <i class=\"suitcase icon\"></i>\r\n            {{hrdata?.jobProfile}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <i [ngClass]=\"{mars: isMale, venus: isFemale, icon: true}\"></i>\r\n            {{hrdata?.gender}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row centered\">\r\n    </div>\r\n  </div>\r\n  <div class=\"eleven wide ui segment centered column grid\" style=\"margin: 0 0 1em 1em;overflow: hidden;scroll-behavior: unset\">\r\n    <div class=\"ui styled fluid accordion\">\r\n      <!-- Experiences -->\r\n      <div class=\"active title\" (click)=\"skillActive = false;\">\r\n        <a class=\"fr float right\" (click)=\"AddExperienceMore()\">Add more Experiences</a>\r\n        <i class=\"dropdown icon\"></i>\r\n        Experinces\r\n      </div>\r\n      <div class=\"active content\">\r\n        <div class='panel panel-default' style=\"overflow: hidden;\">\r\n          <div class=\"ui long panel-body\" style=\"overflow-y: auto;margin: 0em -1em;padding: 1em 3em;height: 22em;\">\r\n              <div *ngIf=\"hrdata?.experience.length === 0\" class=\"ui compact message\" style=\"margin: 8em auto;left: 42%;\">\r\n                  <p>It's Time To add Some Experince</p>\r\n                </div>\r\n            <div *ngFor=\"let experience of hrdata?.experience; let i = index\">\r\n              <a class=\"ui orange left ribbon label\" (click)=\"editData(i, $event.target.innerText)\">\r\n                {{ meme == i ? 'Save' : 'Edit'}}\r\n              </a>\r\n              <div *ngIf=\"expMain\">\r\n                <a class=\"ui orange right ribbon label\" (click)=\"deleteExperience(i);\">Delete</a>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <h5>Profile Title</h5>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"ui input\">\r\n                      <input *ngIf=\"meme == i\" type=\"text\" [(ngModel)]=\"hrdata.experience[i].designation\">\r\n                    </div>\r\n                    <span *ngIf=\"!(meme == i)\">{{hrdata.experience[i]?.designation}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <h5>Experience</h5>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"ui input\">\r\n                      <input *ngIf=\"meme == i\" type=\"text\" [(ngModel)]=\"hrdata.experience[i].totalExperience\">\r\n                    </div>\r\n                    <span *ngIf=\"!(meme == i)\">{{hrdata.experience[i]?.totalExperience}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <h5>Description</h5>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"ui input\">\r\n                      <input *ngIf=\"meme == i\" type=\"text\" [(ngModel)]=\"hrdata?.experience[i].description\">\r\n                    </div>\r\n                    <span *ngIf=\"!(meme == i)\">{{hrdata?.experience[i].description}}</span>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Experiences -->\r\n      <!-- Skills -->\r\n      <div class=\"title\" (click)=\"skillActive = true;\">\r\n        <a class=\"fr\" (click)=\"EditSkills()\">Edit</a>\r\n        <i class=\"dropdown icon\"></i>\r\n        Skills I Preferably Watch For.\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class='panel panel-default'>\r\n          <div class=\"panel-body\">\r\n            <div *ngIf=\"hrdata?.skillValue.length === 0\" class=\"ui compact message\" style=\"margin: 4em auto;left: 42%;\">\r\n                <p>It's Time To add Some Experince</p>\r\n              </div>\r\n            <!-- <div *ngIf=\"hrdata?.skillValue.length === 0\"> -->\r\n              <!-- <div class=\"ui input\">\r\n                <select  *ngIf=\"meme1\" class=\"ui fluid search dropdown\" [(ngModel)]=\"hrdata.skillValue\" multiple=\"\" >\r\n                    <option value=\"\">Select</option>\r\n                    <option *ngFor=\"let option of skillsArray\">{{option}}</option>\r\n                  </select>\r\n                  </div> -->\r\n\r\n              <span>{{hrdata?.skillValue}}</span>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Skills -->\r\n    </div>\r\n    <div *ngIf=\"skillActive\" [ngClass]=\"{'animated': true,'fadeInDown': skillActive }\" class=\"ui info fluid message grid centered\"\r\n      style=\"margin:8em 14em;position: absolute;\">\r\n      {{qod}}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<hr>\r\n\r\n<div *ngIf=\"detailsOpen || expAdd || SkillsOpen\" [ngClass]=\"{'ui': true, 'dimmer': true, 'modals': true, 'page': true, 'top': true, 'aligned': true, 'transition': true, 'visible': detailsOpen || ExpOpen || SkillsOpen, 'active': detailsOpen || ExpOpen || SkillsOpen}\"\r\n  style=\"display: flex !important;\">\r\n  <app-hr-details *ngIf=\"detailsOpen\" (discardClick)=\"closeDetails($event)\" (saveClick)=\"closeDetails($event)\" [hrdata]=\"hrdata\"></app-hr-details>\r\n  <app-hr-experience-add-details *ngIf=\"expAdd\" (discardClick)=\"closeexp($event)\" (saveClick)=\"closeexp($event)\" [hrdata]=\"hrdata\"></app-hr-experience-add-details>\r\n  <app-hr-skill *ngIf=\"SkillsOpen\" (discardClick)=\"closeSkills($event)\" (saveClick)=\"closeSkills($event)\" [hrdata]=\"hrdata\"></app-hr-skill>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<hr>\r\n<hr>\r\n<hr>\r\n"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrDashboardDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_img_max__ = __webpack_require__("./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__("./src/app/_shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__ = __webpack_require__("./src/app/_shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_quotes_service__ = __webpack_require__("./src/app/_shared/services/quotes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var HrDashboardDetailsComponent = /** @class */ (function () {
    function HrDashboardDetailsComponent(router, _authService, _userService, _notif, ng2ImgMax, hrbaseservice, _qod) {
        this.router = router;
        this._authService = _authService;
        this._userService = _userService;
        this._notif = _notif;
        this.ng2ImgMax = ng2ImgMax;
        this.hrbaseservice = hrbaseservice;
        this._qod = _qod;
        this.skillActive = false;
        this.isMale = false;
        this.isFemale = false;
        this.otherGender = false;
        this.qod = 'Qoute Of the Day';
        this.expMain = true;
        this.ExpOpen = false;
        this.detailsMain = true;
        this.detailsOpen = false;
        this.jobOpen = false;
        this.SkillsOpen = false;
        this.SkillsMain = true;
        this.ContactMain = true;
        this.ContactOpen = false;
        this.uploadImageActive = false;
        this.expAdd = false;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_7__shared_models_uuid__["a" /* uuid */])();
        this.meme1 = false;
    }
    HrDashboardDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('from hr: ', this._authService.isLoggedIn());
        // if (!this._authService.isLoggedIn()) {
        //   this.router.navigateByUrl('login');
        // }
        this.accordionClicked();
        this._qod.getQOD().then(function (q) {
            _this.qod = q;
        });
        if (!this._authService.isLoggedIn) {
            this.router.navigateByUrl('login');
        }
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            _this.hrdata = data;
            console.log('hr data', _this.hrdata);
            // if (this.hrdata.profile_photo) {
            _this.profile_photo_for_viewing = _this.getUrl();
            // this.isMale = this.hrdata.gender.toLowerCase() === 'male';
            // this.isFemale = this.hrdata.gender.toLowerCase() === 'female';
            // this.otherGender = this.hrdata.gender.toLowerCase() === 'other';
            // }
        });
    };
    HrDashboardDetailsComponent.prototype.accordionClicked = function () {
        $('.ui.accordion')
            .accordion({
            collapsible: false
        });
        $('.ui.selection.dropdown').dropdown();
        $('#select')
            .dropdown();
    };
    HrDashboardDetailsComponent.prototype.EditPersonalDetails = function () {
        this.detailsOpen = true;
        this.detailsMain = false;
    };
    HrDashboardDetailsComponent.prototype.closeDetails = function (event) {
        console.log('as', event);
        this.hrdata = event;
        // this.isMale = this.hrdata.gender.toLowerCase() === 'male';
        // this.isFemale = this.hrdata.gender.toLowerCase() === 'female';
        // this.otherGender = this.hrdata.gender.toLowerCase() === 'other';
        this.detailsOpen = false;
        this.detailsMain = true;
    };
    HrDashboardDetailsComponent.prototype.EditSkills = function () {
        this.SkillsMain = false;
        this.SkillsOpen = true;
    };
    HrDashboardDetailsComponent.prototype.closeSkills = function () {
        this.SkillsMain = true;
        this.SkillsOpen = false;
    };
    HrDashboardDetailsComponent.prototype.EditContactDetails = function () {
        this.ContactMain = false;
        this.ContactOpen = true;
    };
    HrDashboardDetailsComponent.prototype.closecontact = function () {
        this.ContactMain = true;
        this.ContactOpen = false;
    };
    HrDashboardDetailsComponent.prototype.AddExperienceMore = function () {
        // console.log("sdd");
        this.expAdd = true;
    };
    HrDashboardDetailsComponent.prototype.EditExpDetails = function () {
        this.expMain = false;
        this.ExpOpen = true;
    };
    HrDashboardDetailsComponent.prototype.closeexp = function (event) {
        this.hrdata = event;
        this.expMain = true;
        this.ExpOpen = false;
    };
    HrDashboardDetailsComponent.prototype.closeAddExp = function () {
        this.expAdd = false;
    };
    // abhishek code
    HrDashboardDetailsComponent.prototype.logoutClicked = function () {
        console.log('log out clicked');
        this._authService.logout();
    };
    HrDashboardDetailsComponent.prototype.uploadImageClicked = function () {
        // console.log(event);
        this.uploadImageActive = !this.uploadImageActive;
        console.log('dscs', this.uploadImageActive);
    };
    HrDashboardDetailsComponent.prototype.getUrl = function () {
        console.log('fd', this.hrdata);
        if (this.hrdata.profile_photo) {
            return "url(" + __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].USER_SERVER + "/images/" + (this.hrdata ? this.hrdata.profile_photo : 'skj') + ")";
        }
        // return `url()`;/
        console.log('inside geturl');
        return 'url(\'http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg\')';
    };
    HrDashboardDetailsComponent.prototype.updateProfilePicture = function (files) {
        var _this = this;
        var file = files[0];
        if (!file || file.size > 202400000) {
            this._notif.pop('Please Select an Image\n or file size is greater then 2mb', 'Wrong Input!', 3000);
        }
        this.ng2ImgMax.resizeImage(file, 250, 250).subscribe(function (resImg) {
            _this.ng2ImgMax.compressImage(resImg, 1.00).subscribe(function (finalImg) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('file is : ', this.hrdata);
                            return [4 /*yield*/, this._userService.updateProfilePicture(this.hrdata, { 'profile_photo': finalImg })];
                        case 1:
                            result = _a.sent();
                            this.hrdata.profile_photo = result.data;
                            this.profile_photo_for_viewing = this.getUrl();
                            this._notif.pop(result.message, 'New Profile Pic', 3000);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    HrDashboardDetailsComponent.prototype.deleteExperience = function (pos) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.hrdata.experience = this.hrdata.experience.filter( el => el !== this.hrdata.experience[pos]);
                        this.hrdata.experience.splice(pos, 1);
                        console.log(pos, JSON.stringify(this.hrdata.experience));
                        return [4 /*yield*/, this.hrbaseservice.updateHrDetailsById(this.hrdata, this.id)];
                    case 1:
                        _a.sent();
                        this._notif.pop('Successfully Deleted Experience.', 'Great!', 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    HrDashboardDetailsComponent.prototype.editData = function (pos, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type.toLowerCase() === 'edit')) return [3 /*break*/, 1];
                        this.meme = pos;
                        this.meme1 = true;
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(type.toLowerCase() === 'save')) return [3 /*break*/, 3];
                        this.meme = -1;
                        this.meme1 = false;
                        return [4 /*yield*/, this.hrbaseservice.updateHrDetailsById(this.hrdata, this.id)];
                    case 2:
                        _a.sent();
                        this._notif.pop('Updated New Education Details', 'Updated', 2000);
                        _a.label = 3;
                    case 3:
                        console.log('lglvlmddknvoslvkdnlknvl:: ', pos, type);
                        return [2 /*return*/];
                }
            });
        });
    };
    HrDashboardDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-dashboard-details',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_user_base_service__["a" /* UserBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_img_max__["b" /* Ng2ImgMaxService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_hrbase_service__["a" /* HrbaseService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_services_quotes_service__["a" /* QuotesService */]])
    ], HrDashboardDetailsComponent);
    return HrDashboardDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-details/hr-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui very padded container segment\"> \r\n  <form [formGroup]=\"hrdetailForm\" class=\"ui form\">\r\n    <h4 class=\"ui dividing header\">New H.R Registration</h4>\r\n    <div class=\"field\">\r\n      <label>Name *</label>\r\n      <div class='two fields'>\r\n        <div class=\"field\">\r\n          <input  autofocus type=\"text\"  placeholder=\"First Name\" [(ngModel)]=\"hrdata.firstName\" formControlName=\"firstName\">\r\n          <div *ngIf=\"!hrdetailForm.controls['firstName'].valid && hrdetailForm.controls['firstName'].touched\">\r\n              <p>please fill required fields*</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <input type=\"text\"  placeholder=\"Last Name\" [(ngModel)]=\"hrdata.lastName\" formControlName=\"lastName\">\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"two fields\">\r\n    <div class=\"field\">\r\n      <label>Date Of Birth\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <div class=\"field\">\r\n      <input type=\"date\" formControlName=\"dob\" placeholder=\"enter date of birth\" [(ngModel)]=\"hrdata.dob\">\r\n      <div *ngIf=\"!hrdetailForm.controls['dob'].valid && hrdetailForm.controls['dob'].touched\">\r\n          <p>please fill required fields*</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Phone *</label>\r\n      <div class=\"field\">\r\n        <input type=\"text\"  placeholder=\"phone\" [(ngModel)]=\"hrdata.phone\" formControlName=\"phone\">\r\n        <div *ngIf=\"!hrdetailForm.controls['phone'].valid && hrdetailForm.controls['phone'].touched\">\r\n            <p>please fill required fields*</p>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"two fields\">\r\n        <div class=\"field\">\r\n            <label>Email *</label>\r\n          <div class=\"field\">\r\n        <input type=\"text\"  placeholder=\"Email\" [(ngModel)]=\"hrdata.email\" formControlName=\"email\">\r\n        <div *ngIf=\"!hrdetailForm.controls['email'].valid && hrdetailForm.controls['email'].touched\">\r\n            <p>please fill required fields*</p>\r\n          </div>\r\n          </div>\r\n          </div>\r\n    <div class=\"field\">\r\n      <label>Country *</label>\r\n      <div class='field'>\r\n      <input type=\"text\" placeholder=\"country\" [(ngModel)]=\"hrdata.country\" formControlName=\"country\">\r\n      <div *ngIf=\"!hrdetailForm.controls['country'].valid && hrdetailForm.controls['country'].touched\">\r\n          <p>please fill required fields*</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"two fields\">\r\n    <div class=\"field\">\r\n      <label>State *</label>\r\n      <select class=\"ui fluid search dropdown\"  formControlName=\"state\" [(ngModel)]=\"hrdata.state\">\r\n          <option value=''>select your state</option>\r\n          <option [value]=\"state\" *ngFor=\"let state of states\">{{state}}</option>\r\n        </select>\r\n        <div *ngIf=\"(hrdata.state==='select your state')&&hrdetailForm.controls['state'].valid\">\r\n            <p>please fill required fields*</p>\r\n          </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>City</label>\r\n      <select  class=\"ui fluid search dropdown\"  formControlName=\"city\" [(ngModel)]=\"hrdata.city\">\r\n          <option value=''>select your city</option>\r\n        <option [value]=\"city\" *ngFor=\"let city of cities\">{{city}}</option>\r\n      </select>\r\n      <div *ngIf=\"(hrdata.city==='select your city')&&hrdetailForm.controls['city'].valid\">\r\n        <p>please fill required fields*</p>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"field\">\r\n    <label>Designation *</label>\r\n    <input type=\"text\" placeholder=\"Designation\" [(ngModel)]=\"hrdata.designation\" formControlName=\"designation\">\r\n    <div *ngIf=\"!hrdetailForm.controls['designation'].valid && hrdetailForm.controls['designation'].touched\">\r\n      <p>please fill required fields*</p>\r\n      </div>\r\n  </div>\r\n  <div class=\"sixteen wide padded field\">\r\n    <label>Address*</label>\r\n    <input type=\"text\" placeholder=\"Address\" [(ngModel)]=\"hrdata.address\" formControlName=\"address\">\r\n    <div *ngIf=\"!hrdetailForm.controls['address'].valid && hrdetailForm.controls['address'].touched\">\r\n      <p>please fill required fields*</p>\r\n      </div>\r\n  </div>\r\n      <div class=\"field\">\r\n        <label>Job Profile *</label>\r\n        <div class=\"eight wide field\">\r\n          <textarea type=\"text\"  placeholder=\"jobProfile\" [(ngModel)]=\"hrdata.jobProfile\" formControlName=\"jobProfile\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <button class=\"ui primary button\"  type=\"submit\" (click)=\"onSubmit()\"> Save </button>\r\n      <button class=\"ui button\"  (click)=\"discardClicked()\"> Discard </button>\r\n     </div>\r\n    </form>\r\n    </div>"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-details/hr-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_india_cities_json__ = __webpack_require__("./src/app/_shared/data/india-cities.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_india_cities_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__shared_data_india_cities_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HrDetailsComponent = /** @class */ (function () {
    function HrDetailsComponent(hrbaseservice) {
        this.hrbaseservice = hrbaseservice;
        this.cities = {};
        this.discardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.buildFormGroup();
        this.id = Object(__WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__["a" /* uuid */])();
        this.cities = __WEBPACK_IMPORTED_MODULE_4__shared_data_india_cities_json__;
        this.states = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'TamilNadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
        ];
    }
    HrDetailsComponent.prototype.discardClicked = function () {
        this.discardClick.emit(JSON.parse(this.temp));
    };
    HrDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'firstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'lastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
            'dob': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]{10}')]),
            'industry': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'designation': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'jobProfile': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        };
        this.hrdetailForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](fg);
    };
    HrDetailsComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.temp = JSON.stringify(this.hrdata);
        if (this.hrdata != null && this.hrdata != undefined) {
            this.hrdata.dob = this.hrdata.dob.replace(/T00:00:00.000Z/, '');
        }
    };
    HrDetailsComponent.prototype.onSubmit = function () {
        console.log(this.hrdetailForm);
        console.log('update values', this.hrdetailForm);
        this.hrbaseservice.updateHrDetailsById(this.hrdetailForm.value, this.id).
            subscribe(function () {
            console.log('success');
        });
        this.saveClick.emit(this.hrdata);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrDetailsComponent.prototype, "hrdata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HrDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HrDetailsComponent.prototype, "saveClick", void 0);
    HrDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-details',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-details/hr-details.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__["a" /* HrbaseService */]])
    ], HrDetailsComponent);
    return HrDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-experience-add-details/hr-experience-add-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui very padded container segment\" >\r\n  <form class=\"ui form\" [formGroup]=\"applicantForm\">\r\n      <h4 class=\"ui dividing header\"></h4>\r\n      <div class=\"field\">\r\n        <label>Profile Title</label> \r\n        <div class=\"field\"> \r\n          <input type=\"text\"  placeholder=\"Designation\" formControlName=\"designation\" >\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Experience</label>\r\n        <div class=\"field\">\r\n          <input type=\"text\"  placeholder=\"Experience in years\" formControlName=\"totalExperience\" >\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Description</label>\r\n       <div class=\"field\">\r\n          <input type=\"text\" placeholder=\"About your project and your role\" formControlName=\"description\">\r\n        </div>\r\n      </div>\r\n      <button class=\"ui primary button\" [disabled]= \"applicantForm.invalid\" type=\"submit\" (click)=\"onSubmit()\"> Save </button>\r\n      <button class=\"ui button\" (click)=\"discardClicked()\"> Discard </button>\r\n    </form>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-experience-add-details/hr-experience-add-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrExperienceAddDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var HrExperienceAddDetailsComponent = /** @class */ (function () {
    function HrExperienceAddDetailsComponent(hrbaservice, router) {
        this.hrbaservice = hrbaservice;
        this.router = router;
        this.discardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.buildFormGroup();
        this.id = Object(__WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__["a" /* uuid */])();
    }
    HrExperienceAddDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'designation': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'totalExperience': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        };
        this.applicantForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](fg);
    };
    HrExperienceAddDetailsComponent.prototype.ngOnInit = function () {
        this.buildFormGroup();
        this.personaldata = JSON.stringify(this.hrdata);
        this.personaldata = JSON.parse(this.personaldata);
    };
    HrExperienceAddDetailsComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hrdata.experience.push(this.applicantForm.value)];
                    case 1:
                        _a.sent();
                        console.log('values exp', this.hrdata);
                        this.hrbaservice.updateHrDetailsById(this.hrdata, this.id).
                            subscribe(function (res) {
                            _this.personaldata = res;
                            _this.saveClick.emit(_this.hrdata);
                            console.log('experience updated');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HrExperienceAddDetailsComponent.prototype.discardClicked = function () {
        this.discardClick.emit(this.personaldata);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrExperienceAddDetailsComponent.prototype, "hrdata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HrExperienceAddDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HrExperienceAddDetailsComponent.prototype, "saveClick", void 0);
    HrExperienceAddDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-experience-add-details',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-experience-add-details/hr-experience-add-details.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_hrbase_service__["a" /* HrbaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HrExperienceAddDetailsComponent);
    return HrExperienceAddDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-skill/hr-skill.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui very padded container segment\" >\r\n    <form [formGroup]=\"hrSkillForm\" class=\"ui form\">\r\n      <h4 class=\"ui dividing header\"></h4>\r\n        <div class=\"field\">\r\n          <label>Skills</label>\r\n          <select class=\"ui fluid search dropdown\"  multiple=\"\" formControlName=\"skills\" [ngModel]=\"hrdata.skillValue\">\r\n            <option value=\"\">Select</option>\r\n            <option [value]='option' *ngFor=\"let option of skillsArray\">{{option}}</option>\r\n          </select>\r\n        </div>\r\n      <button class=\"ui primary button\" type=\"submit\" (click)=\"onSubmit()\"> Save </button>\r\n      <button class=\"ui button\" (click)=\"discardClicked()\"> Discard </button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-skill/hr-skill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrSkillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HrSkillComponent = /** @class */ (function () {
    function HrSkillComponent(hrbaservice, router) {
        this.hrbaservice = hrbaservice;
        this.router = router;
        this.discardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.buildFormGroup();
        this.skillsArray = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML',
            'Information Architecture', 'Javascript', 'Mechanical Engineering',
            'Meteor', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
        this.id = Object(__WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__["a" /* uuid */])();
    }
    HrSkillComponent.prototype.buildFormGroup = function () {
        var fg = {
            'skills': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        };
        this.hrSkillForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](fg);
    };
    HrSkillComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.personaldata = JSON.stringify(this.hrdata);
        this.personaldata = JSON.parse(this.personaldata);
        // console.log(this.hrdata);
    };
    HrSkillComponent.prototype.onSubmit = function () {
        var _this = this;
        this.hrdata.skillValue = this.hrSkillForm.value.skills;
        console.log(console.log('new', this.hrSkillForm.value.skills));
        this.hrbaservice.updateHrDetailsById(this.hrdata, this.id).
            subscribe(function (res) {
            _this.personaldata = res;
            console.log('skills updated');
        });
        this.saveClick.emit(this.hrdata);
    };
    HrSkillComponent.prototype.discardClicked = function () {
        this.discardClick.emit(this.personaldata);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrSkillComponent.prototype, "hrdata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HrSkillComponent.prototype, "discardClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HrSkillComponent.prototype, "saveClick", void 0);
    HrSkillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-skill',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-skill/hr-skill.component.html"),
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_hrbase_service__["a" /* HrbaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HrSkillComponent);
    return HrSkillComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("./src/app/_shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthService } from '../../services/authentication/auth.service';


var HrDashboardComponent = /** @class */ (function () {
    function HrDashboardComponent(_authService, router) {
        this._authService = _authService;
        this.router = router;
        this.isActive = [true, false, false];
        // this.id =
        if (!_authService.isLoggedIn) {
            this.router.navigateByUrl('login');
        }
        console.log('lopkln', this.hrdata, '\n');
    }
    HrDashboardComponent.prototype.ngOnInit = function () {
    };
    HrDashboardComponent.prototype.getprofile = function () {
        this.isActive = [true, false, false];
        this.router.navigateByUrl('hr/profile');
    };
    HrDashboardComponent.prototype.getpost = function () {
        this.isActive = [false, true, false];
        this.router.navigateByUrl('hr/jobs-posted');
    };
    HrDashboardComponent.prototype.addnewpost = function () {
        this.isActive = [false, false, true];
        this.router.navigateByUrl('hr/new-job');
    };
    HrDashboardComponent.prototype.getDetails = function () {
        if (!this._authService.isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        this.router.navigateByUrl('hr/profile');
        // console.log( this._authService. )
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrDashboardComponent.prototype, "hrdata", void 0);
    HrDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-dashboard',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HrDashboardComponent);
    return HrDashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrDashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_select__ = __webpack_require__("./node_modules/ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_img_max__ = __webpack_require__("./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hr_dashboard_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__features_hr_post_hr_post_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-post/hr-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__features_hr_post_hr_edit_new_post_hr_edit_new_post_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__features_hr_post_hr_post_list_summary_hr_post_list_summary_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-post/hr-post-list-summary/hr-post-list-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__features_hr_postdetails_hr_manage_applicant_hr_manage_applicant_list_hr_manage_applicant_list_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list/hr-manage-applicant-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__features_hr_postdetails_hr_manage_applicant_hr_manage_applicant_list_details_hr_manage_applicant_list_details_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant-list-details/hr-manage-applicant-list-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__features_hr_postdetails_hr_manage_applicant_hr_manage_applicant_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__features_hr_postdetails_hr_postdetails_edit_list_hr_postdetails_edit_list_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails-edit-list/hr-postdetails-edit-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__features_hr_postdetails_hr_postdetails_summary_hr_postdetails_summary_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails-summary/hr-postdetails-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__features_hr_postdetails_hr_postdetails_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__hr_dashboard_details_hr_dashboard_details_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__hr_dashboard_details_hr_details_hr_details_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-details/hr-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__hr_dashboard_details_hr_experience_add_details_hr_experience_add_details_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-experience-add-details/hr-experience-add-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__hr_header_hr_header_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/hr-header/hr-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__hr_dashboard_details_hr_skill_hr_skill_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-skill/hr-skill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_components_chat_chat_module__ = __webpack_require__("./src/app/_shared/components/chat/chat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_pipes_stringCleaner__ = __webpack_require__("./src/app/_shared/pipes/stringCleaner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__hr_dashboard_router_config__ = __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard.router-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// import { UserExperienceAddDetailsComponent } from './user-dashboard/features/user-profile/user-experience-add-details/user-experience-add-details.component';



var HrDashboardModule = /** @class */ (function () {
    function HrDashboardModule() {
    }
    HrDashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_26__shared_components_chat_chat_module__["a" /* ChatModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_img_max__["a" /* Ng2ImgMaxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_28__hr_dashboard_router_config__["a" /* hrRouterConfig */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__hr_dashboard_component__["a" /* HrDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__features_hr_post_hr_post_component__["a" /* HrPostComponent */],
                __WEBPACK_IMPORTED_MODULE_13__features_hr_post_hr_edit_new_post_hr_edit_new_post_component__["a" /* HrEditNewPostComponent */],
                __WEBPACK_IMPORTED_MODULE_14__features_hr_post_hr_post_list_summary_hr_post_list_summary_component__["a" /* HrPostListSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_15__features_hr_postdetails_hr_manage_applicant_hr_manage_applicant_list_hr_manage_applicant_list_component__["a" /* HrManageApplicantListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__features_hr_postdetails_hr_manage_applicant_hr_manage_applicant_list_details_hr_manage_applicant_list_details_component__["a" /* HrManageApplicantListDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__features_hr_postdetails_hr_manage_applicant_hr_manage_applicant_component__["a" /* HrManageApplicantComponent */],
                __WEBPACK_IMPORTED_MODULE_18__features_hr_postdetails_hr_postdetails_edit_list_hr_postdetails_edit_list_component__["a" /* HrPostdetailsEditListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__features_hr_postdetails_hr_postdetails_summary_hr_postdetails_summary_component__["a" /* HrPostdetailsSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__features_hr_postdetails_hr_postdetails_component__["a" /* HrPostdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__hr_dashboard_details_hr_dashboard_details_component__["a" /* HrDashboardDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__hr_dashboard_details_hr_details_hr_details_component__["a" /* HrDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__hr_dashboard_details_hr_experience_add_details_hr_experience_add_details_component__["a" /* HrExperienceAddDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__hr_dashboard_details_hr_skill_hr_skill_component__["a" /* HrSkillComponent */],
                __WEBPACK_IMPORTED_MODULE_24__hr_header_hr_header_component__["a" /* HrHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shared_pipes_stringCleaner__["a" /* StrinCleaner */]
            ]
        })
    ], HrDashboardModule);
    return HrDashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-dashboard.router-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hrRouterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__features_hr_post_hr_post_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-post/hr-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_hr_postdetails_hr_postdetails_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-postdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_hr_post_hr_edit_new_post_hr_edit_new_post_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-post/hr-edit-new-post/hr-edit-new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hr_dashboard_details_hr_dashboard_details_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard-details/hr-dashboard-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hr_dashboard_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/hr-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_misc_callback_callback_component__ = __webpack_require__("./src/app/_shared/components/misc/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__features_hr_postdetails_hr_manage_applicant_hr_manage_applicant_component__ = __webpack_require__("./src/app/dashboards/hr-dashboard/features/hr-postdetails/hr-manage-applicant/hr-manage-applicant.component.ts");







var hrRouterConfig = [
    { path: 'hr', redirectTo: 'hr/profile' },
    // hr home page
    {
        path: 'jobs-posted/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__features_hr_postdetails_hr_postdetails_component__["a" /* HrPostdetailsComponent */]
    },
    {
        path: 'jobs-posted/:id/manageApplicant',
        component: __WEBPACK_IMPORTED_MODULE_6__features_hr_postdetails_hr_manage_applicant_hr_manage_applicant_component__["a" /* HrManageApplicantComponent */]
    },
    {
        path: 'callback',
        component: __WEBPACK_IMPORTED_MODULE_5__shared_components_misc_callback_callback_component__["a" /* CallbackComponent */]
    },
    {
        path: 'hr', component: __WEBPACK_IMPORTED_MODULE_4__hr_dashboard_component__["a" /* HrDashboardComponent */], children: [
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_3__hr_dashboard_details_hr_dashboard_details_component__["a" /* HrDashboardDetailsComponent */]
            },
            {
                path: 'new-job',
                component: __WEBPACK_IMPORTED_MODULE_2__features_hr_post_hr_edit_new_post_hr_edit_new_post_component__["a" /* HrEditNewPostComponent */]
            },
            {
                path: 'jobs-posted',
                component: __WEBPACK_IMPORTED_MODULE_0__features_hr_post_hr_post_component__["a" /* HrPostComponent */],
                children: [
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_1__features_hr_postdetails_hr_postdetails_component__["a" /* HrPostdetailsComponent */],
                    }
                ]
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-header/hr-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n  <div class=\"ui blue inverted fixed menu navbar page grid\">\r\n    <a class=\"item\">\r\n      <i class=\"home icon\"></i>\r\n    </a>\r\n    <a class=\"item\" (click)=\"getpost()\">Posted Jobs</a>\r\n    <a class=\"item\" (click)=\"addnewpost()\">Add New Post</a>\r\n    <div class=\"right menu\">\r\n      <div class=\"ui dropdown item\">\r\n        <a>\r\n          <i class=\"user circle icon\"></i>{{hrdata?.firstName}} {{hrdata?.lastName }}</a>\r\n        <div class=\"menu\">\r\n          <div class=\"item\" (click)=\"getprofile()\">My Profile</div>\r\n          <div class=\"item\" (click)=\"changePassword()\">Change Password</div>\r\n          <div class=\"item\" (click)=\"logoutClicked()\">Log Out</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui small modal\">\r\n  <h5>Change password</h5>\r\n  <div class=\"actions\">\r\n    <div class=\"ui cancel\">\r\n      <i style=\"color:red\" class=\"close icon\"></i>\r\n    </div>\r\n  </div>\r\n  <form class='ui form' [formGroup]='currentForm'>\r\n    <div class=\"field\">\r\n      <label>Current Password</label>\r\n      <div class=\"ui left icon input\">\r\n        <input auto-focus type={{inputType}} placeholder=\"enter your current password\" formControlName=\"currentPassword\">\r\n        <i class=\"lock icon\"></i>\r\n      </div>\r\n      <div *ngIf=\"currentForm.controls['currentPassword'].touched&&(currentForm.controls['currentPassword'].dirty&&!currentForm.controls['currentPassword'].valid)\">\r\n        <p style=\"color:red\">enter valid password</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>New Password</label>\r\n      <div class=\"ui left icon input\">\r\n        <input type={{inputType}} placeholder=\"create new password\" formControlName=\"newPassword\" [(ngModel)]='password'>\r\n        <i class=\"lock icon\"></i>\r\n      </div>\r\n      <div *ngIf=\"currentForm.controls['newPassword'].touched&&(currentForm.controls['newPassword'].dirty&&!currentForm.controls['newPassword'].valid)\">\r\n        <p style=\"color:red\">create strong password</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Confirm New Password</label>\r\n      <div class=\"ui left icon input\">\r\n        <input type={{inputType}} placeholder=\"confirm your password\" formControlName=\"confirmPassword\" [(ngModel)]='compareValue'>\r\n        <i class=\"lock icon\"></i>\r\n      </div>\r\n      <a href=\"javascript:void(0)\" (click)='tooglepwd()'>show/hide</a>\r\n      <div *ngIf=\"currentForm.controls['confirmPassword'].touched&&!(password===compareValue)\">\r\n        <p style=\"color:red\">Re-enter password as above</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <button auto-focus class=\"ui tomato fluid submit button\" [disabled]=\"!currentForm.valid\" (click)=\"changePassword()\">submit</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<br>\r\n<br>\r\n<br>"

/***/ }),

/***/ "./src/app/dashboards/hr-dashboard/hr-header/hr-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("./src/app/_shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HrHeaderComponent = /** @class */ (function () {
    function HrHeaderComponent(_authService, router, userbase) {
        this._authService = _authService;
        this.router = router;
        this.userbase = userbase;
        this.inputType = 'password';
        this.isActive = [true, false, false];
        // this.id =
        if (!_authService.isLoggedIn) {
            this.router.navigateByUrl('login');
        }
        this.id = Object(__WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__["a" /* uuid */])();
        this.buildFormGroup();
    }
    HrHeaderComponent.prototype.buildFormGroup = function () {
        var fg = {
            currentPassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            newPassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
        };
        this.currentForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"](fg);
    };
    HrHeaderComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.ui.dropdown').dropdown();
        });
    };
    HrHeaderComponent.prototype.changePassword = function () {
        var _this = this;
        $('.small.modal')
            .modal({
            closable: true,
            onDeny: function () {
                return true;
            }
        })
            .modal('show');
        console.log('request to change password', this.currentForm.value);
        this.userbase.checkCurrentPassword(this.currentForm.value, this.id).subscribe(function (data) {
            console.log('data', data);
            if (data.status) {
                $('.small.modal').modal('toggle');
                _this.logoutClicked();
            }
            else {
                window.alert(data.errors.message);
                _this.buildFormGroup();
            }
        });
    };
    HrHeaderComponent.prototype.tooglepwd = function () {
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else if (this.inputType === 'text') {
            this.inputType = 'password';
        }
    };
    HrHeaderComponent.prototype.getprofile = function () {
        this.isActive = [true, false, false];
        this.router.navigateByUrl('hr/profile');
    };
    HrHeaderComponent.prototype.getpost = function () {
        this.isActive = [false, true, false];
        this.router.navigateByUrl('hr/jobs-posted');
    };
    HrHeaderComponent.prototype.addnewpost = function () {
        this.isActive = [false, false, true];
        this.router.navigateByUrl('hr/new-job');
    };
    HrHeaderComponent.prototype.getDetails = function () {
        if (!this._authService.isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        this.router.navigateByUrl('hr/profile');
        // console.log( this._authService. )
    };
    HrHeaderComponent.prototype.logoutClicked = function () {
        console.log('log out clicked');
        this._authService.logout();
        this.router.navigateByUrl('login');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HrHeaderComponent.prototype, "hrdata", void 0);
    HrHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-header',
            template: __webpack_require__("./src/app/dashboards/hr-dashboard/hr-header/hr-header.component.html"),
            styles: ['./hr-header.component.css']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_user_base_service__["a" /* UserBaseService */]])
    ], HrHeaderComponent);
    return HrHeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    // USER_SERVER: 'https://jobnut-server-dedhtvmcgh.now.sh',
    USER_SERVER: 'http://localhost:3000',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map