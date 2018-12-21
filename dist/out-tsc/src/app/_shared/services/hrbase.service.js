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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var environment_1 = require("../../../environments/environment");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
var ErrorObservable_1 = require("rxjs/observable/ErrorObservable");
var auth_service_1 = require("./auth.service");
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
        return this.http.get(environment_1.environment.USER_SERVER + "/api/posts", {
            params: {
                'token': this.token
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    HrbaseService.prototype.HrPostUpdate = function (updateDetails, user) {
        console.log('hr_id', user);
        console.log('hr update details', updateDetails);
        return this.http.put(environment_1.environment.USER_SERVER + "/api/posts/update", updateDetails, {
            params: {
                'id': user
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    HrbaseService.prototype.getHrPostById = function (hrpost_id, status) {
        console.log(' :: ', hrpost_id);
        this.setStatus(status);
        return this.http.get(environment_1.environment.USER_SERVER + "/api/posts/" + hrpost_id, {
            params: { token: this.token }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    HrbaseService.prototype.addNewPost = function (hrpostdetail, user, status) {
        // this.hrpostdetails.unshift(hrpostdetail);
        console.log('data123', hrpostdetail);
        this.setStatus(status);
        user = localStorage['id_token'];
        return this.http.put(environment_1.environment.USER_SERVER + "/api/posts/new-post", hrpostdetail, {
            params: {
                'token': this.token
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    HrbaseService.prototype.getAllUserViewPost = function () {
        return this.http.get(environment_1.environment.USER_SERVER + "/api/posts/all/post").map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    HrbaseService.prototype.getHrDetailsById = function (user) {
        console.log('user_id', user);
        return this.http.get(environment_1.environment.USER_SERVER + "/api/hrs", {
            params: {
                'id': user
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    HrbaseService.prototype.updateHrDetailsById = function (updateDetails, user) {
        console.log('hr_id', user);
        console.log('hr update details', updateDetails);
        return this.http.put(environment_1.environment.USER_SERVER + "/api/hrs/update", updateDetails, {
            params: {
                'id': user
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    HrbaseService.prototype.hrShortlist = function (data, postid, userid) {
        console.log('post_id', postid);
        return this.http.put(environment_1.environment.USER_SERVER + "/api/posts/shortlist", data, {
            params: {
                'id': postid,
                'hrRef': userid
            }
        }).map(function (res) {
            var body = res.json();
            return body.data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    HrbaseService.prototype.deleteHrPost = function (id) {
        console.log('id', id);
        return this.http.put(environment_1.environment.USER_SERVER + "/api/posts/deleteHrPost", {}, {
            params: {
                'id': id
            }
        }).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    HrbaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            auth_service_1.AuthService])
    ], HrbaseService);
    return HrbaseService;
}());
exports.HrbaseService = HrbaseService;
//# sourceMappingURL=hrbase.service.js.map