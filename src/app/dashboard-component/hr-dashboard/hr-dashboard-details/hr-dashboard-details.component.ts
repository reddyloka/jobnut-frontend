import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authentication/auth.service';
import { Userbase } from '../../../model/userbase';
import { HrbaseService } from '../../../services/hrbase.service';


@Component({
  selector: 'app-hr-dashboard-details',
  templateUrl: './hr-dashboard-details.component.html',
  styleUrls: []
})
export class HrDashboardDetailsComponent implements OnInit {
  ExpOpen: boolean;
  ExpMain: boolean;
  ContactMain: boolean;
  ContactOpen: boolean;
  detailsOpen: boolean;
  jobOpen: boolean;
  SkillsOpen: boolean;
  isAuthenticated: boolean;
  detailsMain: boolean;
  SkillsMain: boolean;
  hrdata: Userbase;


  constructor( private router: Router, private _authService: AuthService, private hrBaseService: HrbaseService ) {
    this.ExpMain = true;
    this.ExpOpen = false;
    this.detailsMain = true;
    this.detailsOpen = false;
    this.jobOpen = false;
    this.SkillsOpen = false;
    this.SkillsMain = true;
    this.ContactMain = true;
    this.ContactOpen = false;
  }

  ngOnInit() {
    // console.log('from hr: ', this._authService.isLoggedIn());
    // if (!this._authService.isLoggedIn()) {
    //   this.router.navigateByUrl('login');
    // }

    // this.hrBaseService.

  }

  EditPersonalDetails() {
    this.detailsOpen = true;
    this.detailsMain = false;
  }
  closeDetails() {
    this.detailsOpen = false;
    this.detailsMain = true;
  }
  EditSkills() {
    this.SkillsMain = false;
    this.SkillsOpen = true;
  }
  closeSkills() {
    this.SkillsMain = true;
    this.SkillsOpen = false;
  }
  EditContactDetails() {
    this.ContactMain = false;
    this.ContactOpen = true;
  }
  closecontact() {
    this.ContactMain = true;
    this.ContactOpen = false;
  }
  EditExpDetails() {
   this.ExpMain = false;
   this.ExpOpen = true;
  }
  closeexp() {
    this.ExpMain = true;
    this.ExpOpen = false;
  }
  // abhishek code

  logoutClicked() {
    console.log('log out clicked');
    this._authService.logout();
  }
}
