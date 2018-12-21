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
var hrbase_service_1 = require("../../../../_shared/services/hrbase.service");
var uuid_1 = require("../../../../_shared/models/uuid");
var citiesData = require("../../../../_shared/data/india-cities.json");
var HrDetailsComponent = /** @class */ (function () {
    function HrDetailsComponent(hrbaseservice) {
        this.hrbaseservice = hrbaseservice;
        this.cities = {};
        this.discardClick = new core_1.EventEmitter();
        this.saveClick = new core_1.EventEmitter();
        this.buildFormGroup();
        this.id = uuid_1.uuid();
        this.cities = citiesData;
        this.states = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'TamilNadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
        ];
    }
    HrDetailsComponent.prototype.discardClicked = function () {
        this.discardClick.emit(JSON.parse(this.temp));
    };
    HrDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'firstName': new forms_1.FormControl(null, forms_1.Validators.required),
            'lastName': new forms_1.FormControl(null),
            'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
            'dob': new forms_1.FormControl(null, forms_1.Validators.required),
            'phone': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{10}')]),
            'industry': new forms_1.FormControl(null, forms_1.Validators.required),
            'country': new forms_1.FormControl(null, forms_1.Validators.required),
            'state': new forms_1.FormControl(null, forms_1.Validators.required),
            'city': new forms_1.FormControl(null, forms_1.Validators.required),
            'designation': new forms_1.FormControl(null, forms_1.Validators.required),
            'address': new forms_1.FormControl(null, forms_1.Validators.required),
            'jobProfile': new forms_1.FormControl(null, forms_1.Validators.required)
        };
        this.hrdetailForm = new forms_1.FormGroup(fg);
    };
    HrDetailsComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.temp = JSON.stringify(this.hrdata);
        if (this.hrdata != null && this.hrdata != undefined) {
            this.hrdata.dob = this.hrdata.dob.replace(/T00:00:00.000Z/, '');
        }
    };
    HrDetailsComponent.prototype.onSubmit = function () {
        console.log(this.hrdetailForm);
        console.log('update values', this.hrdetailForm);
        this.hrbaseservice.updateHrDetailsById(this.hrdetailForm.value, this.id).
            subscribe(function () {
            console.log('success');
        });
        this.saveClick.emit(this.hrdata);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HrDetailsComponent.prototype, "hrdata", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HrDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HrDetailsComponent.prototype, "saveClick", void 0);
    HrDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-details',
            templateUrl: './hr-details.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [hrbase_service_1.HrbaseService])
    ], HrDetailsComponent);
    return HrDetailsComponent;
}());
exports.HrDetailsComponent = HrDetailsComponent;
//# sourceMappingURL=hr-details.component.js.map