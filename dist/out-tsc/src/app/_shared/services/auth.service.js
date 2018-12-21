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
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/shareReplay");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
var jwt_service_1 = require("./jwt.service");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
// const USER_SERVER = 'https://jobnut-server-dedhtvmcgh.now.sh';
var USER_SERVER = 'http://localhost:3000';
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtservice) {
        this.http = http;
        this.jwtservice = jwtservice;
        this.userStatus = new BehaviorSubject_1.BehaviorSubject({});
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
            return Observable_1.Observable.throw(error.error.errors);
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            jwt_service_1.JwtService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map