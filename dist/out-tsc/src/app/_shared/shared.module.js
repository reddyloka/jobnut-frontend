"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var numberToWords_pipe_1 = require("./pipes/numberToWords.pipe");
var change_password_component_1 = require("./components/change-password/change-password.component");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_select_1 = require("ng2-select");
var home_page_component_1 = require("./components/home-page/home-page.component");
var router_1 = require("@angular/router");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng2_select_1.SelectModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
            ],
            declarations: [
                numberToWords_pipe_1.NumberToWordsPipe,
                change_password_component_1.ChangePasswordComponent,
                home_page_component_1.HomePageComponent
            ],
            exports: [
                numberToWords_pipe_1.NumberToWordsPipe,
                home_page_component_1.HomePageComponent,
                change_password_component_1.ChangePasswordComponent,
                router_1.RouterModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map