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
var citiesData = require("../../../../../_shared/data/india-cities.json");
var UserPersonalDetailsComponent = /** @class */ (function () {
    function UserPersonalDetailsComponent(userbaseservice) {
        this.userbaseservice = userbaseservice;
        this.cities = [];
        this.discardClick = new core_1.EventEmitter();
        this.saveClick = new core_1.EventEmitter();
        this.states = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'TamilNadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
        ];
        this.genders = ['Male', 'Female', 'Other'];
        this.cities = citiesData;
        this.buildFormGroup();
        // this.personaldata = this.userdata;
        // this.temp = this.userdata;
        console.log('personalData', JSON.stringify(this.userdata));
        this.id = uuid_1.uuid();
    }
    UserPersonalDetailsComponent.prototype.discardClicked = function () {
        // Object.assign(this.userdata, this.temp);
        // this.userdata = this.temp;
        console.log('Discarderd', this.temp);
        this.discardClick.emit(JSON.parse(this.temp));
    };
    UserPersonalDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'firstName': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]),
            'lastName': new forms_1.FormControl(null),
            'dob': new forms_1.FormControl(null, forms_1.Validators.required),
            'gender': new forms_1.FormControl(null, forms_1.Validators.required),
            'phone': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{10}')]),
            'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
            'state': new forms_1.FormControl(null, forms_1.Validators.required),
            'city': new forms_1.FormControl(null, forms_1.Validators.required),
            'address': new forms_1.FormControl(null, forms_1.Validators.required),
            'country': new forms_1.FormControl(null, forms_1.Validators.required),
            'skillValue': new forms_1.FormControl(null, forms_1.Validators.required),
        };
        this.applicantForm = new forms_1.FormGroup(fg);
    };
    UserPersonalDetailsComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.temp = JSON.stringify(this.userdata);
        if (this.userdata != null && this.userdata != undefined) {
            this.userdata.dob = this.userdata.dob.replace(/T00:00:00.000Z/, '');
        }
        console.log('personalDatadwkfnn kdjsnkjwnjk', JSON.stringify(this.temp));
    };
    UserPersonalDetailsComponent.prototype.onsubmit = function () {
        var _this = this;
        console.log('update values', this.applicantForm);
        this.userbaseservice.updateUserDetailsById(this.applicantForm.value, this.id).
            subscribe(function () {
            _this.saveClick.emit(_this.userdata);
            console.log('success');
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserPersonalDetailsComponent.prototype, "userdata", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserPersonalDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserPersonalDetailsComponent.prototype, "saveClick", void 0);
    UserPersonalDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-personal-details',
            templateUrl: './user-personal-details.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [user_base_service_1.UserBaseService])
    ], UserPersonalDetailsComponent);
    return UserPersonalDetailsComponent;
}());
exports.UserPersonalDetailsComponent = UserPersonalDetailsComponent;
//# sourceMappingURL=user-personal-details.component.js.map