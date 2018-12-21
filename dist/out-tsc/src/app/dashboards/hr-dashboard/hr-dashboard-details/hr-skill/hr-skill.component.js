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
var router_1 = require("@angular/router");
var hrbase_service_1 = require("../../../../_shared/services/hrbase.service");
var uuid_1 = require("../../../../_shared/models/uuid");
var HrSkillComponent = /** @class */ (function () {
    function HrSkillComponent(hrbaservice, router) {
        this.hrbaservice = hrbaservice;
        this.router = router;
        this.discardClick = new core_1.EventEmitter();
        this.saveClick = new core_1.EventEmitter();
        this.buildFormGroup();
        this.skillsArray = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML',
            'Information Architecture', 'Javascript', 'Mechanical Engineering',
            'Meteor', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
        this.id = uuid_1.uuid();
    }
    HrSkillComponent.prototype.buildFormGroup = function () {
        var fg = {
            'skills': new forms_1.FormControl(null, forms_1.Validators.required),
        };
        this.hrSkillForm = new forms_1.FormGroup(fg);
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
        core_1.Input(),
        __metadata("design:type", Object)
    ], HrSkillComponent.prototype, "hrdata", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HrSkillComponent.prototype, "discardClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HrSkillComponent.prototype, "saveClick", void 0);
    HrSkillComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-skill',
            templateUrl: './hr-skill.component.html',
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [hrbase_service_1.HrbaseService, router_1.Router])
    ], HrSkillComponent);
    return HrSkillComponent;
}());
exports.HrSkillComponent = HrSkillComponent;
//# sourceMappingURL=hr-skill.component.js.map