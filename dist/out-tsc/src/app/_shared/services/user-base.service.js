"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/operator/toPromise");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
var ErrorObservable_1 = require("rxjs/observable/ErrorObservable");
var environment_1 = require("../../../environments/environment");
var api_service_1 = require("./api.service");
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
        return this.http.post(environment_1.environment.USER_SERVER + "/api/checkMailId", emailDetails, this.post()).map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    UserBaseService.prototype.checkCurrentPassword = function (value, id) {
        var obj = {
            id: id,
            currentPassword: value.currentPassword,
            newPassword: value.newPassword
        };
        return this.http.post(environment_1.environment.USER_SERVER + "/api/changePassword", obj, this.post())
            .map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    UserBaseService.prototype.passwordUpdate = function (emailDetails, password) {
        var personalDetails = {
            email: emailDetails.userEmail,
            isHr: emailDetails.isHr,
            password: password
        };
        return this.http.post(environment_1.environment.USER_SERVER + "/api/resetPassword", personalDetails, this.post())
            .map(function (res) {
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    UserBaseService.prototype.addNewUser = function (userDetail, files) {
        var _this = this;
        return this.http.post(environment_1.environment.USER_SERVER + "/api/hr", userDetail)
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
        return this.http.get(environment_1.environment.USER_SERVER + "/api/users", {
            params: {
                'id': user
            }
        }).map(function (res) {
            console.log('res data ', res);
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
        });
    };
    UserBaseService.prototype.getUserApplyPost = function (user) {
        console.log('user_id', user);
        return this.http.get(environment_1.environment.USER_SERVER + "/api/users/appliedposts", {
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
    UserBaseService.prototype.updateUserDetailsById = function (updateDetails, user) {
        return this.http.put(environment_1.environment.USER_SERVER + "/api/users/update", updateDetails, {
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
    UserBaseService.prototype.updateUserApplyPost = function (postid, userid) {
        console.log('post_id u', postid);
        console.log('user_id u', userid);
        return this.http.put(environment_1.environment.USER_SERVER + "/api/users/apply", {}, {
            params: {
                'id': postid,
                'hrRef': userid
            }
        }).map(function (res) {
            console.log('re data', res);
            var data = res.json();
            return data || {};
        }).catch(function (error) {
            return new ErrorObservable_1.ErrorObservable(error.error);
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
                        return [4 /*yield*/, this.http.post(environment_1.environment.USER_SERVER + "/api/user/upload-profile", formData, {
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserBaseService);
    return UserBaseService;
}(api_service_1.ApiServiceService));
exports.UserBaseService = UserBaseService;
//# sourceMappingURL=user-base.service.js.map