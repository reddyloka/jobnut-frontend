import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-qul',
  templateUrl: './qul.component.html',
  styleUrls: ['./qul.component.css']
})
export class QulComponent implements OnInit {

  qualForm: FormGroup;
  myFieldInfo1: boolean;
  myFieldInfo: boolean;
  @Input()
  myDegryIn;
  @Input()
  myFiedStatus;
  @Output()
  degrySelect = new EventEmitter<string>();


  applicantForm: FormGroup;
  higherEducationValue: string;
  addMore1: boolean;
  twelthInfo1: boolean;
  doctorateInfo1: boolean;
  highestDegreeArray: string[];
  coursesArray: string[];
  specializationArray: string[];
  yearArray: string[];
  boardArray: string[];
  mediumArray: string[];

  constructor() {
    this.coursesArray = ['Ph.D/Doctorate', 'MPHIL'];
    this.specializationArray = ['Agriculture', 'Advertising'];
    this.yearArray = ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004'];
    this.boardArray = ['CBSE', 'ICSE', 'ISC'];
    this.mediumArray = ['Telugu', 'Hindi', 'English', 'Kannada', 'Sanskrit'];
  }

  ngOnInit() {
    this.qualForm = new FormGroup({
      'higherDegreeValue1': new FormControl(null, Validators.required),
      'courseValue1': new FormControl(null, Validators.required),
      'specializationValue1': new FormControl(null, Validators.required),
      'universityName1': new FormControl(null, Validators.required),
      'passingYearValue1': new FormControl(null, Validators.required),
      'boardValue1': new FormControl(null, Validators.required),
      'passingValue1': new FormControl(null, Validators.required),
      'mediumValue1': new FormControl(null, Validators.required),
      'percentageValue1': new FormControl(null, Validators.required)

    });
  }

  highestEducation1(value) {
    this.degrySelect.emit(value);
    if (this.myFiedStatus['Doctorate/Phd']) {
      this.myFieldInfo = true;
    } else if (this.myFiedStatus['Masters/Post-Graduation']) {
      this.myFieldInfo = true;
    } else if (this.myFiedStatus['Graduation/Diploma']) {
      this.myFieldInfo = true;
    } else if (this.myFiedStatus['12th']) {
      this.myFieldInfo1 = true;
    } else if (this.myFiedStatus['10th']) {
      this.myFieldInfo1 = true;

    }
  }
  qualificationData() {
    console.log('qualification data', this.qualForm);
  }

}
