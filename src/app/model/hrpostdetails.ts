
export class HrPostDetail {
    id: string;
    title: string;
    companyname: string;
    description: string;
    startdate: Date;
    enddate: Date;
    skills: string;
    location: string;
    salary: number;
    experinece: string;
    dateOfJoining: Date;
    extraRequirement: string;
    noOfJobOpenings: number;
    CompanyUrl: string;
    bondDetails: any;
    ReportingVenue: any;
    ResourcePersonContact: any;
    selectionProcedure: string;

    constructor(id: string, title: string, companyname: string, description: string, startdate: Date, enddate: Date, skills: string, location: string , salary: number, experinece: string, dateOfJoining: Date, extraRequirement: string, noOfJobOpenings: number, CompanyUrl: string, bondDetails: any, ReportingVenue: any, ResourcePersonContact: any, selectionProcedure: string) {
        this.id = id;
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
        this.selectionProcedure =  selectionProcedure;

    }

    // public static PostDetailsFromJSON(obj: any): HrPostDetail {
    //     return new HrPostDetail(obj.id , obj.title , obj.companyname, obj.description, obj.startdate, obj.enddate, obj.skills, obj.location, obj.salary, obj.experinece, obj.dateOfJoining, obj.extraRequirement, obj.noOfJobOpenings, obj.CompanyUrl, obj.bondDetails, obj.ReportingVenue, obj.ResourcePersonContact, obj.selectionProcedure);
    // }

    public static createblank(): HrPostDetail {

        return new HrPostDetail(null , '', '',  '', null, null, '', '', null, '', null, '', null, '', '', '', '', '');
        }

}
