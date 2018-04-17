
export interface Education {
    higherDegreeValue: string;
    universityName: string;
    passingYearValue: string;
    percentageValue: string;
}

export interface Experience {
    designation: string;
    totalExperiences: string;
    description: string;

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
    profile_photo: string;
    newEducation: Education;
    education: Education[];
    experience: Experience[];

    constructor(firstName: string, lastName: string, email: string, dob: Date, password: string, phone: number, address: string, location: string, gender: string, skillValue: string[], isA: boolean, dashB: Dashboard, isH: boolean, st: boolean, pp: string, education: Education[], experience: Experience[]) {
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
        this.profile_photo = pp;
        this.education = education;
        this.experience = experience;

    }

    public static createblank(): ApplicantBase {
        return new ApplicantBase(null, null, null, null, null, null, null, null, null, [], null, null, null, null, null, [{ higherDegreeValue: '', universityName: '', passingYearValue: '', percentageValue: '' }], []);
    }

    // public static createblankeducation(): Education {
    //     return this.newEducation;
    // }
}
