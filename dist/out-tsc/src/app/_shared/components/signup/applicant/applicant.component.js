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
var applicantbase_1 = require("../../../models/applicantbase");
var user_base_service_1 = require("../../../services/user-base.service");
var citiesData = require("../../../data/india-cities.json");
var ApplicantComponent = /** @class */ (function () {
    function ApplicantComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
        this.cities = [];
        this.states = [];
        this.genders = [];
        this.personalInfo = false;
        this.educationInfo = false;
        this.user_details = applicantbase_1.ApplicantBase.createblank();
        this.buildFormGroup();
        this.states = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'TamilNadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
        ];
        this.genders = ['Male', 'Female', 'Other'];
        this.highestDegreeArray = ['B.A', 'B.Arch', 'B.Des', 'B.EL.Ed', 'B.P.Ed', 'B.U.M.S', 'BAMS', 'BCA', 'B.B.A/B.B.M', 'B.Com', 'B.Ed', 'BDS', 'BFA', 'BHM', 'B.Phrama', 'B.Sc', 'B.Tech/B.E', 'BHMS', 'MBBS', 'Diploma', 'BVSC', '12th', '10th', 'other'];
        this.skills = ['Angular', 'ASP.Net', 'C#', 'C#.Net', 'ADO.Net', 'SQL Server', 'Spring', 'C', 'C++', 'JAVA', 'CSS', 'Graphic Design', 'Ember', 'DataBase', 'PHP', 'Full Stack Developing', 'Testing', 'HTML', 'Javascript', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
        this.yearArray = this.years();
        this.cities = citiesData;
        this.profile_photo = null;
        this.isApplicant = true;
        this.isHr = false;
        this.status = true;
        this.inputType = 'password';
    }
    ApplicantComponent.prototype.years = function () {
        var year = [];
        for (var i = 1990; i <= 2030; i++) {
            year.push(i);
        }
        return year;
    };
    ApplicantComponent.prototype.buildFormGroup = function () {
        var fg = {
            'firstName': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]),
            'lastName': new forms_1.FormControl(null),
            'dob': new forms_1.FormControl(null, forms_1.Validators.required),
            'gender': new forms_1.FormControl(null, forms_1.Validators.required),
            'phone': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{10}')]),
            'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
            'password': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            'state': new forms_1.FormControl(null, forms_1.Validators.required),
            'city': new forms_1.FormControl(null, forms_1.Validators.required),
            'address': new forms_1.FormControl(null, forms_1.Validators.required),
            'country': new forms_1.FormControl(null, forms_1.Validators.required),
            'skillValue': new forms_1.FormControl(null, forms_1.Validators.required),
            'termsCheck': new forms_1.FormControl(null, forms_1.Validators.required)
        };
        if (this.user_details.education) {
            for (var i = 0; i < this.user_details.education.length; i++) {
                fg['higherDegreeValue_' + i] = new forms_1.FormControl(this.user_details.education[i].higherDegreeValue, forms_1.Validators.required);
                fg['universityName_' + i] = new forms_1.FormControl(this.user_details.education[i].universityName, forms_1.Validators.required);
                fg['passingYearValue_' + i] = new forms_1.FormControl(this.user_details.education[i].passingYearValue, forms_1.Validators.required);
                fg['percentageValue_' + i] = new forms_1.FormControl(this.user_details.education[i].percentageValue, forms_1.Validators.required);
            }
        }
        this.user_details.isApplicant = true;
        this.user_details.isHr = false;
        this.user_details.status = true;
        this.applicantForm = new forms_1.FormGroup(fg);
    };
    ApplicantComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
    };
    ApplicantComponent.prototype.infoChange = function () {
        this.personalInfo = false;
        this.educationInfo = true;
    };
    ApplicantComponent.prototype.userExist = function () {
        var _this = this;
        var emailObj = {
            userEmail: this.applicantForm.value.email,
            isHr: false
        };
        if (this.applicantForm.value.email != null && this.applicantForm.value.email !== undefined) {
            this._userService.checkMailId(emailObj).subscribe(function (res) {
                if (res.status) {
                    window.alert('Email address was already registered with us Please click ok to login');
                    _this.router.navigateByUrl('login');
                }
            });
        }
    };
    ApplicantComponent.prototype.tooglepwd = function () {
        console.log('form pass', this.applicantForm.controls.password.valid);
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else if (this.inputType === 'text') {
            this.inputType = 'password';
        }
    };
    ApplicantComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Applicant details', this.user_details);
        this.user_details.skillValue = this.user_details.skillValue.filter(function (ele) {
            if (ele !== 'select your skills') {
                return ele;
            }
        });
        this._userService.addNewUser(this.user_details, {
            profile_photo: this.profile_photo
        }).then(function (result) {
            _this.router.navigateByUrl('login');
            console.log(result);
        });
    };
    ApplicantComponent.prototype.fileTypeCheck = function (event) {
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
    ApplicantComponent = __decorate([
        core_1.Component({
            selector: 'app-applicant',
            templateUrl: './applicant.component.html',
            styleUrls: ['./applicant.component.css']
        }),
        __metadata("design:paramtypes", [user_base_service_1.UserBaseService,
            router_1.Router])
    ], ApplicantComponent);
    return ApplicantComponent;
}());
exports.ApplicantComponent = ApplicantComponent;
//# sourceMappingURL=applicant.component.js.map