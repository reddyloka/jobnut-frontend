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
// import { ToasterService } from 'angular2-toaster';
var notification_service_1 = require("./_shared/services/notification.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, _notif) {
        this.router = router;
        this.title = 'app';
        this._notif = _notif;
        this.notifActivate = this._notif.activatePopup;
    }
    AppComponent.prototype.popupClicked = function (event) {
        console.log('poppup clicking');
        this._notif.activatePopup = event;
        this.notifActivate = event;
        // this._notif.pop('message1', 'message2', 3000);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router,
            notification_service_1.NotificationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map