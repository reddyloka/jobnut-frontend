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
var forms_1 = require("@angular/forms");
var jwt_service_1 = require("../../services/jwt.service");
var auth_service_1 = require("../../services/auth.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_jwtService, fb, route, router, _authService) {
        this._jwtService = _jwtService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this._authService = _authService;
        this.message = {
            username: {
                text: 'Username Required!',
            },
            password: {
                text: 'Password Required!',
            }
        };
        this.loginForm = fb.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            isHr: [false, forms_1.Validators.required]
        });
        this.cover_photo = '../../assets/images/pics/1.png';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._authService.isLoggedIn) {
            this.router.navigateByUrl('hr');
        }
        this.router.navigateByUrl('');
    };
    LoginComponent.prototype.signupButtonClicked = function () {
        this.router.navigateByUrl('signin');
        return false;
    };
    // abhishek's changes for routing data token jwt
    LoginComponent.prototype.login = function () {
        var _this = this;
        var val = this.loginForm.value;
        // console.log(val);
        if (val.username && val.password) {
            // console.log(' :im here');
            this._authService.login(val)
                .subscribe(function (yo) {
                if (yo.user && yo.user.status && yo.user.isHr) {
                    _this.router.navigateByUrl('hr');
                }
                if (yo.user && yo.user.status && yo.user.isApplicant) {
                    console.log('user logged in', yo);
                    _this.router.navigateByUrl('user-profile/user-view-post');
                }
            }, function (error) {
                alert(error.message);
                console.log('fhfhfhfhfh', error);
            });
        }
    };
    LoginComponent.prototype.forgetPassword = function () {
        this.router.navigateByUrl('forgetPassword');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [jwt_service_1.JwtService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map