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
var user_base_service_1 = require("../../../_shared/services/user-base.service");
var uuid_1 = require("../../../_shared/models/uuid");
var UserHeaderComponent = /** @class */ (function () {
    function UserHeaderComponent(router, _authService, userbase, route) {
        this.router = router;
        this._authService = _authService;
        this.userbase = userbase;
        this.route = route;
        this.passwordChangeRequest = false;
        this.invitesOpen = false;
        this.resetInfo = false;
        this.id = uuid_1.uuid();
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
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserHeaderComponent.prototype, "userdata", void 0);
    UserHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-user-header',
            templateUrl: './user-header.component.html',
            styleUrls: ['./user-header.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService, user_base_service_1.UserBaseService, router_1.ActivatedRoute])
    ], UserHeaderComponent);
    return UserHeaderComponent;
}());
exports.UserHeaderComponent = UserHeaderComponent;
//# sourceMappingURL=user-header.component.js.map