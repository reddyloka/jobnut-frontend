import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { UserBaseService } from '../../../services/userbase/user-base.service';
import { ApplicantBase } from '../../../model/applicantbase';
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  skills: string[];
  applicantForm: FormGroup;
  higherEducationValue: string;
  qualificationArray1: any[];
  qualificationArray2: any[];
  qualificationArray3: any[];
  qualificationArray4: any[];
  mediumArray: string[];
  boardArray: string[];
  coursesArray: string[];
  specializationArray: string[];
  yearArray: (string | number)[];
  personalInfo: boolean;
  educationInfo: boolean;
  doctorateInfo: boolean;
  twelthInfo: boolean;
  belowTenth: boolean;
  otherInfo: boolean;
  addEducation1: boolean;
  addEducation2: boolean;
  addEducation3: boolean;
  addEducation4: boolean;
  addMore1: boolean;
  addMore2: boolean;
  addMore3: boolean;
  addMore4: boolean;
  highestDegreeArray: string[];
  nextInfo: boolean;

  user_details: ApplicantBase;
  profile_photo: File;
  isApplicant: boolean;
  isHr: boolean;
  status: boolean;


  constructor(private _userService: UserBaseService) {
    this.user_details = ApplicantBase.createblank();
    this.buildFormGroup();
    this.personalInfo = true;
    this.educationInfo = false;
    this.doctorateInfo = false;
    this.twelthInfo = false;
    this.belowTenth = false;
    this.otherInfo = false;
    this.addMore1 = false;
    this.addMore2 = false;
    this.addMore3 = false;
    this.addMore4 = false;
    this.addEducation1 = false;
    this.addEducation2 = false;
    this.addEducation3 = false;
    this.addEducation4 = false;
    this.qualificationArray1 = ['Masters/Post-Graduation', 'Graduation/Diploma', '12th', '10th'];
    this.qualificationArray2 = ['Graduation/Diploma', '12th', '10th'];
    this.qualificationArray3 = ['12th', '10th'];
    this.qualificationArray4 = ['10th'];
    this.highestDegreeArray = ['Doctorate/Phd', 'Masters/Post-Graduation', 'Graduation/Diploma', '12th', '10th', 'Below 10th'];
    this.coursesArray = ['Ph.D/Doctorate', 'MPHIL'];
    this.specializationArray = ['Agriculture', 'Advertising'];
    this.yearArray = ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004'];
    this.boardArray = ['CBSE', 'ICSE', 'ISC'];
    this.mediumArray = ['Telugu', 'Hindi', 'English', 'Kannada', 'Sanskrit'];
    this.skills = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML',
      'Information Architecture', 'Javascript', 'Mechanical Engineering',
      'Meteor', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
    this.profile_photo = null;
    this.isApplicant = true;
    this.isHr = false;
    this.status = true;
  }
  buildFormGroup(): void {
    const fg = {
      'fname': new FormControl(this.user_details.fname, [Validators.required]),
      'lname': new FormControl(this.user_details.lname, [Validators.required]),
      'email': new FormControl(this.user_details.email, [Validators.required, Validators.email]),
      'dob': new FormControl(this.user_details.dob, [Validators.required]),
      'password': new FormControl(this.user_details.password, Validators.required),
      'phone': new FormControl(this.user_details.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'higherDegreeValue': new FormControl(this.user_details.higherDegreeValue, ),
      'courseValue': new FormControl(this.user_details.courseValue, ),
      'specializationValue': new FormControl(this.user_details.specializationValue, ),
      'universityName': new FormControl(this.user_details.universityName, ),
      'passingYearValue': new FormControl(this.user_details.passingValue, ),
      'boardValue': new FormControl(this.user_details.boardValue, ),
      'passingValue': new FormControl(this.user_details.passingValue, ),
      'mediumValue': new FormControl(this.user_details.mediumValue, ),
      'percentageValue': new FormControl(this.user_details.percentageValue, ),
      'skillValue': new FormControl(this.user_details.skillValue, Validators.required),
    };
    this.user_details.isApplicant = this.isApplicant;
    this.user_details.isHr = this.isHr;
    this.user_details.status = this.status;
    this.applicantForm = new FormGroup(fg);
  }
  ngOnInit() {
  }
  personalDetailClicked() {
    this.educationInfo = true;
    this.personalInfo = false;
  }
  adddataform(event: any) {
    console.log('event', event);
  }
  otherFunction() {
    console.log('other function');
    this.otherInfo = true;
  }


  highestEducation(value0: string) {
    this.higherEducationValue = value0;
    if (value0 === 'Doctorate/Phd') {
      this.doctorateInfo = true;
      this.twelthInfo = false;
      this.addMore1 = true;
    } else if (value0 === 'Masters/Post-Graduation') {
      this.doctorateInfo = true;
      this.twelthInfo = false;
      this.addMore1 = true;
    } else if (value0 === 'Graduation/Diploma') {
      this.doctorateInfo = true;
      this.twelthInfo = false;
      this.addMore1 = true;
    } else if (value0 === '12th') {
      this.doctorateInfo = false;
      this.twelthInfo = true;
      this.addMore1 = true;
    } else if (value0 === '10th') {
      this.doctorateInfo = false;
      this.twelthInfo = true;
    } else if (value0 === 'Below 10th') {
      this.doctorateInfo = false;
      this.twelthInfo = false;
      this.belowTenth = true;
    }
  }

  addMoreQualifications2() {
    if (this.higherEducationValue === 'Doctorate/Phd') {
      this.addEducation1 = true;
      this.addMore1 = false;
    } else if (this.higherEducationValue === 'Masters/Post-Graduation') {
      this.addEducation2 = true;
      this.addMore1 = false;
    } else if (this.higherEducationValue === 'Graduation/Diploma') {
      this.addEducation3 = true;
      this.addMore1 = false;
    } else if (this.higherEducationValue === '12th') {
      this.addEducation4 = true;
      this.addMore1 = false;
    }
  }

  addMoreQualifications5(event: string) {
    if (event === 'Masters/Post-Graduation') {
      this.addEducation2 = true;

    } else if (event === 'Graduation/Diploma') {
      this.addEducation3 = true;

    } else if (event === '12th') {
      this.addEducation4 = true;

    }
  }

  onSubmit() {
    this.buildFormGroup();
    console.log('user detaails for applicant', this.user_details);

    this._userService.addNewUser(this.user_details, {
      profile_photo: this.profile_photo
    })
      .then((result) => {
        console.log(result);
      });
  }
}
