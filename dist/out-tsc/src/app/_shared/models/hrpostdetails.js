"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HrPostDetail = /** @class */ (function () {
    function HrPostDetail(id, title, companyname, description, startdate, enddate, skills, location, salary, experinece, dateOfJoining, extraRequirement, noOfJobOpenings, CompanyUrl, bondDetails, ReportingVenue, ResourcePersonContact, selectionProcedure, applicants) {
        this._id = id;
        this.title = title;
        this.companyname = companyname;
        this.description = description;
        this.startdate = startdate;
        this.enddate = enddate;
        this.skills = skills;
        this.location = location;
        this.salary = salary;
        this.experinece = experinece;
        this.dateOfJoining = dateOfJoining;
        this.extraRequirement = extraRequirement;
        this.noOfJobOpenings = noOfJobOpenings;
        this.CompanyUrl = CompanyUrl;
        this.bondDetails = bondDetails;
        this.ReportingVenue = ReportingVenue;
        this.ResourcePersonContact = ResourcePersonContact;
        this.selectionProcedure = selectionProcedure;
        this.applicants = applicants;
    }
    HrPostDetail.createblank = function () {
        return new HrPostDetail(null, null, null, null, null, null, [], null, null, null, null, null, null, null, null, null, null, null, []);
    };
    return HrPostDetail;
}());
exports.HrPostDetail = HrPostDetail;
//# sourceMappingURL=hrpostdetails.js.map