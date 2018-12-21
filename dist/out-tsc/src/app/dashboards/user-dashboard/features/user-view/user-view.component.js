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
var hrbase_service_1 = require("../../../../_shared/services/hrbase.service");
var user_base_service_1 = require("../../../../_shared/services/user-base.service");
var uuid_1 = require("../../../../_shared/models/uuid");
var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(hrbaseservice, userbaseservice, router, route) {
        this.hrbaseservice = hrbaseservice;
        this.userbaseservice = userbaseservice;
        this.router = router;
        this.route = route;
        this.loadPage = false;
        this.loadError = false;
        this.searchpage = false;
        this.id = uuid_1.uuid();
        this.jobInfo = true;
        this.p = 1;
    }
    UserViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userbaseservice.getUserDetailsById(this.id).
            subscribe(function (userdata) {
            console.log('maindata');
            console.log('maindata', userdata.data);
            _this.userdata = userdata;
            _this.suggestedjobs();
        });
    };
    UserViewComponent.prototype.suggestedjobs = function () {
        var _this = this;
        console.log('hello');
        this.hrbaseservice.getAllUserViewPost().
            subscribe(function (hrpost) {
            console.log('hrpost', _this.userdata);
            _this.hrpost = hrpost;
            _this.suggestedjob = _this.hrpost.filter(function (ele) {
                if (_this.userdata.skillValue && _this.userdata.skillValue.length > 0) {
                    var data = ele.skills.filter(function (ele1) {
                        if (_this.userdata.skillValue.toString().toLowerCase().includes(ele1.toLowerCase())) {
                            return ele1;
                        }
                    });
                    if (data.length > 0) {
                        return ele;
                    }
                    else {
                        return _this.getpostfromlocation(ele);
                    }
                }
                else {
                    return _this.getpostfromlocation(ele);
                }
            });
            console.log('post', _this.suggestedjob);
            _this.loadPage = true;
        });
        // .catch((error=>{
        //   this.loadError = true;
        //  this.error_text = "Get error on server request ";
        //  }))
    };
    UserViewComponent.prototype.getpostfromlocation = function (postdata) {
        if (this.userdata.city != null && this.userdata.city !== undefined) {
            if (this.userdata.city.toLowerCase().includes(postdata.location.toLowerCase())) {
                return postdata;
            }
        }
    };
    UserViewComponent.prototype.searchClicked = function () {
        var _this = this;
        if (this.searchText === null || this.searchText === undefined) {
            this.jobInfo = true;
            this.searchInfo = false;
        }
        if ((this.searchText === null || this.searchText === undefined) && (this.searchLocation !== null && this.searchLocation !== undefined)) {
            this.searchpage = true;
            this.searchLocation = this.searchLocation.trim();
            this.searchData = this.hrpost.filter(function (el) {
                return el.location.toLowerCase().indexOf(_this.searchLocation.toLowerCase()) > -1;
            });
        }
        if ((this.searchText !== null && this.searchText !== undefined) && (this.searchLocation === null || this.searchLocation === undefined)) {
            this.searchpage = true;
            this.searchText = this.searchText.trim();
            this.searchData = this.hrpost.filter(function (el) {
                return ((el.title.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1) || (el.skills.toString().toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1) || (el.companyname.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1));
            });
        }
        if ((this.searchText !== null && this.searchText !== undefined) && (this.searchLocation !== null && this.searchLocation !== undefined)) {
            this.searchpage = true;
            this.searchText = this.searchText.trim();
            this.searchLocation = this.searchLocation.trim();
            this.searchData = this.hrpost.filter(function (el) {
                if ((el.location.toLowerCase().indexOf(_this.searchLocation.toLowerCase()) > -1) && ((el.title.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1) || (el.skills.toString().toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1) || (el.companyname.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1))) {
                    return el;
                }
            });
        }
        if (this.searchData !== null && this.searchData !== undefined && this.searchData.length > 0) {
            this.jobInfo = false;
            this.searchInfo = true;
            this.p = 1;
        }
    };
    UserViewComponent.prototype.routeronclicked = function (hrpost_id) {
        this.router.navigate([hrpost_id], { relativeTo: this.route });
        // this.router.navigateByUrl('user-profile/user-view-post/' + hrpost_id);
        // console.log(hrpost_id);
    };
    UserViewComponent = __decorate([
        core_1.Component({
            selector: 'app-user-view',
            templateUrl: './user-view.component.html',
            styleUrls: ['./user-view.component.css']
        }),
        __metadata("design:paramtypes", [hrbase_service_1.HrbaseService,
            user_base_service_1.UserBaseService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], UserViewComponent);
    return UserViewComponent;
}());
exports.UserViewComponent = UserViewComponent;
//# sourceMappingURL=user-view.component.js.map