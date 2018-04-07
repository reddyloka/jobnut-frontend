// tslint:disable-next-line:no-empty-interface
export interface Dashboard {
    active: Boolean;
}

export class Userbase {
    fname: string;
    lname: string;
    password: string;
    email: string;
    industry: string;
    designation: string;
    address: string;
    country: string;
    state: string;
    city: string;
    profilePhoto: string;
    admin: boolean;
    isHr: boolean;
    isApplicant: boolean;
    status: boolean;

    constructor(f: string, l: string, p: string, em: string, ind: string, des: string, cntr: string, st: string, c: string, pp: string, ad: boolean, ihr: boolean, iApl: boolean, sta: boolean) {
        this.fname = f;
        this.lname = l;
        this.password = p;
        this.email = em;
        this.industry = ind;
        this.designation = des;
        this.country = cntr;
        this.state = st;
        this.city = c;
        this.profilePhoto = pp;
        this.isHr = ihr;
        this.isApplicant = iApl;
        this.admin = ad;
        this.status = sta;
    }

    public static createBlankUser() {
        return new Userbase(null, null, null, null, null, null, null, null, null, null, false, false, false, false);
    }
}
