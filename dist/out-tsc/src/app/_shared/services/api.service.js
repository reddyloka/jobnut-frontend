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
var ApiServiceService = /** @class */ (function () {
    function ApiServiceService() {
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // protected formatErrors(error: any) {
    // return new ErrorObservable(error.error);
    // }
    // get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    // return this.http.get(`${environment.USER_SERVER}${path}`, {
    // params
    // })
    // .pipe(catchError(this.formatErrors));
    // }
    // put(path: string, body: Object = {}): Observable<any> {
    // return this.http.put(
    // `${environment.USER_SERVER}${path}`,
    // JSON.stringify(body)
    // ).pipe(catchError(this.formatErrors));
    // }
    // post(path: string, body: Object = {}): Observable<any> {
    // return this.http.post(
    // `${environment.USER_SERVER}${path}`,
    // JSON.stringify(body)
    // ).pipe(catchError(this.formatErrors));
    // }
    // delete(path): Observable<any> {
    // return this.http.delete(
    // `${environment.USER_SERVER}${path}`
    // ).pipe(catchError(this.formatErrors));
    // }
    ApiServiceService.prototype.post = function () {
        return new http_1.RequestOptions({ headers: this.headers, method: 'post' });
    };
    ApiServiceService.prototype.get = function () {
        return new http_1.RequestOptions({ headers: this.headers });
    };
    ApiServiceService.prototype.put = function () {
        return new http_1.RequestOptions({ headers: this.headers, method: 'put' });
    };
    ApiServiceService.prototype.patch = function () {
        return new http_1.RequestOptions({ headers: this.headers, method: 'patch' });
    };
    ApiServiceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ApiServiceService);
    return ApiServiceService;
}());
exports.ApiServiceService = ApiServiceService;
//# sourceMappingURL=api.service.js.map