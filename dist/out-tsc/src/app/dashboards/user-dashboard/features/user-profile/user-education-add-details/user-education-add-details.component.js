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
var UserEducationAddDetailsComponent = /** @class */ (function () {
    // discardClicked() {
    //   this.discardClick.emit(true);
    // }
    function UserEducationAddDetailsComponent(_userService) {
        this._userService = _userService;
        this.discardClick = new core_1.EventEmitter();
        this.saveClick = new core_1.EventEmitter();
        this.id = uuid_1.uuid();
        this.buildFormGroup();
        this.highestDegreeArray1 = ['B-Tech', 'B.Sc'];
        this.yearArray = ['2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998'];
    }
    UserEducationAddDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'higherDegreeValue': new forms_1.FormControl(null, forms_1.Validators.required),
            'universityName': new forms_1.FormControl(null, forms_1.Validators.required),
            'passingYearValue': new forms_1.FormControl(null, forms_1.Validators.required),
            'percentageValue': new forms_1.FormControl(null, forms_1.Validators.required)
        };
        this.applicantForm = new forms_1.FormGroup(fg);
    };
    UserEducationAddDetailsComponent.prototype.ngOnChanges = function (changes) {
        alert('fired');
    };
    UserEducationAddDetailsComponent.prototype.ngOnInit = function () {
        this.personaldata = JSON.stringify(this.userdata);
        this.personaldata = JSON.parse(this.personaldata);
    };
    UserEducationAddDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userdata.education.push(this.applicantForm.value);
        this._userService.updateUserDetailsById(this.userdata, this.id).
            subscribe(function () {
            _this.saveClick.emit(_this.userdata);
        });
        this.saveClick.emit(this.personaldata);
    };
    UserEducationAddDetailsComponent.prototype.discardClicked = function () {
        this.discardClick.emit(this.personaldata);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserEducationAddDetailsComponent.prototype, "userdata", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserEducationAddDetailsComponent.prototype, "messagec", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserEducationAddDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserEducationAddDetailsComponent.prototype, "saveClick", void 0);
    UserEducationAddDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-education-add-details',
            templateUrl: './user-education-add-details.component.html',
        }),
        __metadata("design:paramtypes", [user_base_service_1.UserBaseService])
    ], UserEducationAddDetailsComponent);
    return UserEducationAddDetailsComponent;
}());
exports.UserEducationAddDetailsComponent = UserEducationAddDetailsComponent;
//# sourceMappingURL=user-education-add-details.component.js.map