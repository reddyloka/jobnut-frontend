"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicantBase = /** @class */ (function () {
    function ApplicantBase(firstName, lastName, dob, gender, phone, email, password, state, city, address, country, skillValue, isA, dashB, isH, st, pp, education, experience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.state = state;
        this.city = city;
        this.address = address;
        this.country = country;
        this.skillValue = skillValue;
        this.dashboard = dashB;
        this.isApplicant = isA;
        this.isHr = isH;
        this.status = st;
        this.profile_photo = pp;
        this.education = education;
        this.experience = experience;
    }
    ApplicantBase.createblank = function () {
        return new ApplicantBase(null, null, null, null, null, null, null, null, null, null, null, [], null, null, null, null, null, [{ higherDegreeValue: '', universityName: '', passingYearValue: '', percentageValue: '' }], []);
    };
    return ApplicantBase;
}());
exports.ApplicantBase = ApplicantBase;
//# sourceMappingURL=applicantbase.js.map