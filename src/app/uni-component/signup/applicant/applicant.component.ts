import { Component, OnInit } from '@angular/core';
// import { FormsModule} from '@angular/forms';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
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


  constructor() {
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
    this.buildFormGroup();
    // this.nextInfo = true;
  }
  buildFormGroup(): void {
    const fg = {
    'name': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'dob': new FormControl(null, [Validators.required]),
    'password': new FormControl(null, Validators.required),
    'phone': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)] ),
    'higherDegreeValue': new FormControl(null, ),
    'courseValue': new FormControl(null, ),
    'specializationValue': new FormControl(null, ),
    'universityName': new FormControl(null, ),
    'passingYearValue': new FormControl(null, ),
    'boardValue': new FormControl(null, ),
    'passingValue': new FormControl(null, ),
    'mediumValue': new FormControl(null, ),
    'percentageValue': new FormControl(null, ),
    'skillsValue': new FormControl(null, Validators.required),
     };
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
  onSubmit(value: any) {
  
    console.log('form value is', value);
  }
}
