import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TryService } from '../try.service';


@Component({
  selector: 'app-ed',
  templateUrl: './ed.component.html',
  styleUrls: ['./ed.component.css']
})

export class EdComponent implements OnInit {
  degryOut1: string[];
  indexValue: any;
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


  // vars

  qualifications: string[];
  base: string;
  degryIn: string[];
  degryOut: string[];
  fieldStatus: any;


  constructor(private route: Router, private _tryservice: TryService) {
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
    this.degryIn = [];
    this.degryOut = ['Doctorate/Phd', 'Masters/Post-Graduation', 'Graduation/Diploma', '12th', '10th', 'Below 10th'];
    this.coursesArray = ['Ph.D/Doctorate', 'MPHIL'];
    this.specializationArray = ['Agriculture', 'Advertising'];
    this.yearArray = ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004'];
    this.boardArray = ['CBSE', 'ICSE', 'ISC'];
    this.mediumArray = ['Telugu', 'Hindi', 'English', 'Kannada', 'Sanskrit'];
    this.skills = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML',
      'Information Architecture', 'Javascript', 'Mechanical Engineering',
      'Meteor', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'
    ];

    // vars

    this.qualifications = [];
    this.fieldStatus = {
      'Doctorate/Phd': false,
      'Masters/Post-Graduation': false,
      'Graduation/Diploma': false,
      '12th': false,
      '10th': false,
      'Below 10th': false
    };
    this.indexValue = 0;
    this.degryOut1 = [];


    _tryservice.changeEmitted$.subscribe(
      event => {
        console.log(event, 'has been clicked');
        this.route.navigateByUrl('try/education');
      });

  }
  ngOnInit() {
    this.applicantForm = new FormGroup({
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

  otherFunction() {
    console.log('other function');
    this.otherInfo = true;
  }


  highestEducation(value0: string) {
    this.base = value0;
    for (const key in this.fieldStatus) {
      if (this.fieldStatus.hasOwnProperty(key)) {
        this.fieldStatus[key] = false;
      }
    }
    this.fieldStatus[value0] = true;
    if (value0 === 'Doctorate/Phd') {
      this.addMore1 = true;
    } else if (value0 === 'Masters/Post-Graduation') {
      this.addMore1 = true;
    } else if (value0 === 'Graduation/Diploma') {
      this.addMore1 = true;
    } else if (value0 === '12th') {
      this.addMore1 = true;
    } else if (value0 === '10th') {
      this.addMore1 = false;
    }
  }

  highestEducation1(value1: string) {
    this.base = value1;
    if (value1 === 'Doctorate/Phd') {
      this.doctorateInfo = true;
      this.twelthInfo = false;
      this.addMore1 = true;
    } else if (value1 === 'Masters/Post-Graduation') {
      this.doctorateInfo = true;
      this.twelthInfo = false;
      this.addMore1 = true;
    } else if (value1 === 'Graduation/Diploma') {
      this.doctorateInfo = true;
      this.twelthInfo = false;
      this.addMore1 = true;
    } else if (value1 === '12th') {
      this.doctorateInfo = false;
      this.twelthInfo = true;
      this.addMore1 = true;
    } else if (value1 === '10th') {
      this.doctorateInfo = false;
      this.twelthInfo = true;
    } else if (value1 === 'Below 10th') {
      this.doctorateInfo = false;
      this.twelthInfo = false;
    }
  }

  addMoreQualifications() {
    this.addMore1 = false;
    // tslint:disable-next-line:no-unused-expression
    this.qualifications.push(this.base);
    console.log('qweekArray', this.qualifications);
    this.degryOut.forEach((element, index) => {
      for (const i of this.qualifications) {
        if (i === element) {
          this.indexValue = index;
        }
      }
    });
    this.degryIn = this.degryOut.slice(this.indexValue, 5);

  }

  onSubmit() {
    // tslint:disable-next-line:no-unused-expression
    this.applicantForm

    console.log('form value is', this.applicantForm);
  }

  // personalDetailClicked(event) {
  //   // this.educationInfo = true;
  //   // this.personalInfo = false;
  // console.log(event, 'has been clicked');
  // this.route.navigateByUrl('signin-applicant/education');

  // }

}
