import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicantBase } from '../../../models/applicantbase';
import { UserBaseService } from '../../../services/user-base.service';
import * as citiesData from '../../../data/india-cities.json';

declare var $: any;
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  inputType: string;
  highestDegreeArray: string[];
  yearArray: string[];
  applicantForm: FormGroup;
  user_details: ApplicantBase;
  skills: string[];
  cities: any = [];
  states: any = [];
  genders: any = [];
  imageFile: any;
  profile_photo: File;
  isApplicant: boolean;
  isHr: boolean;
  status: boolean;


  constructor(private _userService: UserBaseService,
    private router: Router) {
    this.user_details = ApplicantBase.createblank();
    this.buildFormGroup();
    this.states = [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'TamilNadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
    this.genders = ['Male', 'Female', 'Other'];
    this.highestDegreeArray = ['B.A', 'B.Arch', 'B.Des', 'B.EL.Ed', 'B.P.Ed', 'B.U.M.S', 'BAMS', 'BCA', 'B.B.A/B.B.M', 'B.Com', 'B.Ed', 'BDS', 'BFA', 'BHM', 'B.Phrama', 'B.Sc', 'B.Tech/B.E', 'BHMS', 'MBBS', 'Diploma', 'BVSC', '12th', '10th', 'other'];
    this.skills = ['Angular', 'ASP.Net', 'C#', 'C#.Net', 'ADO.Net', 'SQL Server', 'Spring', 'C', 'C++', 'JAVA', 'CSS', 'Graphic Design', 'Ember', 'DataBase', 'PHP', 'Full Stack Developing', 'Testing', 'HTML', 'Javascript', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
    this.yearArray = this.years();
    this.cities = citiesData;
    this.profile_photo = null;
    this.isApplicant = true;
    this.isHr = false;
    this.status = true;
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
      'dob': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
      'state': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'skillValue': new FormControl(null, Validators.required),
      'termsCheck': new FormControl(null, Validators.required)
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
      // debug: true,
      performance: true,
    });
  }
  userExist(){
    console.log('Email details', this.applicantForm.value.email);
    let emailObj={
      email: this.applicantForm.value.email,
      isHr:false
    }
this._userService.checkMailId(emailObj).subscribe((res)=>{
  window.alert('Email address was already registered with us Please click ok to login');
  this.router.navigateByUrl('login');
});
  }
  tooglepwd() {
    console.log('form pass', this.applicantForm.controls.password.valid);
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else if (this.inputType === 'text') {
      this.inputType = 'password';
    }
  }
  onSubmit() {
    console.log('Applicant details', this.user_details);
    this.user_details.skillValue = this.user_details.skillValue.filter((ele) => {
      if (ele !== 'select your skills') {
        return ele;
      }
    });
    this._userService.addNewUser(this.user_details, {
      profile_photo: this.profile_photo
    }).then((result) => {
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
