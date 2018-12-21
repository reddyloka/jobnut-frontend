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
var http_1 = require("@angular/http");
var QuotesService = /** @class */ (function () {
    function QuotesService(http) {
        this.http = http;
    }
    QuotesService.prototype.getQOD = function () {
        return fetch('http://quotes.rest/qod.json').then(function (res) { return res.json(); }).then(function (d) {
            console.log('dataaaaaaaaaa\n\n', d.contents.quotes[0].quote);
            return d.contents.quotes[0].quote;
        });
        // this.quoteOfTheDay = data;
        // console.log(this.quoteOfTheDay.contents.quotes[0].quote);
    };
    QuotesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], QuotesService);
    return QuotesService;
}());
exports.QuotesService = QuotesService;
//# sourceMappingURL=quotes.service.js.map