import { Component, OnInit } from '@angular/core';
import { uuid } from '../../../../model/uuid';
import { UserBaseService } from '../../../../services/userbase/user-base.service';
import { ApplicantBase } from '../../../../model/applicantbase';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  educationAdd: boolean;
  id: any;
  edituserdata: ApplicantBase;
  userdata: ApplicantBase;
  educationOpen: boolean;
  educationMain: boolean;
  skillOpen: boolean;
  skillMain: boolean;
  expOpen: boolean;
  expMain: boolean;
  detailsOpen: boolean;
  detailsMain: boolean;

  constructor(private userbaseservice: UserBaseService) {
    this.edituserdata = ApplicantBase.createblank();
    this.detailsMain = true;
    this.detailsOpen = false;
    this.expMain = true;
    this.expOpen = false;
    this.skillMain = true;
    this.skillOpen = false;
    this.educationMain = true;
    this.educationOpen = false;
    this.educationAdd = false;
    this.id = uuid();
   }

  ngOnInit() {

    this.userbaseservice.getUserDetailsById(this.id).
    then((userdata) => {
      console.log('maindata', userdata);
      this.userdata = userdata;
    });
  }

  EditPersonalDetails() {
    this.detailsOpen = true;
    this.detailsMain = false;
  }
  closeDetails() {
    this.detailsOpen = false;
    this.detailsMain = true;
  }
  EditExpDetails() {
    this.expMain = false;
    this.expOpen = true;

  }
  closeExp() {
    this.expMain = true;
    this.expOpen = false;

  }
  EditSkillsDetails() {
    this.skillMain = false;
    this.skillOpen = true;
  }
   closeSkill() {
    this.skillMain = true;
    this.skillOpen = false;
  }

  AddEducationMore(): void {
  //  this.edituserdata = this.userdata;
    this.educationAdd = true;
    // if (this.userdata.education) {
    //   this.userdata.education.push({higherDegreeValue: '', universityName: '', passingYearValue: '', percentageValue: ''});
    // }
  }
  EditEducationDetails() {
    this.educationMain = false;
    this.educationOpen = true;
  }
  closeEducation() {
    this.educationMain = true;
    this.educationOpen = false;
  }

  closeAddEducation() {
    this.educationAdd = false;
  }
}
