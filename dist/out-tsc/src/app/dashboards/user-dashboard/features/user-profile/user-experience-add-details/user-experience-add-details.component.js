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
var forms_1 = require("@angular/forms");
var user_base_service_1 = require("../../../../../_shared/services/user-base.service");
var uuid_1 = require("../../../../../_shared/models/uuid");
var UserExperienceAddDetailsComponent = /** @class */ (function () {
    function UserExperienceAddDetailsComponent(_userService) {
        this._userService = _userService;
        this.discardClick = new core_1.EventEmitter();
        this.saveClick = new core_1.EventEmitter();
        this.buildFormGroup();
        this.id = uuid_1.uuid();
    }
    UserExperienceAddDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'designation': new forms_1.FormControl(null, forms_1.Validators.required),
            'totalExperience': new forms_1.FormControl(null, forms_1.Validators.required),
            'description': new forms_1.FormControl(null, forms_1.Validators.required),
        };
        this.applicantForm = new forms_1.FormGroup(fg);
    };
    UserExperienceAddDetailsComponent.prototype.ngOnInit = function () {
        this.personaldata = JSON.stringify(this.userdata);
        this.personaldata = JSON.parse(this.personaldata);
    };
    UserExperienceAddDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userdata.experience.push(this.applicantForm.value);
        this._userService.updateUserDetailsById(this.userdata, this.id).
            subscribe(function () {
            _this.saveClick.emit(_this.userdata);
        });
    };
    UserExperienceAddDetailsComponent.prototype.discardClicked = function () {
        this.discardClick.emit(this.personaldata);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserExperienceAddDetailsComponent.prototype, "userdata", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserExperienceAddDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserExperienceAddDetailsComponent.prototype, "saveClick", void 0);
    UserExperienceAddDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-experience-add-details',
            templateUrl: './user-experience-add-details.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [user_base_service_1.UserBaseService])
    ], UserExperienceAddDetailsComponent);
    return UserExperienceAddDetailsComponent;
}());
exports.UserExperienceAddDetailsComponent = UserExperienceAddDetailsComponent;
//# sourceMappingURL=user-experience-add-details.component.js.map