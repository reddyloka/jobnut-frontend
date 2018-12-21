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
var ng2_img_max_1 = require("ng2-img-max");
var user_base_service_1 = require("../../../../_shared/services/user-base.service");
var notification_service_1 = require("../../../../_shared/services/notification.service");
var quotes_service_1 = require("../../../../_shared/services/quotes.service");
var uuid_1 = require("../../../../_shared/models/uuid");
var environment_1 = require("../../../../../environments/environment");
var UserProfileComponent = /** @class */ (function () {
    // c_0 = true;
    // c_1 = true;
    // c_2 = true;
    // c_3 = true;
    // c_4 = true;
    function UserProfileComponent(userbaseservice, _notif, ng2ImgMax, _qod) {
        this.userbaseservice = userbaseservice;
        this._notif = _notif;
        this.ng2ImgMax = ng2ImgMax;
        this._qod = _qod;
        this.skillActive = false;
        this.isMale = false;
        this.isFemale = false;
        this.otherGender = false;
        this.qod = 'quote of the day.';
        this.message = 'abhishek';
        // $('#chagecheck').change(this.sayHello());
        this.skillsArray = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML',
            'Information Architecture', 'Javascript', 'Mechanical Engineering',
            'Meteor', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
        this.detailsMain = true;
        this.detailsOpen = false;
        this.expMain = true;
        this.expOpen = false;
        this.expAdd = false;
        this.skillMain = true;
        this.skillOpen = false;
        this.educationMain = true;
        this.educationOpen = false;
        this.educationAdd = false;
        this.id = uuid_1.uuid();
        this.highestDegreeArray = ['B-Tech', 'B.Sc'];
        this.yearArray = ['2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998'];
        this.meme1 = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getdata();
        this.accordionClicked();
        this._qod.getQOD().then(function (q) {
            _this.qod = q;
        });
        $('.ui.modal')
            .modal();
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            debug: true,
            performance: true,
        });
    };
    UserProfileComponent.prototype.getdata = function () {
        var _this = this;
        this.userbaseservice.getUserDetailsById(this.id).
            subscribe(function (userdata) {
            console.log('maindata', userdata);
            _this.userdata = userdata;
            _this.profile_photo_for_viewing = _this.getUrl();
            _this.isMale = _this.userdata.gender.toLowerCase() === 'male';
            _this.isFemale = _this.userdata.gender.toLowerCase() === 'female';
            _this.otherGender = _this.userdata.gender.toLowerCase() === 'other';
        });
    };
    UserProfileComponent.prototype.accordionClicked = function () {
        $('.ui.accordion')
            .accordion({
            collapsible: false
        });
        $('.ui.selection.dropdown').dropdown();
        $('#select')
            .dropdown();
    };
    UserProfileComponent.prototype.EditPersonalDetails = function () {
        alert('dsjssbck');
        this.detailsOpen = true;
    };
    UserProfileComponent.prototype.closeDetails = function (event) {
        this.userdata = event;
        console.log('in discard', JSON.stringify(event));
        this.isMale = this.userdata.gender.toLowerCase() === 'male';
        this.isFemale = this.userdata.gender.toLowerCase() === 'female';
        this.otherGender = this.userdata.gender.toLowerCase() === 'other';
        this.detailsOpen = false;
        this.detailsMain = true;
    };
    UserProfileComponent.prototype.AddExperienceMore = function () {
        this.expAdd = true;
    };
    UserProfileComponent.prototype.closeAddExp = function (event) {
        this.userdata = event;
        // this.getdata()
        this.expAdd = false;
    };
    UserProfileComponent.prototype.EditSkillsDetails = function () {
        this.skillMain = false;
        this.skillOpen = true;
    };
    UserProfileComponent.prototype.closeSkill = function (event) {
        this.userdata = event;
        this.skillMain = true;
        this.skillOpen = false;
    };
    UserProfileComponent.prototype.AddEducationMore = function () {
        this.educationAdd = true;
    };
    UserProfileComponent.prototype.closeAddEducation = function (event) {
        this.userdata = event;
        this.educationAdd = false;
    };
    UserProfileComponent.prototype.getUrl = function () {
        console.log('fd', this.userdata);
        return "url(" + environment_1.environment.USER_SERVER + "/images/" + (this.userdata ? this.userdata.profile_photo : 'skj') + ")";
        // return `url()`;/
        // return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
    };
    UserProfileComponent.prototype.updateProfilePicture = function (files) {
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
                        case 0: return [4 /*yield*/, this.userbaseservice.updateProfilePicture(this.userdata, { 'profile_photo': finalImg })];
                        case 1:
                            result = _a.sent();
                            this.userdata.profile_photo = result.data;
                            this.profile_photo_for_viewing = this.getUrl();
                            this._notif.pop(result.message, 'New Profile Pic', 3000);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    UserProfileComponent.prototype.deleteExperience = function (pos) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.userdata.experience = this.userdata.experience.filter( el => el !== this.userdata.experience[pos]);
                        this.userdata.experience.splice(pos, 1);
                        console.log(pos, JSON.stringify(this.userdata.experience));
                        return [4 /*yield*/, this.userbaseservice.updateUserDetailsById(this.userdata, this.id)];
                    case 1:
                        _a.sent();
                        this._notif.pop('Successfully Deleted Experience.', 'Great!', 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProfileComponent.prototype.deleteEducation = function (pos) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.userdata.experience = this.userdata.experience.filter( el => el !== this.userdata.experience[pos]);
                        this.userdata.education.splice(pos, 1);
                        console.log(pos, JSON.stringify(this.userdata.education));
                        return [4 /*yield*/, this.userbaseservice.updateUserDetailsById(this.userdata, this.id)];
                    case 1:
                        _a.sent();
                        this._notif.pop('Successfully Deleted Education.', 'Great!', 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProfileComponent.prototype.editData = function (pos, type) {
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
                        return [4 /*yield*/, this.userbaseservice.updateUserDetailsById(this.userdata, this.id)];
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
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css']
        }),
        __metadata("design:paramtypes", [user_base_service_1.UserBaseService,
            notification_service_1.NotificationService,
            ng2_img_max_1.Ng2ImgMaxService,
            quotes_service_1.QuotesService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map