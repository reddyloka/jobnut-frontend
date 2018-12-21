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
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var hrbase_service_1 = require("../../../../../_shared/services/hrbase.service");
var user_base_service_1 = require("../../../../../_shared/services/user-base.service");
var uuid_1 = require("../../../../../_shared/models/uuid");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var UserViewAppliedPostDetailsComponent = /** @class */ (function () {
    function UserViewAppliedPostDetailsComponent(route, hrbaseservice, userbaseservice, router) {
        this.route = route;
        this.hrbaseservice = hrbaseservice;
        this.userbaseservice = userbaseservice;
        this.router = router;
        this.userStatus = new BehaviorSubject_1.BehaviorSubject({});
        this.userStatusAs = this.userStatus.asObservable().pipe();
        this.uploadNewCv = false;
        this.chatOpen = false;
        this.id = uuid_1.uuid();
    }
    UserViewAppliedPostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var hrpost_id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hrpost_id = params.get('user-post.id');
                        return [4 /*yield*/, this.hrbaseservice.getHrPostById(hrpost_id, {
                                'isHr': false,
                                'isApplicant': true
                            }).subscribe(function (res) {
                                _this.hrpost = res;
                                //  console.log('hrdata from applied',this.hrpost);
                                return _this.shortlisted();
                            })];
                    case 1:
                        _a.sent();
                        console.log('hrpost from applied', this.hrpost);
                        this.userbaseservice.getUserDetailsById(this.id).subscribe(function (res) {
                            _this.userdata = res;
                            //  console.log('userdata from applied',this.userdata);
                            return _this.userdata;
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        this.userStatus.next({
            'isHr': true,
            'isApplicant': false
        });
        this.st = {
            'isHr': true,
            'isApplicant': false
        };
    };
    UserViewAppliedPostDetailsComponent.prototype.shortlisted = function () {
        var _this = this;
        console.log('applicant', this.hrpost.applicants);
        this.hrpost.applicants.map(function (ele) {
            console.log('shortlisted', ele.isShortlisted);
            if (ele._id._id === _this.id) {
                _this.isshortlist = ele.isShortlisted;
                console.log(_this.isshortlist);
            }
        });
    };
    UserViewAppliedPostDetailsComponent.prototype.chatOpenClicked = function () {
        this.chatOpen = !this.chatOpen;
    };
    UserViewAppliedPostDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-view-applied-post-details',
            templateUrl: './user-view-applied-post-details.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            hrbase_service_1.HrbaseService,
            user_base_service_1.UserBaseService,
            router_2.Router])
    ], UserViewAppliedPostDetailsComponent);
    return UserViewAppliedPostDetailsComponent;
}());
exports.UserViewAppliedPostDetailsComponent = UserViewAppliedPostDetailsComponent;
//# sourceMappingURL=user-view-applied-post-details.component.js.map