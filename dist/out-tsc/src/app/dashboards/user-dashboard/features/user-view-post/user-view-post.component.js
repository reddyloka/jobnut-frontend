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
var UserViewPostComponent = /** @class */ (function () {
    function UserViewPostComponent() {
        this.userclick = new core_1.EventEmitter();
    }
    UserViewPostComponent.prototype.userclicked = function () {
        this.userclick.emit(this.hrpost._id);
    };
    UserViewPostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserViewPostComponent.prototype, "hrpost", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserViewPostComponent.prototype, "userclick", void 0);
    UserViewPostComponent = __decorate([
        core_1.Component({
            selector: 'app-user-view-post',
            templateUrl: './user-view-post.component.html',
            styleUrls: ['./user-view-post-component.css']
        }),
        __metadata("design:paramtypes", [])
    ], UserViewPostComponent);
    return UserViewPostComponent;
}());
exports.UserViewPostComponent = UserViewPostComponent;
//# sourceMappingURL=user-view-post.component.js.map