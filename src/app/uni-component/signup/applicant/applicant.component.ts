import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  doctorateInfo1: boolean;
  twelthInfo1: boolean;
  fieldStatus: any;
  indexValue: number;
  degryIn: string[];
  qualifications: any[];
  base: any;
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
    this.skills = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML',
                    'Information Architecture', 'Javascript', 'Mechanical Engineering',
                    'Meteor', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby', ];
    this.qualifications = [];
    this.degryIn = ['Doctorate/Phd', 'Masters/Post-Graduation', 'Graduation/Diploma', '12th', '10th', 'Below 10th'];
    this.fieldStatus = {
      'Doctorate/Phd': false,
      'Masters/Post-Graduation': false,
      'Graduation/Diploma': false,
      '12th': false,
      '10th': false,
      'Below 10th': false
    };
  }
  ngOnInit() {
    this.applicantForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'number': new FormControl(null, Validators.required),
      'higherDegreeValue': new FormControl(null, Validators.required),
      'courseValue': new FormControl(null, Validators.required),
      'specializationValue': new FormControl(null, Validators.required),
      'universityName': new FormControl(null, Validators.required),
      'passingYearValue': new FormControl(null, Validators.required),
      'boardValue': new FormControl(null, Validators.required),
      'passingValue': new FormControl(null, Validators.required),
      'mediumValue': new FormControl(null, Validators.required),
      'percentageValue': new FormControl(null, Validators.required),
      'skillsValue': new FormControl(null, Validators.required),

    });
  }
  personalDetailClicked() {
    this.educationInfo = true;
    this.personalInfo = false;
  }
  // otherFunction() {
  //   console.log('other function');
  //   this.otherInfo = true;
  // }


  highestEducation(value0: string) {
    this.base = value0;
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

  highestEducation1(value0: string) {
    this.base = value0;
    for (const key in this.fieldStatus) {
      if (this.fieldStatus.hasOwnProperty(key)) {
        this.fieldStatus[key] = false;
      }
    }
    this.fieldStatus[value0] = true;
    if (value0 === 'Doctorate/Phd') {
      this.doctorateInfo1 = true;
      this.twelthInfo1 = false;
      this.addMore1 = true;
    } else if (value0 === 'Masters/Post-Graduation') {
      this.doctorateInfo1 = true;
      this.twelthInfo1 = false;
      this.addMore1 = true;
    } else if (value0 === 'Graduation/Diploma') {
      this.doctorateInfo1 = true;
      this.twelthInfo1 = false;
      this.addMore1 = true;
    } else if (value0 === '12th') {
      this.doctorateInfo1 = false;
      this.twelthInfo1 = true;
      this.addMore1 = true;
    } else if (value0 === '10th') {
      this.doctorateInfo1 = false;
      this.twelthInfo1 = true;
      this.addMore1 = false;
    }
  }

  // addMoreQualifications2() {
  //   if (this.higherEducationValue === 'Doctorate/Phd') {
  //     this.addEducation1 = true;
  //     this.addMore1 = false;
  //   } else if (this.higherEducationValue === 'Masters/Post-Graduation') {
  //     this.addEducation2 = true;
  //     this.addMore1 = false;
  //   } else if (this.higherEducationValue === 'Graduation/Diploma') {
  //     this.addEducation3 = true;
  //     this.addMore1 = false;
  //   } else if (this.higherEducationValue === '12th') {
  //     this.addEducation4 = true;
  //     this.addMore1 = false;
  //   }
  // }
  addMoreQualifications2() {
    this.addMore1 = false;
    // tslint:disable-next-line:no-unused-expression
    this.qualifications.push(this.base);
    // console.log('qweekArray', this.qualifications);
    // this.highestDegreeArray.forEach((element, index) => {
    //   for (const i of this.qualifications) {
    //     if (i === element) {
    //       this.indexValue = index;
    //     }
    //   }
    // });
    // this.degryIn = this.highestDegreeArray;
    if (this.base === 'Doctorate/Phd') {
        this.degryIn.shift();
    } else if (this.base === 'Masters/Post-Graduation') {
      this.degryIn.shift();
    } else if (this.base === 'Graduation/Diploma') {
      this.degryIn.shift();
    } else if (this.base === '12th') {
      this.degryIn.shift();
      this.degryIn.shift();
      this.degryIn.shift();
      this.degryIn.shift();
    }

  }

  // addMoreQualifications5(event: string) {
  //   if (event === 'Masters/Post-Graduation') {
  //     this.addEducation2 = true;

  //   } else if (event === 'Graduation/Diploma') {
  //     this.addEducation3 = true;

  //   } else if (event === '12th') {
  //     this.addEducation4 = true;

  //   }
  // }

  onSubmit() {
    console.log('form value is', this.applicantForm);
  }
}
