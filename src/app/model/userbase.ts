// tslint:disable-next-line:no-empty-interface
export interface Dashboard {
    active: Boolean;
}

export class Userbase {
    // id: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
    dob: Date;
    phone: String;
    address: string;
    location: string;
    gender: string;
    skillValue: string;
    profilePhoto: string;
    dashboard: Dashboard;
    isHr: boolean;
    isApplicant: boolean;
    admin: boolean;
    status: boolean;

    constructor(f: string, l: string, em: string, p: string, pp: string,
        dob: Date, phone: string, skillValue: string, address: string, location: string, gender: string,
        dashB: Dashboard, ihr: boolean, iApl: boolean, ad: boolean, st: boolean) {
        this.fname = f;
        this.lname = l;
        this.email = em;
        this.dob = dob;
        this.phone = phone;
        this.address = address;
        this.location = location;
        this.gender = gender;
        this.skillValue = skillValue;
        this.password = p;
        this.profilePhoto = pp;
        this.dashboard = dashB;
        this.isHr = ihr;
        this.isApplicant = iApl;
        this.admin = ad;
        this.status = st;
    }

    public static createBlankUser() {
        return new Userbase(null, null, null, null, null, null, null, null, null, null, null, null, false, false, false, false);
    }
}
