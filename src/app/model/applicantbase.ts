
export interface Education {
    higherDegreeValue: string;
    universityName: string;
    passingYearValue: string;
    percentageValue: string;
}

export interface Experience {
    profileTitle: string;
    totalExperienceYear: string;
    Description: string;

}


export interface Dashboard {
    active: Boolean;
}

export class ApplicantBase {
    firstName: string;
    lastName: string;
    email: string;
    dob: Date;
    password: string;
    phone: number;
    address: string;
    location: string;
    gender: string;
    skillValue: string[];
    dashboard: Dashboard;
    isApplicant: boolean;
    isHr: boolean;
    status: boolean;
    education: Education[];
    experience: Experience[];

    constructor(firstName: string, lastName: string, email: string, dob: Date, password: string, phone: number, address: string, location: string, gender: string, skillValue: string[], isA: boolean, dashB: Dashboard, isH: boolean, st: boolean, education: Education[], experience: Experience[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.location = location;
        this.gender = gender;
        this.skillValue = skillValue;
        this.dashboard = dashB;
        this.isApplicant = isA;
        this.isHr = isH;
        this.status = st;
        this.education = education;
        this.experience = experience;

    }

    public static createblank(): ApplicantBase {
        return new ApplicantBase(null, null, null, null, null, null, null, null, null, [], null, null, null, null, [{higherDegreeValue: '', universityName: '', passingYearValue: '', percentageValue: ''}], [{ profileTitle: '', totalExperienceYear: '', Description: ''}]);
    }
}
