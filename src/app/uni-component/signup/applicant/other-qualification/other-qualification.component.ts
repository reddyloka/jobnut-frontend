import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-other-qualification',
  templateUrl: './other-qualification.component.html',
  styleUrls: ['./other-qualification.component.css'],

})
export class OtherQualificationComponent implements OnInit {
  applicantForm: FormGroup;
  otherForm: FormGroup;

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
  @Input()
  qualArray;

  @Output() addmore = new EventEmitter<string>();
  addMoreQualifications1() {
    this.addMore1 = false;
    this.addmore.emit(this.higherEducationValue);
    this.qualification();
  }

  // tslint:disable-next-line:member-ordering
  @Output() adddata = new EventEmitter<any>();
  qualification() {
    this.adddata.emit(this.applicantForm);
  }
  constructor() {
    this.coursesArray = ['Ph.D/Doctorate', 'MPHIL'];
    this.specializationArray = ['Agriculture', 'Advertising'];
    this.yearArray = ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004'];
    this.boardArray = ['CBSE', 'ICSE', 'ISC'];
    this.mediumArray = ['Telugu', 'Hindi', 'English', 'Kannada', 'Sanskrit'];

  }

  highestEducation1(value0: string) {
    this.higherEducationValue = value0;
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
    }
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
    });
  }



}
