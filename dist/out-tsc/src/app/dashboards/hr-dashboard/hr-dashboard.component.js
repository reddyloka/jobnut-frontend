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
// import { AuthService } from '../../services/authentication/auth.service';
var router_1 = require("@angular/router");
var auth_service_1 = require("../../_shared/services/auth.service");
var HrDashboardComponent = /** @class */ (function () {
    function HrDashboardComponent(_authService, router) {
        this._authService = _authService;
        this.router = router;
        this.isActive = [true, false, false];
        // this.id =
        if (!_authService.isLoggedIn) {
            this.router.navigateByUrl('login');
        }
        console.log('lopkln', this.hrdata, '\n');
    }
    HrDashboardComponent.prototype.ngOnInit = function () {
    };
    HrDashboardComponent.prototype.getprofile = function () {
        this.isActive = [true, false, false];
        this.router.navigateByUrl('hr/profile');
    };
    HrDashboardComponent.prototype.getpost = function () {
        this.isActive = [false, true, false];
        this.router.navigateByUrl('hr/jobs-posted');
    };
    HrDashboardComponent.prototype.addnewpost = function () {
        this.isActive = [false, false, true];
        this.router.navigateByUrl('hr/new-job');
    };
    HrDashboardComponent.prototype.getDetails = function () {
        if (!this._authService.isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        this.router.navigateByUrl('hr/profile');
        // console.log( this._authService. )
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HrDashboardComponent.prototype, "hrdata", void 0);
    HrDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-dashboard',
            templateUrl: './hr-dashboard.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], HrDashboardComponent);
    return HrDashboardComponent;
}());
exports.HrDashboardComponent = HrDashboardComponent;
//# sourceMappingURL=hr-dashboard.component.js.map