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
var uuid_1 = require("../../../../_shared/models/uuid");
var HrPostComponent = /** @class */ (function () {
    function HrPostComponent(hrbaseservice, router) {
        this.hrbaseservice = hrbaseservice;
        this.router = router;
        this.loadPage = false;
        this.loadError = false;
        this.id = uuid_1.uuid();
    }
    HrPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            _this.hrdata = data;
        });
        this.hrbaseservice.getAllHrPost(this.id, {
            'isHr': true,
            'isApplicant': false
        }).
            subscribe(function (hrpost) {
            _this.hrpost = hrpost;
            console.log('here: ', hrpost);
            _this.loadPage = true;
        });
        // .catch((error=>{
        //  this.loadError = true;
        // this.error_text = "Get error on server request ";
        // }))
    };
    HrPostComponent.prototype.routeronclicked = function (hrpost_id) {
        this.router.navigateByUrl('/jobs-posted/' + hrpost_id);
    };
    HrPostComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-post',
            templateUrl: './hr-post.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [hrbase_service_1.HrbaseService,
            router_1.Router])
    ], HrPostComponent);
    return HrPostComponent;
}());
exports.HrPostComponent = HrPostComponent;
//# sourceMappingURL=hr-post.component.js.map