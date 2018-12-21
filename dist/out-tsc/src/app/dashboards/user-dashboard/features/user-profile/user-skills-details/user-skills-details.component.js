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
var UserSkillsDetailsComponent = /** @class */ (function () {
    function UserSkillsDetailsComponent(_userService) {
        this._userService = _userService;
        this.discardClick = new core_1.EventEmitter();
        this.saveClick = new core_1.EventEmitter();
        this.skillsArray = ['Angular', 'ASP.Net', 'C#', 'C#.Net', 'ADO.Net', 'SQL Server', 'Spring', 'C', 'C++', 'JAVA', 'CSS', 'Graphic Design', 'Ember', 'DataBase', 'PHP', 'Full Stack Developing', 'Testing', 'HTML', 'Javascript', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
        this.buildFormGroup();
    }
    UserSkillsDetailsComponent.prototype.discardClicked = function () {
        this.discardClick.emit(JSON.parse(this.temp));
    };
    UserSkillsDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'skills': new forms_1.FormControl(null, forms_1.Validators.required),
        };
        this.applicantSkillForm = new forms_1.FormGroup(fg);
    };
    UserSkillsDetailsComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.temp = JSON.stringify(this.userdata);
    };
    UserSkillsDetailsComponent.prototype.updateUserSkill = function () {
        var _this = this;
        // console.log(console.log('new', this.applicantSkillForm.value));
        this.userdata.skillValue = this.applicantSkillForm.value.skills;
        console.log('skills are:', JSON.stringify(this.userdata.skillValue));
        this._userService.updateUserDetailsById(this.userdata, uuid_1.uuid()).subscribe(function () {
            _this.saveClick.emit(_this.userdata);
            console.log('success');
        });
        // this.skillsArray.pop();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserSkillsDetailsComponent.prototype, "userdata", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserSkillsDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserSkillsDetailsComponent.prototype, "saveClick", void 0);
    UserSkillsDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-skills-details',
            templateUrl: './user-skills-details.component.html',
        }),
        __metadata("design:paramtypes", [user_base_service_1.UserBaseService])
    ], UserSkillsDetailsComponent);
    return UserSkillsDetailsComponent;
}());
exports.UserSkillsDetailsComponent = UserSkillsDetailsComponent;
//# sourceMappingURL=user-skills-details.component.js.map