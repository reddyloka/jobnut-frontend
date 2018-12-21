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
var notification_service_1 = require("../../../../../_shared/services/notification.service");
var hrpostdetails_1 = require("../../../../../_shared/models/hrpostdetails");
var uuid_1 = require("../../../../../_shared/models/uuid");
var HrEditNewPostComponent = /** @class */ (function () {
    function HrEditNewPostComponent(hrbaseservice, router, _notif) {
        this.hrbaseservice = hrbaseservice;
        this.router = router;
        this._notif = _notif;
        this.popup = {
            isActive: false,
            message: 'this is popup',
            title: 'My Popup',
            stay: 3000
        };
        this.hrpostNewData = hrpostdetails_1.HrPostDetail.createblank();
        console.log(this.hrpostNewData);
        this.buildFormGroup();
        this.id = uuid_1.uuid();
        this.skillsArray = ['Angular', 'ASP.Net', 'C#', 'C#.Net', 'ADO.Net', 'SQL Server', 'Spring', 'C', 'C++', 'JAVA', 'CSS', 'Graphic Design', 'Ember', 'DataBase', 'PHP', 'Full Stack Developing', 'Testing', 'HTML', 'Javascript', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
    }
    HrEditNewPostComponent.prototype.buildFormGroup = function () {
        var fg = {
            'title': new forms_1.FormControl(this.hrpostNewData.title, [forms_1.Validators.required]),
            'description': new forms_1.FormControl(this.hrpostNewData.description, [forms_1.Validators.required]),
            'companyname': new forms_1.FormControl(this.hrpostNewData.companyname, [forms_1.Validators.required]),
            'startdate': new forms_1.FormControl(this.hrpostNewData.startdate, [forms_1.Validators.required]),
            'enddate': new forms_1.FormControl(this.hrpostNewData.enddate, [forms_1.Validators.required]),
            'skills': new forms_1.FormControl(this.hrpostNewData.skills, [forms_1.Validators.required]),
            'location': new forms_1.FormControl(this.hrpostNewData.location, [forms_1.Validators.required]),
            'salary': new forms_1.FormControl(this.hrpostNewData.salary, [forms_1.Validators.required]),
            'experinece': new forms_1.FormControl(this.hrpostNewData.experinece, [forms_1.Validators.required]),
            'dateOfJoining': new forms_1.FormControl(this.hrpostNewData.dateOfJoining, [forms_1.Validators.required]),
            'extraRequirement': new forms_1.FormControl(this.hrpostNewData.extraRequirement, []),
            'noOfJobOpenings': new forms_1.FormControl(this.hrpostNewData.noOfJobOpenings, []),
            'CompanyUrl': new forms_1.FormControl(this.hrpostNewData.CompanyUrl, [forms_1.Validators.required]),
            'bondDetails': new forms_1.FormControl(this.hrpostNewData.bondDetails, [forms_1.Validators.required]),
            'ReportingVenue': new forms_1.FormControl(this.hrpostNewData.ReportingVenue, [forms_1.Validators.required]),
            'ResourcePersonContact': new forms_1.FormControl(this.hrpostNewData.ResourcePersonContact, [forms_1.Validators.required]),
            'selectionProcedure': new forms_1.FormControl(this.hrpostNewData.selectionProcedure, [forms_1.Validators.required]),
        };
        this.hrpostNewDataForm = new forms_1.FormGroup(fg);
    };
    HrEditNewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.dropdown').dropdown({
            label: {
                duration: 0,
            },
            // debug: true,
            performance: true,
        });
        this.hrbaseservice.getHrDetailsById(this.id).subscribe(function (data) {
            _this.hrdata = data;
        });
    };
    // accept incoming change new notification feature added
    HrEditNewPostComponent.prototype.onSubmit = function () {
        var _this = this;
        this.hrbaseservice.addNewPost(this.hrpostNewData, this.id, {
            'isHr': true,
            'isApplicant': false
        })
            .subscribe(function (res) {
            _this._notif.pop(res.message, 'Successfull', 3000);
            if (res.success) {
                _this.router.navigateByUrl('hr/jobs-posted');
                console.log(res.message, res.data);
            }
        });
        // this.router.navigate(['hr-post']);
    };
    HrEditNewPostComponent = __decorate([
        core_1.Component({
            selector: 'app-hr-edit-new-post',
            templateUrl: './hr-edit-new-post.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [hrbase_service_1.HrbaseService,
            router_1.Router,
            notification_service_1.NotificationService])
    ], HrEditNewPostComponent);
    return HrEditNewPostComponent;
}());
exports.HrEditNewPostComponent = HrEditNewPostComponent;
//# sourceMappingURL=hr-edit-new-post.component.js.map