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
var hrbase_service_1 = require("../../../../../_shared/services/hrbase.service");
var router_1 = require("@angular/router");
var uuid_1 = require("../../../../../_shared/models/uuid");
var HrPostListSummaryComponent = /** @class */ (function () {
    function HrPostListSummaryComponent(hrbaseservice, router) {
        this.hrbaseservice = hrbaseservice;
        this.router = router;
        this.userclick = new core_1.EventEmitter();
        this.id = uuid_1.uuid();
    }
    HrPostListSummaryComponent.prototype.userclicked = function () {
        this.userclick.emit(this.hrpost._id);
    };
    HrPostListSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            _this.hrdata = data;
        });
    };
    HrPostListSummaryComponent.prototype.deletePost = function () {
        var windowStatus = window.confirm('confirm to delete post');
        if (windowStatus) {
            this.hrbaseservice.deleteHrPost(this.hrpost._id).subscribe(function () {
                console.log('deleted successfully');
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HrPostListSummaryComponent.prototype, "hrpost", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], HrPostListSummaryComponent.prototype, "userclick", void 0);
    HrPostListSummaryComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-post-list-summary',
            templateUrl: './hr-post-list-summary.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [hrbase_service_1.HrbaseService, router_1.Router])
    ], HrPostListSummaryComponent);
    return HrPostListSummaryComponent;
}());
exports.HrPostListSummaryComponent = HrPostListSummaryComponent;
//# sourceMappingURL=hr-post-list-summary.component.js.map