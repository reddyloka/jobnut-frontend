"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hrbase = /** @class */ (function () {
    function Hrbase(f, l, em, p, pp, dob, phone, industry, skillValue, currDesignation, jobProfile, address, country, city, state, gender, experience, dashB, ihr, iApl, ad, st, des) {
        this.firstName = f;
        this.lastName = l;
        this.email = em;
        this.dob = dob;
        this.phone = phone;
        this.industry = industry;
        this.address = address;
        this.country = country;
        this.city = city;
        this.state = state;
        this.gender = gender;
        this.skillValue = skillValue;
        this.currDesignation = currDesignation;
        this.jobProfile = jobProfile;
        this.experience = experience;
        this.password = p;
        this.profile_photo = pp;
        this.dashboard = dashB;
        this.isHr = ihr;
        this.isApplicant = iApl;
        this.admin = ad;
        this.status = st;
        this.designation = des;
    }
    Hrbase.createBlankUser = function () {
        return new Hrbase(null, null, null, null, null, null, null, null, [], null, null, null, null, null, null, null, [], null, false, false, false, false, null);
    };
    return Hrbase;
}());
exports.Hrbase = Hrbase;
//# sourceMappingURL=hrbase.js.map