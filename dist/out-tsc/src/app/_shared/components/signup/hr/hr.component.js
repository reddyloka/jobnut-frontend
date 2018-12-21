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
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var hrbase_1 = require("../../../models/hrbase");
var user_base_service_1 = require("../../../services/user-base.service");
var citiesData = require("../../../data/india-cities.json");
var HrComponent = /** @class */ (function () {
    function HrComponent(_userService, router, location, http) {
        this._userService = _userService;
        this.router = router;
        this.location = location;
        this.http = http;
        this.cities = {};
        this.errorMsg = 'please fill required fields';
        this.options = ['Textiles / Garments / Fashion / Accessories', 'Accounting / Finance', 'Advertising / PR / MR / Event Management', 'Agriculture / Dairy', 'Hotels / Restaurants / Airlines / Travel', 'Architecture / Interior Design', 'Automobile / Auto Anciliary / Auto Components', 'Pharma / Biotechnology / Clinical Research', 'Construction / Engineering / Cement / Metals', 'Chemicals / PetroChemical / Plastics / Rubber', 'FMCG / Foods / Beverage', 'Consumer Goods / Durables', 'Courier / Transportation / Freight/ Warehousing', 'BPO / Call Centre / ITES', 'Education / Teaching / Training', 'Recruitment', 'Media / Dotcom / Entertainment', 'Export / Import', 'Gems / Jewellery', 'IT Hardware / Networking', 'Medical / Healthcare / Hospital', 'Insurance', 'Legal', 'Industrial Products/ Heavy Machinery', 'NGO / Social Services', 'Office Equipment / Automation', 'Oil and Gas / Power / Infrastructure / Projects', 'Packaging / Printing', 'Real Estate / Property', 'Retail', 'Security / Law Enforcement', 'IT Software / Software Services', 'Semiconductors / Electronics', 'Telecom/ISP', 'Other', 'Shipping/Marine', 'Animation / Gaming', 'Banking/FinancialServices/Broking', 'Brewery/Distillery', 'Ceramics/Sanitaryware', 'Government/Defence', 'Electricals/Switchgears', 'FacilityManagement', 'fertilizers/Pesticides', 'FoodProcessing', 'HeatVentilation/AirConditioning', 'KPO/Research/Analytics', 'Mining', 'Publishing', 'Steel', 'Strategy/ManagementConsultingFirms', 'Tyres', 'WaterTreatment/WasteManagement', 'Wellness/Fitness/Sports'];
        this.states = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'TamilNadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
        ];
        this.cities = citiesData;
        this.hrDetails = hrbase_1.Hrbase.createBlankUser();
        this.buildFormGroup();
        this.profile_photo = null;
        this.userExist = false;
        this.hrDetails.isHr = true;
        this.hrDetails.status = true;
    }
    HrComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.imageFile = false;
        this.hrsignupActive = true;
    };
    HrComponent.prototype.buildFormGroup = function () {
        var fg = {
            'firstName': new forms_1.FormControl(null, forms_1.Validators.required),
            'lastName': new forms_1.FormControl(null),
            'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
            'password': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            'dob': new forms_1.FormControl(null, forms_1.Validators.required),
            'phone': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{10}')]),
            'industry': new forms_1.FormControl(null, forms_1.Validators.required),
            'country': new forms_1.FormControl(null, forms_1.Validators.required),
            'state': new forms_1.FormControl(null, forms_1.Validators.required),
            'city': new forms_1.FormControl(null, forms_1.Validators.required),
            'designation': new forms_1.FormControl(null, forms_1.Validators.required),
            'address': new forms_1.FormControl(null, forms_1.Validators.required),
            'jobProfile': new forms_1.FormControl(null, forms_1.Validators.required),
            'termsCheck': new forms_1.FormControl(null, forms_1.Validators.required)
        };
        this.signupForm = new forms_1.FormGroup(fg);
    };
    HrComponent.prototype.hrExist = function () {
        var _this = this;
        var emailObj = {
            userEmail: this.signupForm.value.email,
            isHr: true
        };
        if (this.signupForm.value.email != null && this.signupForm.value.email != undefined) {
            this._userService.checkMailId(emailObj).subscribe(function (res) {
                if (res.status) {
                    window.alert('Email address was already registered with us Please click ok to login');
                    _this.router.navigateByUrl('login');
                }
            });
        }
    };
    HrComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('hr details', this.hrDetails);
        this._userService.addNewUser(this.hrDetails, {
            profile_photo: this.profile_photo
        })
            .then(function (result) {
            console.log(result);
            _this.router.navigateByUrl('login');
        });
    };
    HrComponent.prototype.fileTypeCheck = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file_1 = event.target.files[0];
            if (file_1.type.split('/')[0] === 'image') {
                var reader = new FileReader();
                reader.onload = function (rdr) {
                    console.log('image: ', file_1.type.split('/')[0]);
                    _this.imageFile = false;
                };
                // reader reads the image uploaded
                reader.readAsDataURL(event.target.files[0]);
                this.profile_photo = event.target.files[0];
            }
            else {
                alert('Filetype Not Supported.');
                this.imageFile = true;
                // this.fileTypeCheck(event);
            }
        }
    };
    HrComponent.prototype.gethrDash = function () {
    };
    HrComponent.prototype.goBack = function () {
        this.location.back();
    };
    HrComponent = __decorate([
        core_1.Component({
            selector: 'app-hr',
            templateUrl: './hr.component.html',
            styleUrls: ['./hr.component.css']
        }),
        __metadata("design:paramtypes", [user_base_service_1.UserBaseService,
            router_1.Router,
            common_1.Location, http_1.Http])
    ], HrComponent);
    return HrComponent;
}());
exports.HrComponent = HrComponent;
//# sourceMappingURL=hr.component.js.map