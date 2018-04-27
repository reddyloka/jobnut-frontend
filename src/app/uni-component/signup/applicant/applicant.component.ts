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
  imageFile: any;
  profile_photo: File;
  isApplicant: boolean;
  isHr: boolean;
  status: boolean;


  constructor(private _userService: UserBaseService,
    private router: Router) {
    this.user_details = ApplicantBase.createblank();
    this.buildFormGroup();
    this.highestDegreeArray = ['B.Tech', 'B.Sc', '12th', '10th'];
    this.yearArray = this.years();
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


  years(): string[] {
    const year = [];
    for (let i = 1990; i <= 2030; i++) {
      year.push(i);
    }
    return year;
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
    // console.log('form password', this.applicantForm);
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

  fileTypeCheck(event): any {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type.split('/')[0] === 'image') {
        const reader = new FileReader();
        reader.onload = (rdr) => {
          console.log('image: ', file.type.split('/')[0]);
          this.imageFile = false;
        };
        // reader reads the image uploaded
        reader.readAsDataURL(event.target.files[0]);
        this.profile_photo = event.target.files[0];
      } else {
        alert('Filetype Not Supported.');
        this.imageFile = true;
        // this.fileTypeCheck(event);
      }
    }
  }
}
