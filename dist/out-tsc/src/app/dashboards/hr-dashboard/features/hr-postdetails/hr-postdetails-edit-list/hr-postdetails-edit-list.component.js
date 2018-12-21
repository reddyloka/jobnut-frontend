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
var hrbase_service_1 = require("../../../../../_shared/services/hrbase.service");
var HrPostdetailsEditListComponent = /** @class */ (function () {
    function HrPostdetailsEditListComponent(hrbaseservice, router) {
        this.hrbaseservice = hrbaseservice;
        this.router = router;
        this.saveClick = new core_1.EventEmitter();
        this.buildFormGroup();
        this.skillsArray = ['Angular', 'ASP.Net', 'C#', 'C#.Net', 'ADO.Net', 'SQL Server', 'Spring', 'C', 'C++', 'JAVA', 'CSS', 'Graphic Design', 'Ember', 'DataBase', 'PHP', 'Full Stack Developing', 'Testing', 'HTML', 'Javascript', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
    }
    HrPostdetailsEditListComponent.prototype.buildFormGroup = function () {
        var fg = {
            'title': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'description': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'companyname': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'startdate': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'enddate': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'skills': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'location': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'salary': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'experinece': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'dateOfJoining': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'extraRequirement': new forms_1.FormControl(null, []),
            'noOfJobOpenings': new forms_1.FormControl(null, []),
            'CompanyUrl': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'bondDetails': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'ReportingVenue': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'ResourcePersonContact': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'selectionProcedure': new forms_1.FormControl(null, [forms_1.Validators.required]),
        };
        this.hrpostNewDataForm = new forms_1.FormGroup(fg);
    };
    HrPostdetailsEditListComponent.prototype.ngOnInit = function () {
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.id = this.hrpost._id;
    };
    HrPostdetailsEditListComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('edit', this.hrpostNewDataForm.value);
        this.hrbaseservice.HrPostUpdate(this.hrpostNewDataForm.value, this.id).
            subscribe(function () {
            _this.saveClick.emit(true);
            console.log('success');
        });
    };
    HrPostdetailsEditListComponent.prototype.discardClicked = function () {
        window.alert('Your changes will not get updated in our database');
        this.router.navigateByUrl('hr/jobs-posted');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HrPostdetailsEditListComponent.prototype, "hrpost", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HrPostdetailsEditListComponent.prototype, "saveClick", void 0);
    HrPostdetailsEditListComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-postdetails-edit-list',
            templateUrl: './hr-postdetails-edit-list.component.html',
        }),
        __metadata("design:paramtypes", [hrbase_service_1.HrbaseService,
            router_1.Router])
    ], HrPostdetailsEditListComponent);
    return HrPostdetailsEditListComponent;
}());
exports.HrPostdetailsEditListComponent = HrPostdetailsEditListComponent;
//# sourceMappingURL=hr-postdetails-edit-list.component.js.map