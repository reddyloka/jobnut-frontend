"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Userbase = /** @class */ (function () {
    function Userbase(f, l, p, em, ind, des, cntr, st, c, phone, skillValue, jobProfile, pp, ad, ihr, iApl, sta) {
        this.firstname = f;
        this.lastname = l;
        this.password = p;
        this.email = em;
        this.industry = ind;
        this.designation = des;
        this.country = cntr;
        this.state = st;
        this.city = c;
        this.phone = phone;
        this.skillValue = skillValue;
        this.jobProfile = jobProfile;
        this.profile_photo = pp;
        this.isHr = ihr;
        this.isApplicant = iApl;
        this.admin = ad;
        this.status = sta;
    }
    Userbase.createBlankUser = function () {
        return new Userbase(null, null, null, null, null, null, null, null, null, null, [], null, null, false, false, false, false);
    };
    return Userbase;
}());
exports.Userbase = Userbase;
//# sourceMappingURL=userbase.js.map