import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { UserBaseService } from '../../../services/userbase/user-base.service';
import { ApplicantBase } from '../../../model/applicantbase';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  // styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  inputType: string;
  highestDegreeArray: string[];
  yearArray: string[];
  personalInfo: boolean;
  educationInfo: boolean;
  applicantForm: FormGroup;
  user_details: ApplicantBase;
  skills: string[];
  profile_photo: File;
  isApplicant: boolean;
  isHr: boolean;
  status: boolean;


  constructor(private _userService: UserBaseService,
    private router: Router) {
    this.user_details = ApplicantBase.createblank();
    this.buildFormGroup();
    this.highestDegreeArray = ['B.Tech', 'B.Sc', '12th', '10th'];
    this.yearArray = ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004'];
    this.skills = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML',
      'Information Architecture', 'Javascript', 'Mechanical Engineering',
      'Meteor', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
   this.profile_photo = null;
    this.isApplicant = true;
    this.isHr = false;
    this.status = true;
    this.educationInfo = false;
    this.personalInfo = true;
    this.inputType = 'password';
  }
  buildFormGroup(): void {
    const fg = {
      'firstName': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'lastName': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
      'dob': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
      'address': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'skillValue': new FormControl(null, Validators.required),
    };

    if (this.user_details.education) {
      for (let i = 0; i < this.user_details.education.length; i++) {
        fg['higherDegreeValue_' + i] = new FormControl(this.user_details.education[i].higherDegreeValue, Validators.required);
        fg['universityName_' + i] = new FormControl(this.user_details.education[i].universityName, Validators.required);
        fg['passingYearValue_' + i] = new FormControl(this.user_details.education[i].passingYearValue, Validators.required);
        fg['percentageValue_' + i] = new FormControl(this.user_details.education[i].percentageValue, Validators.required);
      }
    }
    this.user_details.isApplicant = true;
    this.user_details.isHr = false;
    this.user_details.status = true;

    this.applicantForm = new FormGroup(fg);
  }
  ngOnInit() {
    $('.dropdown').dropdown({
      label: {
        duration: 0,
      },
      debug: true,
      performance: true,
    });
  }
  tooglepwd() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else if (this.inputType === 'text') {
      this.inputType = 'password';
    }
  }
  personalDetailClicked() {
    this.educationInfo = true;
    this.personalInfo = false;
  }


  onSubmit() {
    console.log('Applicant details', this.user_details);

    this._userService.addNewUser(this.user_details, {
      profile_photo: this.profile_photo
    })
      .then((result) => {
        this.router.navigateByUrl('login');
        console.log(result);
      });
  }
}
