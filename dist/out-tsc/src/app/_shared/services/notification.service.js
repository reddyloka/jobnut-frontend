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
var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.donePopup = new core_1.EventEmitter();
        this.message = 'nothing to display';
        this.title = 'Notifiation';
        this.stay = 3000;
        this.activatePopup = false;
    }
    NotificationService.prototype.pop = function (message, title, stay) {
        console.log('popped', this);
        this.activatePopup = true;
        this.message = message;
        this.title = title;
        this.stay = stay;
        this.donePopup.emit(true);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NotificationService.prototype, "donePopup", void 0);
    NotificationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map