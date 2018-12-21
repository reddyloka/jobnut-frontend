webpackJsonp(["user-dashboard.module"],{

/***/ "./src/app/_shared/components/statistics/statistics.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_shared/components/statistics/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui statistics\">\r\n    <div class=\"statistic\">\r\n      <div class=\"value\">\r\n        {{placed}}\r\n      </div>\r\n      <div class=\"label\">\r\n        Already Placed!\r\n      </div>\r\n    </div>\r\n    <div class=\"statistic\">\r\n      <div class=\"text value\">\r\n        {{users | numberToWords}}\r\n        <br>\r\n        Thousand+\r\n      </div>\r\n      <div class=\"label\">\r\n        Signups\r\n      </div>\r\n    </div>\r\n    <div class=\"statistic\">\r\n      <div class=\"value\">\r\n        <i class=\"building icon\"></i> {{companies}}\r\n      </div>\r\n      <div class=\"label\">\r\n        Companies\r\n      </div>\r\n    </div>\r\n    <div class=\"statistic\">\r\n      <div class=\"value\">\r\n        <img src=\"assets/images/avatars/elliot.jpg\" class=\"ui circular inline image\"> 5\r\n      </div>\r\n      <div class=\"label\">\r\n        Team Members\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/_shared/components/statistics/statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
        this.users = 2000;
        this.placed = 100;
        this.companies = 200;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.placed++;
        }, 20000);
        setInterval(function () {
            _this.users++;
        }, 1000);
        setInterval(function () {
            _this.companies++;
        }, 1000);
    };
    StatisticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__("./src/app/_shared/components/statistics/statistics.component.html"),
            styles: [__webpack_require__("./src/app/_shared/components/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-education-add-details/user-education-add-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui very padded container segment\">\r\n  <form class=\"ui form\" [formGroup]=\"applicantForm\">\r\n\r\n    <div class=\"field\">\r\n      <label>Highest Qualification\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <select formControlName=\"higherDegreeValue\">\r\n        <option>Select your highest qualification</option>\r\n        <option *ngFor=\"let i of highestDegreeArray1\">{{i}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>University/College/school\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" placeholder=\"Institute Name\" formControlName=\"universityName\" />\r\n      <!-- <div class=\"alert alert-danger\" *ngIf=\"!applicantForm.controls['universityName'].valid && applicantForm.controls['universityName'].touched\">\r\n                          <p>Please fill required fields\r\n                            <span style=\"color:red\">*</span>\r\n                          </p>\r\n                        </div> -->\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Passing Year\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <select formControlName=\"passingYearValue\">\r\n        <option>Select</option>\r\n        <option *ngFor=\"let i of yearArray\">{{i}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Percentage\r\n        <span style=\"color:red\">*</span>\r\n      </label>\r\n      <input type=\"text\" placeholder=\"enter you percentage\" formControlName=\"percentageValue\" />\r\n    </div>\r\n    <button class=\"ui primary button\" type=\"submit\" [disabled]=\"applicantForm.invalid\" (click)=\"onSubmit()\"> Save </button>\r\n    <button class=\"ui button\" (click)=\"discardClicked()\"> Discard </button>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-education-add-details/user-education-add-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEducationAddDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEducationAddDetailsComponent = /** @class */ (function () {
    // discardClicked() {
    //   this.discardClick.emit(true);
    // }
    function UserEducationAddDetailsComponent(_userService) {
        this._userService = _userService;
        this.discardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.id = Object(__WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__["a" /* uuid */])();
        this.buildFormGroup();
        this.highestDegreeArray1 = ['B-Tech', 'B.Sc'];
        this.yearArray = ['2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998'];
    }
    UserEducationAddDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'higherDegreeValue': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'universityName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'passingYearValue': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'percentageValue': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        };
        this.applicantForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](fg);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserEducationAddDetailsComponent.prototype, "userdata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserEducationAddDetailsComponent.prototype, "messagec", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserEducationAddDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserEducationAddDetailsComponent.prototype, "saveClick", void 0);
    UserEducationAddDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-education-add-details',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-education-add-details/user-education-add-details.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__["a" /* UserBaseService */]])
    ], UserEducationAddDetailsComponent);
    return UserEducationAddDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-experience-add-details/user-experience-add-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui very padded container segment\">\r\n  <form class=\"ui form\" [formGroup]=\"applicantForm\">\r\n    <h4 class=\"ui dividing header\"></h4>\r\n    <div class=\"field\">\r\n      <label>Profile Title</label>\r\n      <div class=\"field\">\r\n        <input type=\"text\" placeholder=\"Designation\" formControlName=\"designation\" >\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Experience</label>\r\n      <div class=\"field\">\r\n        <input type=\"text\" placeholder=\"Experience in years\" formControlName=\"totalExperience\" >\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Description</label>\r\n      <div class=\"field\">\r\n        <input type=\"text\" placeholder=\"About your project and your role\" formControlName=\"description\" >\r\n      </div>\r\n    </div>\r\n    <button class=\"ui primary button\" type=\"submit\" [disabled]=\"applicantForm.invalid\" (click)=\"onSubmit()\"> Save </button>\r\n    <button class=\"ui button\" (click)=\"discardClicked()\"> Discard </button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-experience-add-details/user-experience-add-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserExperienceAddDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserExperienceAddDetailsComponent = /** @class */ (function () {
    function UserExperienceAddDetailsComponent(_userService) {
        this._userService = _userService;
        this.discardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.buildFormGroup();
        this.id = Object(__WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__["a" /* uuid */])();
    }
    UserExperienceAddDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'designation': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'totalExperience': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        };
        this.applicantForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](fg);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserExperienceAddDetailsComponent.prototype, "userdata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserExperienceAddDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserExperienceAddDetailsComponent.prototype, "saveClick", void 0);
    UserExperienceAddDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-experience-add-details',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-experience-add-details/user-experience-add-details.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__["a" /* UserBaseService */]])
    ], UserExperienceAddDetailsComponent);
    return UserExperienceAddDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-personal-details/user-personal-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui centered segment very padded\" style=\"margin-top: 4em;\">\r\n  <form class=\"ui form\" [formGroup]=\"applicantForm\">\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <label>First Name\r\n            <span style='color:red'>*</span>\r\n          </label>\r\n          <input  autofocus type=\"text\" formControlName=\"firstName\" placeholder=\"john\" [(ngModel)]=\"userdata.firstName\">\r\n          <div *ngIf=\"applicantForm.controls['firstName'].touched&&!applicantForm.controls['firstName'].valid\">\r\n            <p style='color:red'>Name need to be AtLeast 4 characters</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Last Name</label>\r\n          <input  type=\"text\" formControlName=\"lastName\" placeholder=\"Carter\" [(ngModel)]=\"userdata.lastName\">\r\n        </div>\r\n      </div>\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <label>Date Of Birth\r\n            <span style='color:red'>*</span>\r\n          </label>\r\n          <input type=\"date\" formControlName=\"dob\" placeholder=\"enter date of birth\" [(ngModel)]=\"userdata.dob\">\r\n          <div *ngIf=\"!applicantForm.controls['dob'].dirty && applicantForm.controls['dob'].touched\">\r\n            <p style='color:red'>Date of Birth required</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Gender\r\n            <span style='color:red'>*</span>\r\n          </label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"gender\" [(ngModel)]=\"userdata.gender\">\r\n            <option value=\"\">select your gender</option>\r\n            <option [value]='gender' *ngFor=\"let gender of genders\">{{gender}}</option>\r\n          </select>\r\n          <div *ngIf=\"applicantForm.controls['gender'].touched&&!applicantForm.controls['gender'].valid\">\r\n            <p style='color:red'>please fill required fields</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class='two fields'>\r\n      <div class=\"field\">\r\n        <label>Mobile Number\r\n          <span style='color:red'>*</span>\r\n        </label>\r\n        <input type=\"number\" formControlName=\"phone\" placeholder=\"please enter your contact number\" [(ngModel)]=\"userdata.phone\">\r\n        <div *ngIf=\"applicantForm.controls['phone'].touched &&!applicantForm.controls['phone'].valid\">\r\n          <p style='color:red'>enter a valid mobile number </p>\r\n        </div>\r\n      </div>\r\n        <div class=\"field\">\r\n          <label>Email\r\n            <span style='color:red'>*</span>\r\n          </label>\r\n          <input type=\"text\" formControlName=\"email\" placeholder=\"valid Email addresss\" [(ngModel)]=\"userdata.email\">\r\n          <div *ngIf=\"applicantForm.controls['email'].touched&&!applicantForm.controls['email'].valid\">\r\n            <p style='color:red'>Enter a valid email address</p>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <label>State\r\n            <span style='color:red'>*</span>\r\n          </label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"state\" [(ngModel)]=\"userdata.state\">\r\n            <option value=\"\">select your state</option>\r\n            <option [value]='state' *ngFor=\"let state of states\">{{state}}</option>\r\n          </select>\r\n          <div *ngIf=\"((userdata.state=='select your state')&&!applicantForm.controls['state'].valid)&&applicantForm.controls['state'].touched\">\r\n            <p style='color:red'>please fill required fields</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>city\r\n            <span style='color:red'>*</span>\r\n          </label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"city\" [(ngModel)]=\"userdata.city\">\r\n            <option value=''>select your city</option>\r\n            <option [value]='city' *ngFor=\"let city of cities\">{{city}}</option>\r\n          </select>\r\n          <div *ngIf=\"applicantForm.controls['city'].touched&&((userdata.city=='select your city')&&!applicantForm.controls['city'].valid)\">\r\n            <p style='color:red'>please fill required fields</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"two fields\">\r\n      <div class=\"field\">\r\n        <label>Address\r\n          <span style='color:red'>*</span>\r\n        </label>\r\n        <input type=\"text\" formControlName=\"address\" placeholder=\"enter your current Address\" [(ngModel)]=\"userdata.address\">\r\n        <div *ngIf=\"applicantForm.controls['address'].touched&&!applicantForm.controls['address'].valid\">\r\n          <p style='color:red'>please fill required fields</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Country\r\n          <span style='color:red'>*</span>\r\n        </label>\r\n        <input type=\"text\" formControlName=\"country\" placeholder=\"enter your current country\" [(ngModel)]=\"userdata.country\">\r\n        <div *ngIf=\"applicantForm.controls['country'].touched&&!applicantForm.controls['country'].valid\">\r\n          <p style='color:red'>please fill required fields</p>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    <!-- submit and discard action -->\r\n    <button class=\"ui primary button\" type=\"submit\" (click)=\"onsubmit()\"> Save </button>\r\n    <button class=\"ui button\" (click)=\"discardClicked()\"> Discard </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-personal-details/user-personal-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPersonalDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_india_cities_json__ = __webpack_require__("./src/app/_shared/data/india-cities.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_india_cities_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__shared_data_india_cities_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserPersonalDetailsComponent = /** @class */ (function () {
    function UserPersonalDetailsComponent(userbaseservice) {
        this.userbaseservice = userbaseservice;
        this.cities = [];
        this.discardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.states = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'TamilNadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
        ];
        this.genders = ['Male', 'Female', 'Other'];
        this.cities = __WEBPACK_IMPORTED_MODULE_4__shared_data_india_cities_json__;
        this.buildFormGroup();
        // this.personaldata = this.userdata;
        // this.temp = this.userdata;
        console.log('personalData', JSON.stringify(this.userdata));
        this.id = Object(__WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__["a" /* uuid */])();
    }
    UserPersonalDetailsComponent.prototype.discardClicked = function () {
        // Object.assign(this.userdata, this.temp);
        // this.userdata = this.temp;
        console.log('Discarderd', this.temp);
        this.discardClick.emit(JSON.parse(this.temp));
    };
    UserPersonalDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'firstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)]),
            'lastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            'dob': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'gender': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]{10}')]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
            'state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'skillValue': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        };
        this.applicantForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](fg);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserPersonalDetailsComponent.prototype, "userdata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserPersonalDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserPersonalDetailsComponent.prototype, "saveClick", void 0);
    UserPersonalDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-personal-details',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-personal-details/user-personal-details.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__["a" /* UserBaseService */]])
    ], UserPersonalDetailsComponent);
    return UserPersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin: 10px\r\n}"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-header [userdata]=\"userdata\"></app-user-header>\r\n<div class=\"ui grid centered\" style=\"margin-top: 2%;\">\r\n  <div class=\"four wide ui segment column grid\" style=\"padding-left: 0%; padding-right: 20px;\">\r\n      \r\n    <div class=\"row centered\">\r\n      <div class=\"avatar-upload\">\r\n        <div class=\"avatar-edit\">\r\n          <input type=\"file\" id=\"imageUpload\" accept=\".png, .jpg, .jpeg\" (change)=\"updateProfilePicture($event.target.files)\" />\r\n          \r\n          <label for=\"imageUpload\"></label>\r\n        </div>\r\n        <div class=\"avatar-preview\">\r\n          <!-- <div  [ngStyle]=\"{background: 'url(http://localhost:3000/images/' + ')'}\"></div> -->\r\n          <div id=\"imagePreview\" [ngStyle]=\"{'background-image': profile_photo_for_viewing}\"></div>\r\n          <!-- <div id=\"imagePreview\" [ngStyle]=\"{background: 'url(http://localhost:3000/images/' + hrdata.profile_photo + ')'\"></div>\r\n                       -->\r\n          <!-- {{\"url(http://localhost:3000/images/\" + {{hrdata.profile_photo}} + \")\"}}> -->\r\n\r\n        </div>\r\n        <div class=\"container ui\">\r\n          <a class=\"fr\" (click)=\"EditPersonalDetails()\" style=\"float: right;\">Edit</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row centered\">\r\n      <div class=\"segment fluid ui\" style=\"width: 100%; border-color: tomato\">\r\n        {{userdata?.firstName}} {{userdata?.lastName }}\r\n      </div>\r\n      <div class=\"ui container fluid\">\r\n        <a class=\"ui teal image label\">\r\n          <i class=\"at icon\"></i>\r\n          <div class=\"detail\">{{userdata?.email}}</div>\r\n        </a>\r\n      </div>\r\n      <div class=\"ui container compact\" style=\"width: fit-content; margin-top: 1em;\">\r\n        <div class=\"ui celled list\">\r\n          <div class=\"item\">\r\n            <i class=\"mobile icon\"></i>\r\n            {{userdata?.phone}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <i class=\"birthday cake icon\"></i>\r\n            {{userdata?.dob | date: 'dd/MM/yyyy'}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <i class=\"home icon\"></i>\r\n            {{userdata?.address}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <i class=\"location arrow icon\"></i>\r\n            {{userdata?.city}},{{userdata?.state}},{{userdata?.country}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <i [ngClass]=\"{mars: isMale, venus: isFemale, icon: true}\"></i>\r\n            {{userdata?.gender}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- <div *ngIf=\"detailsMain\">\r\n      </div> -->\r\n      <!-- <div  class=\"long modal\" > -->\r\n      <!-- <app-user-personal-details (discardClick)=\"closeDetails()\" (saveClick)=\"closeDetails()\" [userdata]=\"userdata\"></app-user-personal-details> -->\r\n      <!-- <div *ngIf=\"detailsOpen\"></div> -->\r\n      <!-- </div> -->\r\n\r\n\r\n    </div>\r\n    <div class=\"row centered\">\r\n    </div>\r\n  </div>\r\n\r\n  <!-- '/../src/assets/images/shared/cartoon.png' -->\r\n  <!-- <div class=\"eleven wide ui segment centered column grid\" [ngStyle]=\"{'background-size': !skillActive?'0vh' :'25vh'}\" style=\"margin: 0 0 1em 1em;float: right;background-image: url('assets/images/shared/cartoon.png');background-repeat:  no-repeat;background-position: 26em 28em;background-blend-mode: darken;transition-duration: 800ms;\"> -->\r\n  <div class=\"eleven wide ui segment centered column grid\" style=\"margin: 0 0 1em 1em;overflow: hidden;scroll-behavior: unset\">\r\n    <div class=\"ui styled fluid accordion\">\r\n      <!-- Experiences -->\r\n      <div class=\"active title\" (click)=\"skillActive = false;\">\r\n        <a class=\"fr float right\" (click)=\"AddExperienceMore()\">Add more Experiences</a>\r\n        <i class=\"dropdown icon\"></i>\r\n        Experinces\r\n      </div>\r\n      <div class=\"active content\">\r\n        <div class='panel panel-default' style=\"overflow: hidden;\">\r\n          <div class=\"ui long panel-body\" style=\"overflow-y: auto;margin: 0em -1em;padding: 1em 3em;height: 22em;\">\r\n\r\n            <div *ngFor=\"let experience of userdata?.experience; let i = index\">\r\n              <a class=\"ui orange left ribbon label\" (click)=\"editData(i, $event.target.innerText)\">\r\n                    {{ meme == i ? 'Save' : 'Edit'}}\r\n                   </a>\r\n                   <div *ngIf=\"expMain\">\r\n                      <a class=\"ui orange right ribbon label\" (click)=\"deleteExperience(i);\">Delete</a>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                          <h5>Profile Title</h5>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"ui input\">\r\n                                <input *ngIf=\"meme == i\" type=\"text\" [(ngModel)]=\"userdata.experience[i].designation\">\r\n                              </div>\r\n                              <span *ngIf=\"!(meme == i)\">{{userdata.experience[i]?.designation}}</span>\r\n                            </div>\r\n                        </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                          <h5>Experience</h5>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"ui input\">\r\n                                <input *ngIf=\"meme == i\" type=\"text\" [(ngModel)]=\"userdata.experience[i].totalExperience\">\r\n                              </div>\r\n                              <span *ngIf=\"!(meme == i)\">{{userdata.experience[i]?.totalExperience}}</span>\r\n                            </div>\r\n                        </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                          <h5>Description</h5>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"ui input\">\r\n                                <input *ngIf=\"meme == i\" type=\"text\" [(ngModel)]=\"userdata?.experience[i].description\">\r\n                              </div>\r\n                              <span *ngIf=\"!(meme == i)\">{{userdata?.experience[i].description}}</span>\r\n                            </div>\r\n                        </div>\r\n      \r\n                      </div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Experiences -->\r\n      <!-- Educations -->\r\n      <div class=\"title\" (click)=\"skillActive = false;\">\r\n        <a class=\"fr\" (click)=\"AddEducationMore()\">Add more Qualification</a>\r\n        <i class=\"dropdown icon\"></i>\r\n        Education\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class='panel panel-default'>\r\n          <div class=\"panel-body\">\r\n            <div *ngFor=\"let education of userdata?.education; let i = index;\">\r\n              <div *ngIf=\"educationMain\" class=\"\">\r\n                <!-- <a class=\"fr\" (click)=\"EditEducationDetails()\">Edit</a> -->\r\n                <a class=\"ui orange left ribbon label\" (click)=\"editData(i, $event.target.innerText)\">\r\n                  {{ meme == i ? 'Save' : 'Edit'}}\r\n                </a>\r\n                <a class=\"ui orange right ribbon label\" (click)=\"deleteEducation(i);\" style=\"margin: 0px -52px \">Delete</a>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-2\">\r\n                    <h5>Highest Qualification</h5>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-md-offset-2\">\r\n                    <div class=\"ui input\">\r\n                        <select *ngIf=\"meme == i\" class=\"ui search dropdown\"  [(ngModel)]=\"userdata.education[i].higherDegreeValue\">\r\n                            <option>Select your highest qualification</option>\r\n                            <option *ngFor=\"let degree of highestDegreeArray\">{{degree}}</option>\r\n                          </select>\r\n                    </div>\r\n                    <span *ngIf=\"!(meme == i)\">{{userdata?.education[i].higherDegreeValue}}</span>\r\n                    <!-- <span>{{userdata?.education[i].higherDegreeValue}}</span> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-2\">\r\n                    <h5>University/College/School</h5>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-md-offset-2\">\r\n                    <div class=\"ui input\">\r\n                      <input *ngIf=\"meme == i\" type=\"text\" [(ngModel)]=\"userdata?.education[i].universityName\">\r\n                    </div>\r\n                    <span *ngIf=\"!(meme == i)\">{{userdata?.education[i].universityName}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-2\">\r\n                    <h5>Passing Year</h5>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-md-offset-2\">\r\n                      <!-- <select name=\"gender\" > -->\r\n                      <!-- </select> -->\r\n                      <select *ngIf=\"meme == i\" class=\"ui search dropdown\" [(ngModel)]=\"userdata?.education[i].passingYearValue\">\r\n                        <option>Select your option</option>\r\n                        <option [value]='year' *ngFor=\"let year of yearArray\">{{year}}</option>\r\n                      </select>\r\n                  <span *ngIf=\"!(meme==i)\">{{userdata?.education[i].passingYearValue}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-2\">\r\n                    <h5>Percentage</h5>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-md-offset-2\">\r\n                    <div class=\"ui input\">\r\n                      <input *ngIf=\"meme==i\" type=\"text\" [(ngModel)]=\"userdata?.education[i].percentageValue\">\r\n                    </div>\r\n                    <span *ngIf=\"!(meme==i)\">{{userdata?.education[i].percentageValue}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n           \r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Educations -->\r\n      <!-- Skills -->\r\n      <div class=\"title\" (click)=\"skillActive = true;\">\r\n        <a class=\"fr\" (click)=\"EditSkillsDetails()\">Edit</a>\r\n        <i class=\"dropdown icon\"></i>\r\n        Skills\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class='panel panel-default'>\r\n          <div class=\"panel-body\">\r\n            <a class=\"ui orange left ribbon label\" (click)=\"editData(meme1,$event.target.innerText)\">\r\n              {{ meme1? 'Save' : 'Edit'}}\r\n            </a>\r\n            <div *ngIf=\"skillMain\">\r\n              <span *ngIf=\"!meme1\">{{userdata?.skillValue}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Skills -->\r\n    </div>\r\n    <div *ngIf=\"skillActive\" [ngClass]=\"{'animated': true,'fadeInDown': skillActive }\" class=\"ui info fluid message grid centered\"\r\n      style=\"margin:8em 14em;position: absolute;\">\r\n      {{qod}}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<hr>\r\n\r\n<div *ngIf=\"detailsOpen || skillOpen || expAdd || educationAdd \" [ngClass]=\"{'ui': true, 'dimmer': true, 'modals': true, 'page': true, 'top': true, 'aligned': true, 'transition': true, 'visible': detailsOpen || skillOpen || expAdd || educationAdd , 'active': detailsOpen || skillOpen || expAdd || educationAdd }\"\r\n  style=\"display: flex !important;\">\r\n  <app-user-personal-details *ngIf=\"detailsOpen\" (discardClick)=\"closeDetails($event)\" (saveClick)=\"closeDetails($event)\" [userdata]=\"userdata\"></app-user-personal-details>\r\n  <app-user-skills-details *ngIf=\"skillOpen\" (discardClick)=\"closeSkill($event)\" (saveClick)=\"closeSkill($event)\" [userdata]=\"userdata\"></app-user-skills-details>\r\n  <app-user-experience-add-details *ngIf=\"expAdd\" (discardClick)=\"closeAddExp($event)\" (saveClick)=\"closeAddExp($event)\" [userdata]=\"userdata\"></app-user-experience-add-details>\r\n  <app-user-education-add-details *ngIf=\"educationAdd\" (discardClick)=\"closeAddEducation($event)\" (saveClick)=\"closeAddEducation($event)\" [userdata]=\"userdata\"></app-user-education-add-details>\r\n</div>\r\n \r\n"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_img_max__ = __webpack_require__("./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_notification_service__ = __webpack_require__("./src/app/_shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_quotes_service__ = __webpack_require__("./src/app/_shared/services/quotes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
        this.id = Object(__WEBPACK_IMPORTED_MODULE_5__shared_models_uuid__["a" /* uuid */])();
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
        return "url(" + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_SERVER + "/images/" + (this.userdata ? this.userdata.profile_photo : 'skj') + ")";
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__["a" /* UserBaseService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_img_max__["b" /* Ng2ImgMaxService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_quotes_service__["a" /* QuotesService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-skills-details/user-skills-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui very padded container segment\" >\r\n  <form [formGroup]=\"applicantSkillForm\" class=\"ui form\">\r\n    <h4 class=\"ui dividing header\"></h4>\r\n     <div class=\"field\">\r\n              <label>Skills</label>\r\n       <select class=\"ui fluid search dropdown\" [(ngModel)]=\"userdata.skillValue\" multiple=\"\" formControlName=\"skills\">\r\n          <option value=\"\">Select</option>\r\n          <option  [value]='option' *ngFor=\"let option of skillsArray\">{{option}}</option>\r\n        </select>\r\n    </div>\r\n    <button class=\"ui primary button\" type=\"submit\" (click)=\"updateUserSkill()\"> Save </button>\r\n    <button class=\"ui button\" (click)=\"discardClicked()\"> Discard </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-profile/user-skills-details/user-skills-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSkillsDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSkillsDetailsComponent = /** @class */ (function () {
    function UserSkillsDetailsComponent(_userService) {
        this._userService = _userService;
        this.discardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.skillsArray = ['Angular', 'ASP.Net', 'C#', 'C#.Net', 'ADO.Net', 'SQL Server', 'Spring', 'C', 'C++', 'JAVA', 'CSS', 'Graphic Design', 'Ember', 'DataBase', 'PHP', 'Full Stack Developing', 'Testing', 'HTML', 'Javascript', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
        this.buildFormGroup();
    }
    UserSkillsDetailsComponent.prototype.discardClicked = function () {
        this.discardClick.emit(JSON.parse(this.temp));
    };
    UserSkillsDetailsComponent.prototype.buildFormGroup = function () {
        var fg = {
            'skills': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        };
        this.applicantSkillForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](fg);
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
        this._userService.updateUserDetailsById(this.userdata, Object(__WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__["a" /* uuid */])()).subscribe(function () {
            _this.saveClick.emit(_this.userdata);
            console.log('success');
        });
        // this.skillsArray.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserSkillsDetailsComponent.prototype, "userdata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserSkillsDetailsComponent.prototype, "discardClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserSkillsDetailsComponent.prototype, "saveClick", void 0);
    UserSkillsDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-skills-details',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-skills-details/user-skills-details.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__["a" /* UserBaseService */]])
    ], UserSkillsDetailsComponent);
    return UserSkillsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-header [userdata]=\"userdata\"></app-user-header>\r\n<br>\r\n<div class=\"ui grid\">\r\n  <div class=\"two wide column\" style=\"background-color: transparent; height:750px\">\r\n    <!-- <div style=\"margin-top: 30px; background-color: lightbalck\">\r\n      <a href=\"\">\r\n        <h4 class=\"nav\">Hr Profile View</h4>\r\n      </a>\r\n    </div>\r\n    <div style=\"margin-top: 30px; background-color: lightbalck\">\r\n      <a href=\"\">\r\n        <h4 class=\"nav\">Chating</h4>\r\n      </a>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"eight wide column\">\r\n    <app-user-view-post-deatilssummary [hrpost]=hrpost> </app-user-view-post-deatilssummary>\r\n  </div>\r\n  <div class=\"six wide column\">\r\n\r\n      <div class=\"ui card\">\r\n          <div class=\"content\">\r\n            <div class=\"header\">Status of Selection</div>\r\n          </div>\r\n          <div class=\"content\">\r\n            <h4 class=\"ui sub header\">Activity</h4>\r\n            <div class=\"ui small feed\">\r\n              <div class=\"event\">\r\n                <div class=\"content\">\r\n                  <div class=\"summary\">\r\n                     <p *ngIf=\"isshortlist\">Great Job! 👍</p>\r\n                     <p *ngIf=\"!isshortlist\">Have Patience 😉</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"event\">\r\n                <div class=\"content\">\r\n                  <div class=\"summary\">\r\n                     <p *ngIf=\"isshortlist\">Congratulations You have Been Selected For the Job</p>\r\n                     <p *ngIf=\"!isshortlist\">Wait untitl the HR checkcs your profille. Best of Luck</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"event\">\r\n                <div class=\"content\">\r\n                  <div class=\"summary\">\r\n                     <p *ngIf=\"isshortlist\">Now you can connect to the hr</p>\r\n                     <p *ngIf=\"!isshortlist\">You can check your invites by clicking chat invites</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"extra content\">\r\n              <button class=\"ui fluid\" [disabled]=\"!isshortlist\" class=\"btn btn-info\" (click)=\"chatOpenClicked()\" [innerText]=\" chatOpen ? 'Close Chating' : 'Start Chating' \"></button>\r\n              <input type=\"button\" [ngClass]=\"{green: isshortlist, red: !isshortlist}\" class=\"ui button basic\"  [value]=\"isshortlist ? 'Shortlisted' : 'pending...'\">\r\n          </div>\r\n        </div>\r\n      <div *ngIf=\"chatOpen\" class=\"ui sticky fixed\" style=\"bottom: 0px;\">\r\n          <app-chat [initiator]=\"this.userdata\" [recepient]=\"this.hrpost.hrRef\"></app-chat>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserViewAppliedPostDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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







var UserViewAppliedPostDetailsComponent = /** @class */ (function () {
    function UserViewAppliedPostDetailsComponent(route, hrbaseservice, userbaseservice, router) {
        this.route = route;
        this.hrbaseservice = hrbaseservice;
        this.userbaseservice = userbaseservice;
        this.router = router;
        this.userStatus = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.userStatusAs = this.userStatus.asObservable().pipe();
        this.uploadNewCv = false;
        this.chatOpen = false;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__["a" /* uuid */])();
    }
    UserViewAppliedPostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var hrpost_id;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-view-applied-post-details',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__["a" /* HrbaseService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_user_base_service__["a" /* UserBaseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserViewAppliedPostDetailsComponent);
    return UserViewAppliedPostDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-header [userdata]=\"userdata\"></app-user-header>\r\n<br>\r\n<br>\r\n<div class=\"ui grid\" id=\"viewposts\">\r\n  <div class=\"two wide column\"></div>\r\n  <div class=\"eight wide column\">\r\n    <h2>Applied jobs of you</h2>\r\n    <div *ngIf='!loadPage && !loadError'>\r\n      <h4>loading...... please wait</h4>\r\n      <span>\r\n        <img src=\"assets/loader.svg\" height=\"64\" alt=\"Nice green circle\" />\r\n      </span>\r\n    </div>\r\n    <h4 *ngIf='loadPage && !loadError && (!hrpost || !hrpost.length)'>\r\n      no Recommended jobs for you Present\r\n    </h4>\r\n    <div *ngIf=\"loadError\">\r\n      <div class=\"alert alert-danger\">\r\n        {{error_text}}\r\n      </div>\r\n    </div>\r\n    <app-user-view-post *ngFor=\"let hrpost of hrpost | paginate: { itemsPerPage: 2, currentPage: p }\" [hrpost]=\"hrpost\" (userclick)=\"routeronclicked($event)\"></app-user-view-post>\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserViewAppliedPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserViewAppliedPostComponent = /** @class */ (function () {
    function UserViewAppliedPostComponent(userbaseservice, router, route) {
        this.userbaseservice = userbaseservice;
        this.router = router;
        this.route = route;
        this.loadPage = false;
        this.loadError = false;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_3__shared_models_uuid__["a" /* uuid */])();
    }
    UserViewAppliedPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userbaseservice.getUserDetailsById(this.id).subscribe(function (res) {
            _this.userdata = res;
            console.log('userdata from applied', _this.userdata);
            return _this.userdata;
        });
        this.userbaseservice.getUserApplyPost(this.id).
            subscribe(function (hrpost) {
            console.log('applied data', hrpost);
            _this.hrpost = hrpost;
            _this.loadPage = true;
        });
        // .catch((error=>{
        //   this.loadError = true;
        //  this.error_text = "Get error on server request ";
        //  }));
        this.p = 1;
    };
    UserViewAppliedPostComponent.prototype.routeronclicked = function (hrpost_id) {
        // this.router.navigateByUrl('user-profile/applied-job/' + hrpost_id);
        this.router.navigate([hrpost_id], { relativeTo: this.route });
        // console.log(hrpost_id);
    };
    UserViewAppliedPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-view-applied-post',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_base_service__["a" /* UserBaseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserViewAppliedPostComponent);
    return UserViewAppliedPostComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-component.css":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans|Oswald|Roboto\");\r\n\r\n\r\n#card {\r\n  width: 54vw;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  margin-bottom: 1em;\r\n  -webkit-box-shadow: 0 25px 40px -20px rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 25px 40px -20px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n\r\n#card #content {\r\n  font-family: \"Roboto\", sans-serif;\r\n  padding: 40px 60px 0 0;\r\n  width: 40vw;\r\n  height: 100%;\r\n  margin: 2em;\r\n  text-align: start;\r\n  font-size: xx-small;\r\n}\r\n\r\n\r\n#card #content span {\r\n  color: #A5A5A5;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n#card #content h1 {\r\n  color: #FA3E4B;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  margin-top: 20px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n\r\n#card #content p {\r\n  opacity: 0.8;\r\n  color: #FA3E4B;\r\n  font-size: 14px;\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n  line-height: 18px;\r\n  font-family: \"Roboto\", sans-serif;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n\r\n#card #content h3 {\r\n  color: #A5A5A5;\r\n  font-size: 12px;\r\n  margin-top: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n#card #content #color-bar {\r\n  margin-top: 20px;\r\n  width: 200px;\r\n  height: 8px;\r\n  border-radius: 90px;\r\n  background: -webkit-gradient(linear, left top, right top, color-stop(10%, #FF4353), to(#E52A2A));\r\n  background: linear-gradient(to right, #FF4353 10%, #E52A2A 100%);\r\n}\r\n\r\n\r\n#card #content .detail {\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n#card #content .detail h2 {\r\n  color: red;\r\n  font-weight: 600;\r\n  opacity: 0.6;\r\n  font-size: 15px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n#card #content .detail .circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  float: left;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n  margin-right: 20px;\r\n}\r\n\r\n\r\n#card #content .detail .circle .left,\r\n#card #content .detail .circle .right {\r\n  width: 50%;\r\n  height: 100%;\r\n  float: left;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-deatilssummary/user-view-post-deatilssummary.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<table class=\"ui fixed table\">\r\n  <thead class=\"ui centered segment\" style=\"\r\n        border: 1px #000;\r\n        display:  block;\r\n        text-align:  center;\r\n        width:  50vw;\r\n        margin:  2px -12px;\r\n        box-shadow: 2px 7px 7px -6px dimgrey;\r\n        background-color: ghostwhite;\r\n        border-radius: .4em .4em;\r\n    \">Job Details</thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>Job Title:</td>\r\n      <td>{{hrpost?.title}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Job Description:</td>\r\n      <td>{{hrpost?.description}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Company Name:</td>\r\n      <td>{{hrpost?.companyname}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Selection Procedure:</td>\r\n      <td>{{hrpost?.selectionProcedure}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>StartDate To Register:</td>\r\n      <td>{{hrpost?.startdate}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>EndDate To Register:</td>\r\n      <td>{{hrpost?.enddate}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Skills Required:</td>\r\n      <td>{{hrpost?.skills}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Job Location:</td>\r\n      <td>{{hrpost?.location}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Salary:</td>\r\n      <td>{{hrpost?.salary}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Experinece Required:</td>\r\n      <td>{{hrpost?.experinece}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Date of Joining:</td>\r\n      <td>{{hrpost?.dateOfJoining}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Extra Requirement:</td>\r\n      <td>{{hrpost?.extraRequirement || 'Not Provided'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>No Of Job Openings:</td>\r\n      <td>{{hrpost?.noOfJobOpenings || 'Not Provided'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Company Url:</td>\r\n      <td>\r\n        <a target=\"blank\" href=\"http://{{hrpost?.CompanyUrl}}\">{{hrpost?.CompanyUrl}}</a>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>Bond Details:</td>\r\n      <td>{{hrpost?.bondDetails || 'Not Provided'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Reporting Venue:</td>\r\n      <td>{{hrpost?.ReportingVenue || 'Not Provided'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Resource Person Contact:</td>\r\n      <td>{{hrpost?.ResourcePersonContact || 'Not Provided'}}</td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-deatilssummary/user-view-post-deatilssummary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserViewPostDeatilssummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserViewPostDeatilssummaryComponent = /** @class */ (function () {
    function UserViewPostDeatilssummaryComponent() {
        console.log('SSSSSSSSSSSSS', this.hrpost);
    }
    UserViewPostDeatilssummaryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserViewPostDeatilssummaryComponent.prototype, "hrpost", void 0);
    UserViewPostDeatilssummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-view-post-deatilssummary',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-deatilssummary/user-view-post-deatilssummary.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], UserViewPostDeatilssummaryComponent);
    return UserViewPostDeatilssummaryComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component.css":
/***/ (function(module, exports) {

module.exports = ".nav{\r\n    color: azure;\r\n    font-size: 20px;\r\n    padding-left: 10px\r\n}"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-header [userdata]=\"userdata\"></app-user-header>\r\n<br>\r\n<div class=\"ui grid\">\r\n  <div class=\"three wide column\">\r\n    \r\n    </div>\r\n  <div class=\"eight wide column\">\r\n      <app-user-view-post-deatilssummary [hrpost]=hrpost> </app-user-view-post-deatilssummary> \r\n  </div>\r\n  <div class=\"five wide column\" >\r\n    <div class=\"ui grid\">\r\n      <div class=\"eight wide column\">\r\n          <button class=\"btn btn-primary\" [disabled]=\"isApply\" target=\"_self\" data-backdrop=\"static\" data-target=\"#Apply_modal\" data-toggle=\"modal\">Apply</button>\r\n          <div class=\"modal fade\" id=\"Apply_modal\">\r\n              <div class=\"modal-dialog\">\r\n              <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n              <button class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n              <h3 style=\"color:black;\">Apply To Job</h3>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                  <form>\r\n                      <div class=\"form-group\">\r\n                         <input type=\"radio\" value=\"before CV\" (click)=\"uploadOld()\"  name=\"upload\"> <label>Submit Old CV</label> \r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <input type=\"radio\" value=\"before CV\" (click)=\"uploadNew()\" name=\"upload\" > <label>Upload New CV</label> \r\n                      </div>\r\n                      <div class=\"form-group\" *ngIf=\"uploadNewCv\" >\r\n                          <input type=\"file\"  >\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <button class=\"btn btn-success\"  (click)=\"applyToPost()\">Apply</button>\r\n                      </div>\r\n                    </form>\r\n              </div>\r\n              <div class=\"modal-header\">\r\n              <div class=\"text-right\">\r\n              <button class=\"btn btn-danger\" data-dismiss=\"modal\">close</button>\r\n              </div>\r\n              </div>\r\n              </div>\r\n              </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserViewPostDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserViewPostDetailsComponent = /** @class */ (function () {
    function UserViewPostDetailsComponent(route, hrbaseservice, userbaseservice, router) {
        this.route = route;
        this.hrbaseservice = hrbaseservice;
        this.userbaseservice = userbaseservice;
        this.router = router;
        this.uploadNewCv = false;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__["a" /* uuid */])();
        this.isApply = false;
    }
    UserViewPostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var hrpost_id = params.get('user-post.id');
            _this.hrbaseservice.getHrPostById(hrpost_id, {
                'isHr': false,
                'isApplicant': true
            }).
                subscribe(function (hrpost) {
                _this.hrpost = hrpost;
                _this.shortlisted();
            });
        });
        this.userbaseservice.getUserDetailsById(this.id).
            subscribe(function (userdata) {
            _this.userdata = userdata;
        });
    };
    UserViewPostDetailsComponent.prototype.uploadNew = function () {
        this.uploadNewCv = true;
    };
    UserViewPostDetailsComponent.prototype.uploadOld = function () {
        this.uploadNewCv = false;
    };
    UserViewPostDetailsComponent.prototype.shortlisted = function () {
        var _this = this;
        console.log('shhhhhhhooooooooo', this.hrpost.applicants);
        this.hrpost.applicants.map(function (ele) {
            if (ele._id && (_this.id === ele._id._id)) {
                console.log(ele._id._id);
                _this.isApply = true;
                console.log(_this.isApply);
            }
        });
    };
    UserViewPostDetailsComponent.prototype.applyToPost = function () {
        var _this = this;
        console.log('post_id', this.hrpost._id);
        console.log('id', this.id);
        this.userbaseservice.updateUserApplyPost(this.hrpost._id, this.id).
            subscribe(function () {
            console.log('successfully applied and notified');
            _this.router.navigateByUrl('user-view-post');
        });
    };
    UserViewPostDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-view-post-details',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__["a" /* HrbaseService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_user_base_service__["a" /* UserBaseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserViewPostDetailsComponent);
    return UserViewPostDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div id=\"card\">\r\n    <button class=\"btn btn-primary\" (click)='userclicked()' style=\"\r\n    position: relative;\r\n    top: 11%;\r\n    right:  4%;\r\n    float:  right;\r\n  \">More Details</button>\r\n  <div id=\"content\"><span><i class='building icon'></i>{{(hrpost?.companyname || 'NAN') | titlecase}}</span>\r\n    <h1>{{(hrpost?.title || 'NAN') | titlecase}}</h1>\r\n    <span class=\"glyphicon glyphicon-map-marker\"></span> {{(hrpost?.location || 'NAN')| titlecase}}\r\n    <p>Purchase fuel at petrol pumps & service stations and claim reimbursements using Optima.</p>\r\n    <h3>Skills Required: <span>{{hrpost?.skills || 'NAN'}}</span></h3>\r\n    <div id=\"color-bar\"></div>\r\n    <div class=\"detail\">\r\n      <div class=\"circle\">\r\n        <div class=\"left\" style=\"background:#FA5964;\"></div>\r\n        <div class=\"right\" style=\"background:#FA3E4B;\"></div>\r\n      </div>\r\n      <h2>Applicants Registered</h2><span id=\"hex\">{{hrpost?.applicants.length || 0}}</span>\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserViewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserViewPostComponent = /** @class */ (function () {
    function UserViewPostComponent() {
        this.userclick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserViewPostComponent.prototype.userclicked = function () {
        this.userclick.emit(this.hrpost._id);
    };
    UserViewPostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserViewPostComponent.prototype, "hrpost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserViewPostComponent.prototype, "userclick", void 0);
    UserViewPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-view-post',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserViewPostComponent);
    return UserViewPostComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view/user-view.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.nav{\r\n    color: azure;\r\n    font-size: 20px;\r\n    padding-left: 10px\r\n}\r\n\r\n  #viewposts{\r\n    background-color: ;\r\n  }"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view/user-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-header [userdata]=\"userdata\"></app-user-header>\r\n\r\n<div id=\"bg\"></div>\r\n<div class=\"ui grid\" style=\"margin: 4em auto;\">\r\n  <div class=\"ten wide column centered grid ui\">\r\n\r\n    <div class=\"row centered fluid\">\r\n   \r\n      <app-statistics></app-statistics>\r\n\r\n    </div>\r\n\r\n    <div class=\"row centered\">\r\n\r\n      <div class=\"search-container\">\r\n\r\n        <div class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group\" style=\"margin: 0% 2em\">\r\n              <input type=\"text\" [(ngModel)]=\"searchText\" style=\"height: 45px;width: 350px;\" class=\"form-control\" placeholder=\"Search through Designation,Skills,Company name\">\r\n            </div>\r\n            <div class=\"input-group\" style=\"margin: 0% 2em\">\r\n              <input type=\"text\" [(ngModel)]=\"searchLocation\" style=\"height: 45px;width: 350px;\" class=\"form-control\" placeholder=\"Search through Location\">\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <button style=\"height: 45px;width: 50px;\" class=\"form-control\" (click)=\"searchClicked()\">\r\n                <span class=\"glyphicon glyphicon-search\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row centered\" style=\"margin: 2em auto;\">\r\n\r\n        <!-- <div class=\"eight wide column\"> -->\r\n          <div *ngIf=\"jobInfo fluid\">\r\n            <h2>Recommended jobs for you</h2>\r\n            <div *ngIf='!loadPage && !loadError'>\r\n              <h4>loading...... please wait</h4>\r\n              <span>\r\n                <img src=\"assets/loader.svg\" height=\"64\" alt=\"Nice green circle\" />\r\n              </span>\r\n            </div>\r\n            <h4 *ngIf='loadPage && !loadError && (!suggestedjob || !suggestedjob.length)'>\r\n              no Recommended jobs for you Present\r\n            </h4>\r\n            <div *ngIf=\"loadError\">\r\n              <div class=\"alert alert-danger\">\r\n                {{error_text}}\r\n              </div>\r\n            </div>\r\n            <app-user-view-post *ngFor=\"let hrpost of suggestedjob | paginate: { itemsPerPage: 2, currentPage: p }\" [hrpost]=\"hrpost\" (userclick)=\"routeronclicked($event)\"></app-user-view-post>\r\n          </div>\r\n\r\n          <div *ngIf=\"searchInfo\">\r\n\r\n            <h2>Search results</h2>\r\n            <br>\r\n            <div *ngIf='!searchpage && !loadError'>\r\n              <h4>loading...... please wait</h4>\r\n              <span>\r\n                <img src=\"assets/loader.svg\" height=\"64\" alt=\"Nice green circle\" />\r\n              </span>\r\n            </div>\r\n            <h4 *ngIf='searchpage && !loadError && (!searchData || !searchData.length)'>\r\n              no results for you search\r\n            </h4>\r\n            <app-user-view-post *ngFor=\"let hrpost of searchData | paginate: { itemsPerPage: 2, currentPage: p }\" [hrpost]=\"hrpost\" (userclick)=\"routeronclicked($event)\"></app-user-view-post>\r\n          </div>\r\n\r\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        <!-- </div> -->\r\n      </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"six wide column\">\r\n    <div class=\"ui grid\">\r\n      <div class=\"four wide column\">\r\n\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <div class=\"ui piled segment\">\r\n          <h4 class=\"ui header\">Job Nut</h4>\r\n          <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit\r\n            at. </p>\r\n          <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint</p>\r\n          <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri\r\n            </p>\r\n        </div>\r\n        <div class=\"ui piled segment\">\r\n          <h4 class=\"ui header\">Job Nut</h4>\r\n          <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit\r\n            at. </p>\r\n          <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint</p>\r\n          <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri\r\n            </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!-- \r\n\r\n  \r\n  <br>\r\n -->\r\n"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/features/user-view/user-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__ = __webpack_require__("./src/app/_shared/services/hrbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(hrbaseservice, userbaseservice, router, route) {
        this.hrbaseservice = hrbaseservice;
        this.userbaseservice = userbaseservice;
        this.router = router;
        this.route = route;
        this.loadPage = false;
        this.loadError = false;
        this.searchpage = false;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__["a" /* uuid */])();
        this.jobInfo = true;
        this.p = 1;
    }
    UserViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userbaseservice.getUserDetailsById(this.id).
            subscribe(function (userdata) {
            console.log('maindata');
            console.log('maindata', userdata.data);
            _this.userdata = userdata;
            _this.suggestedjobs();
        });
    };
    UserViewComponent.prototype.suggestedjobs = function () {
        var _this = this;
        console.log('hello');
        this.hrbaseservice.getAllUserViewPost().
            subscribe(function (hrpost) {
            console.log('hrpost', _this.userdata);
            _this.hrpost = hrpost;
            _this.suggestedjob = _this.hrpost.filter(function (ele) {
                if (_this.userdata.skillValue && _this.userdata.skillValue.length > 0) {
                    var data = ele.skills.filter(function (ele1) {
                        if (_this.userdata.skillValue.toString().toLowerCase().includes(ele1.toLowerCase())) {
                            return ele1;
                        }
                    });
                    if (data.length > 0) {
                        return ele;
                    }
                    else {
                        return _this.getpostfromlocation(ele);
                    }
                }
                else {
                    return _this.getpostfromlocation(ele);
                }
            });
            console.log('post', _this.suggestedjob);
            _this.loadPage = true;
        });
        // .catch((error=>{
        //   this.loadError = true;
        //  this.error_text = "Get error on server request ";
        //  }))
    };
    UserViewComponent.prototype.getpostfromlocation = function (postdata) {
        if (this.userdata.city != null && this.userdata.city !== undefined) {
            if (this.userdata.city.toLowerCase().includes(postdata.location.toLowerCase())) {
                return postdata;
            }
        }
    };
    UserViewComponent.prototype.searchClicked = function () {
        var _this = this;
        if (this.searchText === null || this.searchText === undefined) {
            this.jobInfo = true;
            this.searchInfo = false;
        }
        if ((this.searchText === null || this.searchText === undefined) && (this.searchLocation !== null && this.searchLocation !== undefined)) {
            this.searchpage = true;
            this.searchLocation = this.searchLocation.trim();
            this.searchData = this.hrpost.filter(function (el) {
                return el.location.toLowerCase().indexOf(_this.searchLocation.toLowerCase()) > -1;
            });
        }
        if ((this.searchText !== null && this.searchText !== undefined) && (this.searchLocation === null || this.searchLocation === undefined)) {
            this.searchpage = true;
            this.searchText = this.searchText.trim();
            this.searchData = this.hrpost.filter(function (el) {
                return ((el.title.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1) || (el.skills.toString().toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1) || (el.companyname.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1));
            });
        }
        if ((this.searchText !== null && this.searchText !== undefined) && (this.searchLocation !== null && this.searchLocation !== undefined)) {
            this.searchpage = true;
            this.searchText = this.searchText.trim();
            this.searchLocation = this.searchLocation.trim();
            this.searchData = this.hrpost.filter(function (el) {
                if ((el.location.toLowerCase().indexOf(_this.searchLocation.toLowerCase()) > -1) && ((el.title.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1) || (el.skills.toString().toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1) || (el.companyname.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1))) {
                    return el;
                }
            });
        }
        if (this.searchData !== null && this.searchData !== undefined && this.searchData.length > 0) {
            this.jobInfo = false;
            this.searchInfo = true;
            this.p = 1;
        }
    };
    UserViewComponent.prototype.routeronclicked = function (hrpost_id) {
        this.router.navigate([hrpost_id], { relativeTo: this.route });
        // this.router.navigateByUrl('user-profile/user-view-post/' + hrpost_id);
        // console.log(hrpost_id);
    };
    UserViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-view',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view/user-view.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/user-dashboard/features/user-view/user-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_hrbase_service__["a" /* HrbaseService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_user_base_service__["a" /* UserBaseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserViewComponent);
    return UserViewComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui pointing menu\">\r\n    <a class=\"item active\">Home </a>\r\n    <a class=\"item\" (click)=\"getprofile()\"> Profile </a>\r\n    <a class=\"item\" (click)= \"getpost()\">Job Post</a>\r\n    <p class=\"item float right\">{{userdata.firstName}} {{userdata.lastName }}</p>\r\n    <a class=\"item float right\" (click)=\"logoutClicked()\">Log out</a>\r\n  </div> -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/user-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(router) {
        this.router = router;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/user-dashboard.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/user-dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardModule", function() { return UserDashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_select__ = __webpack_require__("./node_modules/ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_img_max__ = __webpack_require__("./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__features_user_profile_user_education_add_details_user_education_add_details_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-education-add-details/user-education-add-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__features_user_profile_user_experience_add_details_user_experience_add_details_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-experience-add-details/user-experience-add-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__features_user_profile_user_personal_details_user_personal_details_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-personal-details/user-personal-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__features_user_profile_user_skills_details_user_skills_details_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-skills-details/user-skills-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__features_user_profile_user_profile_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__features_user_view_user_view_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view/user-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__features_user_view_applied_post_user_view_applied_post_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__features_user_view_post_user_view_post_details_user_view_post_deatilssummary_user_view_post_deatilssummary_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-deatilssummary/user-view-post-deatilssummary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__features_user_view_post_user_view_post_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_dashboard_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_header_user_header_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/user-header/user-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__features_user_view_post_user_view_post_details_user_view_post_details_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__features_user_view_applied_post_user_view_applied_post_details_user_view_applied_post_details_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_components_chat_chat_module__ = __webpack_require__("./src/app/_shared/components/chat/chat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_dashboard_router_config__ = __webpack_require__("./src/app/dashboards/user-dashboard/user-dashboard.router-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_components_statistics_statistics_component__ = __webpack_require__("./src/app/_shared/components/statistics/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_shared_module__ = __webpack_require__("./src/app/_shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';
























// import { UserEducationDetailsComponent } from './features/user-profile/user-education-details/user-education-details.component';
var UserDashboardModule = /** @class */ (function () {
    function UserDashboardModule() {
    }
    UserDashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_25__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                // BrowserAnimationsModule,
                // BrowserModule,
                __WEBPACK_IMPORTED_MODULE_2_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_22__shared_components_chat_chat_module__["a" /* ChatModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_img_max__["a" /* Ng2ImgMaxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_23__user_dashboard_router_config__["a" /* userRouterConfig */])
            ],
            declarations: [
                // NumberToWordsPipe,
                __WEBPACK_IMPORTED_MODULE_9__features_user_profile_user_education_add_details_user_education_add_details_component__["a" /* UserEducationAddDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__shared_components_statistics_statistics_component__["a" /* StatisticsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__features_user_profile_user_experience_add_details_user_experience_add_details_component__["a" /* UserExperienceAddDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__features_user_profile_user_personal_details_user_personal_details_component__["a" /* UserPersonalDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__features_user_profile_user_skills_details_user_skills_details_component__["a" /* UserSkillsDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__features_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__features_user_view_user_view_component__["a" /* UserViewComponent */],
                __WEBPACK_IMPORTED_MODULE_15__features_user_view_applied_post_user_view_applied_post_component__["a" /* UserViewAppliedPostComponent */],
                __WEBPACK_IMPORTED_MODULE_17__features_user_view_post_user_view_post_component__["a" /* UserViewPostComponent */],
                __WEBPACK_IMPORTED_MODULE_16__features_user_view_post_user_view_post_details_user_view_post_deatilssummary_user_view_post_deatilssummary_component__["a" /* UserViewPostDeatilssummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__features_user_view_post_user_view_post_details_user_view_post_details_component__["a" /* UserViewPostDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__user_header_user_header_component__["a" /* UserHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_21__features_user_view_applied_post_user_view_applied_post_details_user_view_applied_post_details_component__["a" /* UserViewAppliedPostDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__user_dashboard_component__["a" /* UserDashboardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_21__features_user_view_applied_post_user_view_applied_post_details_user_view_applied_post_details_component__["a" /* UserViewAppliedPostDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__features_user_profile_user_education_add_details_user_education_add_details_component__["a" /* UserEducationAddDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__features_user_profile_user_experience_add_details_user_experience_add_details_component__["a" /* UserExperienceAddDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__features_user_profile_user_personal_details_user_personal_details_component__["a" /* UserPersonalDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__features_user_profile_user_skills_details_user_skills_details_component__["a" /* UserSkillsDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__features_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__features_user_view_user_view_component__["a" /* UserViewComponent */],
                __WEBPACK_IMPORTED_MODULE_15__features_user_view_applied_post_user_view_applied_post_component__["a" /* UserViewAppliedPostComponent */],
                __WEBPACK_IMPORTED_MODULE_17__features_user_view_post_user_view_post_component__["a" /* UserViewPostComponent */],
                __WEBPACK_IMPORTED_MODULE_16__features_user_view_post_user_view_post_details_user_view_post_deatilssummary_user_view_post_deatilssummary_component__["a" /* UserViewPostDeatilssummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__features_user_view_post_user_view_post_details_user_view_post_details_component__["a" /* UserViewPostDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__user_header_user_header_component__["a" /* UserHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__user_dashboard_component__["a" /* UserDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__features_user_profile_user_education_add_details_user_education_add_details_component__["a" /* UserEducationAddDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */]
            ]
        })
    ], UserDashboardModule);
    return UserDashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboards/user-dashboard/user-dashboard.router-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRouterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__features_user_view_user_view_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view/user-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_user_view_post_user_view_post_details_user_view_post_details_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_user_profile_user_profile_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_user_view_applied_post_user_view_applied_post_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__features_user_view_applied_post_user_view_applied_post_details_user_view_applied_post_details_component__ = __webpack_require__("./src/app/dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component.ts");





