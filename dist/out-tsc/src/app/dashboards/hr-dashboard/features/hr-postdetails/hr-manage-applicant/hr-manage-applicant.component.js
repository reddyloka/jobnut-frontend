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
var common_1 = require("@angular/common");
var data_service_1 = require("../../../../../_shared/services/data.service");
var hrbase_service_1 = require("../../../../../_shared/services/hrbase.service");
var uuid_1 = require("../../../../../_shared/models/uuid");
var HrManageApplicantComponent = /** @class */ (function () {
    function HrManageApplicantComponent(data, route, router, hrbaseservice, location) {
        this.data = data;
        this.route = route;
        this.router = router;
        this.hrbaseservice = hrbaseservice;
        this.location = location;
        this.loadPage = false;
        this.loadError = false;
        this.chatOpen = false;
        this.manageApplicantInfo = true;
        this.applicantDetailsInfo = false;
        this.textInfo = '';
        this.manageBack = true;
        this.id = uuid_1.uuid();
    }
    HrManageApplicantComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('hrpost', this.hrpost);
        // this.data.currentMessage.subscribe(message => this.hrpost = message );
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            console.log('hr dqata', _this.hrdata);
            _this.hrdata = data;
        });
        this.applicantdetails();
    };
    HrManageApplicantComponent.prototype.viewprofile = function (event) {
        console.log('applicant data', event);
        if (!this.applicantDetailsInfo) {
            this.applicant = event;
            this.applicantDetailsInfo = true;
            this.manageApplicantInfo = false;
            this.textInfo = 'Back';
            this.manageBack = false;
        }
        else {
            this.applicantDetailsInfo = false;
            this.manageApplicantInfo = true;
            this.textInfo = '';
            this.applicantdetails();
            this.manageBack = true;
        }
    };
    HrManageApplicantComponent.prototype.applicantdetails = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var hrpost_id = params.get('id');
            _this.hrbaseservice.getHrPostById(hrpost_id, {
                'isHr': true,
                'isApplicant': false
            }).
                subscribe(function (hrpost) {
                console.log(hrpost);
                _this.hrpost = hrpost;
                _this.loadPage = true;
            });
            // .catch((error=>{
            //   this.loadError = true;
            //  this.error_text = "Get error on server request ";
            //  }))
        });
    };
    HrManageApplicantComponent.prototype.backpage = function () {
        this.location.back();
    };
    HrManageApplicantComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-manage-applicant',
            templateUrl: './hr-manage-applicant.component.html',
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            router_1.Router,
            hrbase_service_1.HrbaseService,
            common_1.Location])
    ], HrManageApplicantComponent);
    return HrManageApplicantComponent;
}());
exports.HrManageApplicantComponent = HrManageApplicantComponent;
//# sourceMappingURL=hr-manage-applicant.component.js.map