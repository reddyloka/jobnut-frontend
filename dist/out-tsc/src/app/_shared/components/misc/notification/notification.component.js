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
var notification_service_1 = require("../../../services/notification.service");
// import { NotificationService } from '../../../_shared/notification.service';
// @Directive({
//   // tslint:disable-next-line:directive-selector
//   selector: '[popup]'
// })
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(_notif) {
        var _this = this;
        this._notif = _notif;
        this.cssClass = 'active';
        this.donePopup = new core_1.EventEmitter();
        this.message = _notif.message;
        this.title = _notif.title;
        this.stay = _notif.stay;
        this.isActive = _notif.activatePopup;
        // this.cssClass = this.isActive ? 'active' : 'hidden';
        console.log('_notif- ', _notif);
        setTimeout(function () {
            _this.donePopup.emit(false);
        }, this.stay);
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    // ngOnChanges(changes: SimpleChanges): void {
    //   if (this.data) {
    // Object.assign(this, this.data);
    //   }
    //   console.log(this);
    // }
    NotificationComponent.prototype.ngOnChanges = function () {
        this.message = this._notif.message;
        this.title = this._notif.title;
        this.stay = this._notif.stay;
        this.isActive = this._notif.activatePopup;
    };
    NotificationComponent.prototype.displayMessage = function () {
        console.log('messa: ', this.message);
        this.donePopup.emit(false);
    };
    __decorate([
        core_1.HostBinding('attr.class'),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "cssClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "donePopup", void 0);
    __decorate([
        core_1.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NotificationComponent.prototype, "displayMessage", null);
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'app-notification',
            templateUrl: './notification.component.html'
        }),
        __metadata("design:paramtypes", [notification_service_1.NotificationService])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification.component.js.map