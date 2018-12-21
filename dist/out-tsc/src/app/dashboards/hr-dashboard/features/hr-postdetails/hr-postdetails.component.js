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
var hrbase_service_1 = require("../../../../_shared/services/hrbase.service");
var data_service_1 = require("../../../../_shared/services/data.service");
var uuid_1 = require("../../../../_shared/models/uuid");
var HrPostdetailsComponent = /** @class */ (function () {
    function HrPostdetailsComponent(route, hrbaseservice, data, router, location) {
        this.route = route;
        this.hrbaseservice = hrbaseservice;
        this.data = data;
        this.router = router;
        this.location = location;
        this.postDetailsInfo = true;
        this.editpostDetailsInfo = false;
        this.textInfo = 'Manage Applicant';
        this.postviewback = true;
        this.editviewback = false;
        this.id = uuid_1.uuid();
    }
    HrPostdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            _this.hrdata = data;
        });
        this.postdetails();
    };
    HrPostdetailsComponent.prototype.manageApplicant = function () {
        this.data.changeMessage(this.hrpost);
        this.router.navigate(['jobs-posted/' + this.hrpost._id + '/manageApplicant']);
    };
    HrPostdetailsComponent.prototype.editpost = function () {
        this.postviewback = false;
        this.editviewback = true;
        this.postDetailsInfo = false;
        this.editpostDetailsInfo = true;
    };
    HrPostdetailsComponent.prototype.postdetails = function () {
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
                _this.hrpost.dateOfJoining = _this.hrpost.dateOfJoining.replace(/T00:00:00.000Z/, '');
                _this.hrpost.startdate = _this.hrpost.startdate.replace(/T00:00:00.000Z/, '');
                _this.hrpost.enddate = _this.hrpost.enddate.replace(/T00:00:00.000Z/, '');
                // console.log('hrpost',this.hrpost);
            });
        });
    };
    HrPostdetailsComponent.prototype.postbackpage = function () {
        this.location.back();
    };
    HrPostdetailsComponent.prototype.editbackpage = function () {
        this.postviewback = true;
        this.editviewback = false;
        this.postDetailsInfo = true;
        this.editpostDetailsInfo = false;
    };
    HrPostdetailsComponent.prototype.deletepost = function () {
        var _this = this;
        var windowStatus = window.confirm('confirm to delete post');
        if (windowStatus) {
            this.hrbaseservice.deleteHrPost(this.hrpost._id).subscribe(function () {
                _this.router.navigateByUrl('hr/jobs-posted');
                console.log('deleted successfully');
            });
        }
    };
    HrPostdetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-postdetails',
            templateUrl: './hr-postdetails.component.html',
            styleUrls: ['./hr-postdetails.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            hrbase_service_1.HrbaseService,
            data_service_1.DataService,
            router_1.Router,
            common_1.Location])
    ], HrPostdetailsComponent);
    return HrPostdetailsComponent;
}());
exports.HrPostdetailsComponent = HrPostdetailsComponent;
//# sourceMappingURL=hr-postdetails.component.js.map