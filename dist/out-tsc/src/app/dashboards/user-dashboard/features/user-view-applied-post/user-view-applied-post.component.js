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
var user_base_service_1 = require("../../../../_shared/services/user-base.service");
var uuid_1 = require("../../../../_shared/models/uuid");
var UserViewAppliedPostComponent = /** @class */ (function () {
    function UserViewAppliedPostComponent(userbaseservice, router, route) {
        this.userbaseservice = userbaseservice;
        this.router = router;
        this.route = route;
        this.loadPage = false;
        this.loadError = false;
        this.id = uuid_1.uuid();
    }
    UserViewAppliedPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userbaseservice.getUserDetailsById(this.id).subscribe(function (res) {
            _this.userdata = res;
            console.log('userdata from applied', _this.userdata);
            return _this.userdata;
        });
        this.userbaseservice.getUserApplyPost(this.id).
            subscribe(function (hrpost) {
            console.log('applied data', hrpost);
            _this.hrpost = hrpost;
            _this.loadPage = true;
        });
        // .catch((error=>{
        //   this.loadError = true;
        //  this.error_text = "Get error on server request ";
        //  }));
        this.p = 1;
    };
    UserViewAppliedPostComponent.prototype.routeronclicked = function (hrpost_id) {
        // this.router.navigateByUrl('user-profile/applied-job/' + hrpost_id);
        this.router.navigate([hrpost_id], { relativeTo: this.route });
        // console.log(hrpost_id);
    };
    UserViewAppliedPostComponent = __decorate([
        core_1.Component({
            selector: 'app-user-view-applied-post',
            templateUrl: './user-view-applied-post.component.html'
        }),
        __metadata("design:paramtypes", [user_base_service_1.UserBaseService,
            router_1.Router, router_1.ActivatedRoute])
    ], UserViewAppliedPostComponent);
    return UserViewAppliedPostComponent;
}());
exports.UserViewAppliedPostComponent = UserViewAppliedPostComponent;
//# sourceMappingURL=user-view-applied-post.component.js.map