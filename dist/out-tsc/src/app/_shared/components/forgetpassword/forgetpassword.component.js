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
var applicantbase_1 = require("../../models/applicantbase");
var user_base_service_1 = require("../../services/user-base.service");
var ForgetpasswordComponent = /** @class */ (function () {
    function ForgetpasswordComponent(fb, _userbase, router) {
        this.fb = fb;
        this._userbase = _userbase;
        this.router = router;
        this.forgetInfo = true;
        this.resetInfo = false;
        this.inputType = 'password';
        this.user_details = applicantbase_1.ApplicantBase.createblank();
        this.loginEmailForm = fb.group({
            userEmail: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
            isHr: new forms_1.FormControl(false, forms_1.Validators.required)
        });
        this.resetForm = fb.group({
            password: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            confirmPassword: new forms_1.FormControl(null, [forms_1.Validators.required])
        });
    }
    ForgetpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetpasswordComponent.prototype.tooglepwd = function () {
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else if (this.inputType === 'text') {
            this.inputType = 'password';
        }
    };
    ForgetpasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        console.log('form value', this.loginEmailForm.value);
        this.forgetInfo = false;
        this._userbase.checkMailId(this.loginEmailForm.value).subscribe(function (res) {
            console.log('id exists', res);
            if (res) {
                _this.resetInfo = true;
            }
            else {
                window.alert('Email address was not registered with us Please Signup with Jobnut');
                _this.router.navigateByUrl('signin');
            }
        });
    };
    ForgetpasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userbase.passwordUpdate(this.loginEmailForm.value, this.resetForm.value.password)
            .subscribe(function (res) {
            console.log('password updated successfully', res);
            _this.router.navigateByUrl('login');
        });
    };
    ForgetpasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forgetpassword',
            templateUrl: './forgetpassword.component.html',
            styleUrls: ['./forgetpassword.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_base_service_1.UserBaseService, router_1.Router])
    ], ForgetpasswordComponent);
    return ForgetpasswordComponent;
}());
exports.ForgetpasswordComponent = ForgetpasswordComponent;
//# sourceMappingURL=forgetpassword.component.js.map