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
var auth_service_1 = require("../../services/auth.service");
var user_base_service_1 = require("../../services/user-base.service");
var uuid_1 = require("../../models/uuid");
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(router, _authService, userbase, route) {
        this.router = router;
        this._authService = _authService;
        this.userbase = userbase;
        this.route = route;
        // this.currentForm.value, this.id
        this.closeChangePassword = new core_1.EventEmitter();
        this.inputType = 'password';
        this.id = uuid_1.uuid();
        this.buildFormGroup();
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        // $(document).ready(function () {
        //   $('.ui.dropdown').dropdown();
        // });
        this.changePassword();
    };
    ChangePasswordComponent.prototype.tooglepwd = function () {
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else if (this.inputType === 'text') {
            this.inputType = 'password';
        }
    };
    ChangePasswordComponent.prototype.buildFormGroup = function () {
        var fg = {
            currentPassword: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            newPassword: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            confirmPassword: new forms_1.FormControl(null, [forms_1.Validators.required]),
        };
        this.currentForm = new forms_1.FormGroup(fg);
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        console.log('request to change password', this.currentForm.value);
        this.userbase.checkCurrentPassword(this.currentForm.value, this.id).subscribe(function (data) {
            console.log('data', data);
            if (data.status) {
                $('.small.modal').modal({
                    closable: true,
                    onDeny: function () {
                        return true;
                    }
                }).modal('toggle');
                _this.logoutClicked();
            }
            else {
                window.alert(data.errors.message);
                _this.buildFormGroup();
            }
        });
    };
    ChangePasswordComponent.prototype.logoutClicked = function () {
        this._authService.logout();
        this.router.navigateByUrl('login');
    };
    ChangePasswordComponent.prototype.closeChangePasswordClicked = function () {
        console.log('clicked');
        $('.small.modal')
            .modal({
            closable: false,
            onDeny: function () {
                return true;
            }
        })
            .modal('hide');
        this.closeChangePassword.emit(false);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "closeChangePassword", void 0);
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService, user_base_service_1.UserBaseService, router_1.ActivatedRoute])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=change-password.component.js.map