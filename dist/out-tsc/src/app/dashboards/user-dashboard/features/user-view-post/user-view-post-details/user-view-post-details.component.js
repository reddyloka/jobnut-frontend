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
var router_2 = require("@angular/router");
var hrbase_service_1 = require("../../../../../_shared/services/hrbase.service");
var user_base_service_1 = require("../../../../../_shared/services/user-base.service");
var uuid_1 = require("../../../../../_shared/models/uuid");
var UserViewPostDetailsComponent = /** @class */ (function () {
    function UserViewPostDetailsComponent(route, hrbaseservice, userbaseservice, router) {
        this.route = route;
        this.hrbaseservice = hrbaseservice;
        this.userbaseservice = userbaseservice;
        this.router = router;
        this.uploadNewCv = false;
        this.id = uuid_1.uuid();
        this.isApply = false;
    }
    UserViewPostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var hrpost_id = params.get('user-post.id');
            _this.hrbaseservice.getHrPostById(hrpost_id, {
                'isHr': false,
                'isApplicant': true
            }).
                subscribe(function (hrpost) {
                _this.hrpost = hrpost;
                _this.shortlisted();
            });
        });
        this.userbaseservice.getUserDetailsById(this.id).
            subscribe(function (userdata) {
            _this.userdata = userdata;
        });
    };
    UserViewPostDetailsComponent.prototype.uploadNew = function () {
        this.uploadNewCv = true;
    };
    UserViewPostDetailsComponent.prototype.uploadOld = function () {
        this.uploadNewCv = false;
    };
    UserViewPostDetailsComponent.prototype.shortlisted = function () {
        var _this = this;
        console.log('shhhhhhhooooooooo', this.hrpost.applicants);
        this.hrpost.applicants.map(function (ele) {
            if (ele._id && (_this.id === ele._id._id)) {
                console.log(ele._id._id);
                _this.isApply = true;
                console.log(_this.isApply);
            }
        });
    };
    UserViewPostDetailsComponent.prototype.applyToPost = function () {
        var _this = this;
        console.log('post_id', this.hrpost._id);
        console.log('id', this.id);
        this.userbaseservice.updateUserApplyPost(this.hrpost._id, this.id).
            subscribe(function () {
            console.log('successfully applied and notified');
            _this.router.navigateByUrl('user-view-post');
        });
    };
    UserViewPostDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-view-post-details',
            templateUrl: './user-view-post-details.component.html',
            styleUrls: ['./user-view-post-details.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            hrbase_service_1.HrbaseService,
            user_base_service_1.UserBaseService,
            router_2.Router])
    ], UserViewPostDetailsComponent);
    return UserViewPostDetailsComponent;
}());
exports.UserViewPostDetailsComponent = UserViewPostDetailsComponent;
//# sourceMappingURL=user-view-post-details.component.js.map