var userRouterConfig = [
    // applicant routes
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__features_user_profile_user_profile_component__["a" /* UserProfileComponent */],
    },
    {
        path: 'user-view-post',
        component: __WEBPACK_IMPORTED_MODULE_0__features_user_view_user_view_component__["a" /* UserViewComponent */],
    },
    {
        path: 'user-view-post/:user-post.id',
        component: __WEBPACK_IMPORTED_MODULE_1__features_user_view_post_user_view_post_details_user_view_post_details_component__["a" /* UserViewPostDetailsComponent */]
    },
    {
        path: 'applied-job/:user-post.id',
        component: __WEBPACK_IMPORTED_MODULE_4__features_user_view_applied_post_user_view_applied_post_details_user_view_applied_post_details_component__["a" /* UserViewAppliedPostDetailsComponent */],
    },
    {
        path: 'applied-job',
        component: __WEBPACK_IMPORTED_MODULE_3__features_user_view_applied_post_user_view_applied_post_component__["a" /* UserViewAppliedPostComponent */]
    },
];


/***/ }),

/***/ "./src/app/dashboards/user-dashboard/user-header/user-header.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nbody{\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\tmargin-bottom: 60px;\r\n}\r\n\r\n.ui.grid.main{\r\n\tmargin-top: 70px;\r\n}\r\n\r\n.padding-reset{\r\n\tpadding: 0px !important;\r\n}\r\n\r\n.ui.message{\r\n\tpadding: 40px !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  \t.ui.grid.main{\r\n  \t\tmargin-top: 70px;\r\n\t}\r\n\t.ui.vertical.menu.navbar{\r\n\t\tmargin-top: 0px !important;\r\n\t}\r\n}\r\n\r\n.ui.vertical.menu{\r\n\tmargin-top: -15px !important;\r\n\twidth: 100%;\r\n\tdisplay: none;\r\n}\r\n\r\n.ui.page.grid{\r\n\tpadding-left: 2%;\r\n\tpadding-right: 2%;\r\n}"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/user-header/user-header.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui grid\">\r\n  <div class=\"ui blue inverted fixed menu navbar page grid\">\r\n    <a class=\"item\" (click)=\"getJob()\">\r\n      <i class=\"home icon\"></i>\r\n    </a>\r\n    <a class=\"item\" (click)=\"getJob()\">Job Offers</a>\r\n    <a class=\"item\" (click)=\"getAppliedJob()\">Applied jobs</a>\r\n    <div class=\"right menu\">\r\n        <a class=\"item\" (click)=\"changePassword('checkInvites')\">Check Invites</a>\r\n      <div class=\"ui dropdown item\">\r\n        <a>\r\n          <i class=\"user circle icon\"></i>{{userdata?.firstName}} {{userdata?.lastName }}</a>\r\n        <div class=\"menu\">\r\n          <div class=\"item\" (click)=\"getprofile()\">My Profile</div>\r\n          <div class=\"item\" (click)=\"changePassword('changePassword')\">Change Password</div>\r\n          <div class=\"item\" (click)=\"logoutClicked()\">Log Out</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui small modal\">\r\n    <app-chat-invites *ngIf=\"invitesOpen\" [email]=\"userdata?.email\"></app-chat-invites>\r\n<app-change-password *ngIf=\"passwordChangeRequest\" (closeChangePassword)=\"passwordChangeRequest = $event\"></app-change-password>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n"

