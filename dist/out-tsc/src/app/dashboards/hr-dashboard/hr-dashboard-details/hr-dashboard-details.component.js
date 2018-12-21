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
var ng2_img_max_1 = require("ng2-img-max");
var user_base_service_1 = require("../../../_shared/services/user-base.service");
var auth_service_1 = require("../../../_shared/services/auth.service");
var notification_service_1 = require("../../../_shared/services/notification.service");
var hrbase_service_1 = require("../../../_shared/services/hrbase.service");
var uuid_1 = require("../../../_shared/models/uuid");
var quotes_service_1 = require("../../../_shared/services/quotes.service");
var environment_1 = require("../../../../environments/environment");
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
        this.id = uuid_1.uuid();
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
            return "url(" + environment_1.environment.USER_SERVER + "/images/" + (this.hrdata ? this.hrdata.profile_photo : 'skj') + ")";
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
        core_1.Component({
            selector: 'app-hr-dashboard-details',
            templateUrl: './hr-dashboard-details.component.html',
            styleUrls: ['./hr-dashboard-details.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService,
            user_base_service_1.UserBaseService,
            notification_service_1.NotificationService,
            ng2_img_max_1.Ng2ImgMaxService,
            hrbase_service_1.HrbaseService,
            quotes_service_1.QuotesService])
    ], HrDashboardDetailsComponent);
    return HrDashboardDetailsComponent;
}());
exports.HrDashboardDetailsComponent = HrDashboardDetailsComponent;
//# sourceMappingURL=hr-dashboard-details.component.js.map