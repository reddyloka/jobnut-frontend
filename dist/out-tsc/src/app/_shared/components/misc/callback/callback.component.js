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
var data_service_1 = require("../../../services/data.service");
var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(data, route) {
        this.data = data;
        this.route = route;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.applicant = message; });
        this.id = this.route.snapshot.queryParamMap.get('_id');
        this.applicant = JSON.stringify(this.applicant);
        console.log('data is : ', this.id);
    };
    CallbackComponent = __decorate([
        core_1.Component({
            selector: 'app-callback',
            templateUrl: './callback.component.html'
            // styleUrls: ['./callback.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute])
    ], CallbackComponent);
    return CallbackComponent;
}());
exports.CallbackComponent = CallbackComponent;
//# sourceMappingURL=callback.component.js.map