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
var router_1 = require("@angular/router");
var auth_service_1 = require("../../../_shared/services/auth.service");
var uuid_1 = require("../../../_shared/models/uuid");
var forms_1 = require("@angular/forms");
var user_base_service_1 = require("../../../_shared/services/user-base.service");
var HrHeaderComponent = /** @class */ (function () {
    function HrHeaderComponent(_authService, router, userbase) {
        this._authService = _authService;
        this.router = router;
        this.userbase = userbase;
        this.inputType = 'password';
        this.isActive = [true, false, false];
        // this.id =
        if (!_authService.isLoggedIn) {
            this.router.navigateByUrl('login');
        }
        this.id = uuid_1.uuid();
        this.buildFormGroup();
    }
    HrHeaderComponent.prototype.buildFormGroup = function () {
        var fg = {
            currentPassword: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            newPassword: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
            confirmPassword: new forms_1.FormControl(null, [forms_1.Validators.required]),
        };
        this.currentForm = new forms_1.FormGroup(fg);
    };
    HrHeaderComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.ui.dropdown').dropdown();
        });
    };
    HrHeaderComponent.prototype.changePassword = function () {
        var _this = this;
        $('.small.modal')
            .modal({
            closable: true,
            onDeny: function () {
                return true;
            }
        })
            .modal('show');
        console.log('request to change password', this.currentForm.value);
        this.userbase.checkCurrentPassword(this.currentForm.value, this.id).subscribe(function (data) {
            console.log('data', data);
            if (data.status) {
                $('.small.modal').modal('toggle');
                _this.logoutClicked();
            }
            else {
                window.alert(data.errors.message);
                _this.buildFormGroup();
            }
        });
    };
    HrHeaderComponent.prototype.tooglepwd = function () {
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else if (this.inputType === 'text') {
            this.inputType = 'password';
        }
    };
    HrHeaderComponent.prototype.getprofile = function () {
        this.isActive = [true, false, false];
        this.router.navigateByUrl('hr/profile');
    };
    HrHeaderComponent.prototype.getpost = function () {
        this.isActive = [false, true, false];
        this.router.navigateByUrl('hr/jobs-posted');
    };
    HrHeaderComponent.prototype.addnewpost = function () {
        this.isActive = [false, false, true];
        this.router.navigateByUrl('hr/new-job');
    };
    HrHeaderComponent.prototype.getDetails = function () {
        if (!this._authService.isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        this.router.navigateByUrl('hr/profile');
        // console.log( this._authService. )
    };
    HrHeaderComponent.prototype.logoutClicked = function () {
        console.log('log out clicked');
        this._authService.logout();
        this.router.navigateByUrl('login');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HrHeaderComponent.prototype, "hrdata", void 0);
    HrHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-header',
            templateUrl: './hr-header.component.html',
            styles: ['./hr-header.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            user_base_service_1.UserBaseService])
    ], HrHeaderComponent);
    return HrHeaderComponent;
}());
exports.HrHeaderComponent = HrHeaderComponent;
//# sourceMappingURL=hr-header.component.js.map