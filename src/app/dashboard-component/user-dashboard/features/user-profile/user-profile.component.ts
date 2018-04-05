import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  educationOpen: boolean;
  educationMain: boolean;
  skillOpen: boolean;
  skillMain: boolean;
  expOpen: boolean;
  expMain: boolean;
  detailsOpen: boolean;
  detailsMain: boolean;

  constructor() {
    this.detailsMain = true;
    this.detailsOpen = false;
    this.expMain = true;
    this.expOpen = false;
    this.skillMain = true;
    this.skillOpen = false;
    this.educationMain = true;
    this.educationOpen = false;
   }

  ngOnInit() {
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
  EditEducationDetails() {
    this.educationMain = false;
    this.educationOpen = true;
  }
  closeEducation() {
    this.educationMain = true;
    this.educationOpen = false;
  }
}
