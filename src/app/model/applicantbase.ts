
export class ApplicantBase {

    higherDegreeValue: string;
    courseValue: string;
    specializationValue: string;
    universityName: string;
    passingYearValue: string;
    boardValue: string;
    passingValue: string;
    mediumValue: string;
    percentageValue: string;
    skillValue: string;
    fname: string;
    lname: string;
    email: string;
    dob: Date;
    password: string;
    phone: number;
    isApplicant: boolean;
    isHr: boolean;
    status: boolean;

    constructor(fname: string, lname: string, email: string, dob: Date, password: string, phone: number, higherDegreeValue: string, courseValue: string, specializationValue: string,
        universityName: string, passingYearValue: string, boardValue: string, passingValue: string, mediumValue: string, percentageValue: string, skillValue: string, isA: boolean, isH: boolean, st: boolean) {
        this.fname = fname;
        this.lname = lname;

        this.email = email;
        this.dob = dob;
        this.password = password;
        this.phone = phone;
        this.higherDegreeValue = higherDegreeValue;
        this.courseValue = courseValue;
        this.specializationValue = specializationValue;
        this.universityName = universityName;
        this.passingYearValue = passingYearValue;
        this.boardValue = boardValue;
        this.passingValue = passingValue;
        this.mediumValue = mediumValue;
        this.percentageValue = percentageValue;
        this.skillValue = skillValue;
        this.isApplicant = isA;
        this.isHr = isH;
        this.status = st;

    }
    // public static SignupDetailsFromJSON(obj: any): ApplicantBase {
    //     return new ApplicantBase(obj.fname, obj.email, obj.dob, obj.password, obj.phone, obj.higherDegreeValue, obj.courseValue,
    //         obj.specializationValue, obj.universityName, obj.passingYearValue, obj.boardValue, obj.passingValue, obj.mediumValue,
    //         obj.percentageValue, obj.skillValue);
    // }
    public static createblank(): ApplicantBase {
        // return new ApplicantBase('loka anvesh reddy', 'lokaanvesh2@gmail.com', '29/07/1997', 'sudhakar123', '9592038184');
        return new ApplicantBase('', '', '', null, '', null, '', '', '', '', '', '', '', '', '', '', null, null, null);
    }
}