/***/ }),

/***/ "./src/app/dashboards/user-dashboard/user-header/user-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("./src/app/_shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_base_service__ = __webpack_require__("./src/app/_shared/services/user-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__ = __webpack_require__("./src/app/_shared/models/uuid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserHeaderComponent = /** @class */ (function () {
    function UserHeaderComponent(router, _authService, userbase, route) {
        this.router = router;
        this._authService = _authService;
        this.userbase = userbase;
        this.route = route;
        this.passwordChangeRequest = false;
        this.invitesOpen = false;
        this.resetInfo = false;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_4__shared_models_uuid__["a" /* uuid */])();
    }
    UserHeaderComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.ui.dropdown').dropdown();
        });
    };
    UserHeaderComponent.prototype.getprofile = function () {
        this.router.navigateByUrl('/user-profile');
    };
    UserHeaderComponent.prototype.getJob = function () {
        this.router.navigate(['user-view-post'], { relativeTo: this.route.parent });
    };
    // this.currentForm.value, this.id
    UserHeaderComponent.prototype.logoutClicked = function () {
        this._authService.logout();
        this.router.navigateByUrl('login');
    };
    UserHeaderComponent.prototype.getAppliedJob = function () {
        this.router.navigateByUrl('/user-profile/applied-job');
        // this.router.navigate(['/applied-job'], {relativeTo: this.route});
    };
    UserHeaderComponent.prototype.changePassword = function (str) {
        $('.small.modal')
            .modal({
            closable: true,
            onDeny: function () {
                return true;
            }
        })
            .modal('show');
        if (str === 'changePassword') {
            this.passwordChangeRequest = true;
            this.invitesOpen = false;
        }
        else if (str === 'checkInvites') {
            this.passwordChangeRequest = false;
            this.invitesOpen = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserHeaderComponent.prototype, "userdata", void 0);
    UserHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-header',
            template: __webpack_require__("./src/app/dashboards/user-dashboard/user-header/user-header.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/user-dashboard/user-header/user-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_user_base_service__["a" /* UserBaseService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserHeaderComponent);
    return UserHeaderComponent;
}());



/***/ })

});
//# sourceMappingURL=user-dashboard.module.chunk.js.map