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
var notification_service_1 = require("../../../../../../_shared/services/notification.service");
var hrbase_service_1 = require("../../../../../../_shared/services/hrbase.service");
var uuid_1 = require("../../../../../../_shared/models/uuid");
var HrManageApplicantListDetailsComponent = /** @class */ (function () {
    function HrManageApplicantListDetailsComponent(_notif, hrbaseservice) {
        this._notif = _notif;
        this.hrbaseservice = hrbaseservice;
        this.openChat = new core_1.EventEmitter();
        this.st = {
            'isHr': true,
            'isApplicant': false
        };
        this.id = uuid_1.uuid();
        this.chatOpen = false;
        // this.st 
    }
    HrManageApplicantListDetailsComponent.prototype.ngOnInit = function () {
        console.log('looo', this.hrpost);
        this.isShortlisted = this.postData.isShortlisted;
        this.userdata = this.postData._id;
        this.hrpostdata = this.hrpost;
    };
    HrManageApplicantListDetailsComponent.prototype.shortlist = function (event) {
        this.isShortlisted = !this.isShortlisted;
        var applicants = {
            isShortlisted: this.isShortlisted
        };
        console.log('short', applicants);
        console.log('short hr ', this.hrpostdata);
        console.log('short user', this.userdata);
        this.hrbaseservice.hrShortlist(applicants, this.hrpostdata._id, this.userdata._id).
            subscribe(function (res) {
            console.log('success');
        });
        // if (this.isShortlisted) {
        //   this._notif.pop(`${this.userdata.firstName + ' ' + this.userdata.lastName} has been shortlisted\nfor Job Tittle`, 'Success', 3000);
        // } else {
        //   this._notif.pop(`${this.userdata.firstName + ' ' + this.userdata.lastName} has been deselected\nfrom Job Tittle`, 'Deselect Successfull', 3000);
        // }
    };
    HrManageApplicantListDetailsComponent.prototype.chatOpenClicked = function () {
        this.chatOpen = true;
        this.openChat.emit(true);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HrManageApplicantListDetailsComponent.prototype, "openChat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HrManageApplicantListDetailsComponent.prototype, "postData", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HrManageApplicantListDetailsComponent.prototype, "hrpost", void 0);
    HrManageApplicantListDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-manage-applicant-list-details',
            templateUrl: './hr-manage-applicant-list-details.component.html'
        }),
        __metadata("design:paramtypes", [notification_service_1.NotificationService,
            hrbase_service_1.HrbaseService])
    ], HrManageApplicantListDetailsComponent);
    return HrManageApplicantListDetailsComponent;
}());
exports.HrManageApplicantListDetailsComponent = HrManageApplicantListDetailsComponent;
//# sourceMappingURL=hr-manage-applicant-list-details.component.js.map