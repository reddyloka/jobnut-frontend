import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authentication/auth.service';
<<<<<<< HEAD
import { uuid } from '../../../model/uuid';
import { HrbaseService } from '../../../services/hrbase.service';
import { Userbase } from '../../../model/userbase';
=======
import { Userbase } from '../../../model/userbase';
import { HrbaseService } from '../../../services/hrbase.service';


>>>>>>> b7b665ad962e06c814fec504baf72f0dce6ed95a
@Component({
  selector: 'app-hr-dashboard-details',
  templateUrl: './hr-dashboard-details.component.html',
  styleUrls: []
})
export class HrDashboardDetailsComponent implements OnInit {
  hrdata: Userbase;
  id: string;
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


<<<<<<< HEAD
  constructor(private router: Router,
    private _authService: AuthService,
    private hrbaseservice: HrbaseService) {
=======
  constructor( private router: Router, private _authService: AuthService, private hrBaseService: HrbaseService ) {
>>>>>>> b7b665ad962e06c814fec504baf72f0dce6ed95a
    this.ExpMain = true;
    this.ExpOpen = false;
    this.detailsMain = true;
    this.detailsOpen = false;
    this.jobOpen = false;
    this.SkillsOpen = false;
    this.SkillsMain = true;
    this.ContactMain = true;
    this.ContactOpen = false;
    this.id = uuid();
  }

  ngOnInit() {
    // console.log('from hr: ', this._authService.isLoggedIn());
    // if (!this._authService.isLoggedIn()) {
    //   this.router.navigateByUrl('login');
    // }
<<<<<<< HEAD
    this.hrbaseservice.getHrDetailsById(this.id).
      then((hrdata) => {
        console.log('maindata', hrdata);
        this.hrdata = hrdata;
      });
=======

    // this.hrBaseService.

>>>>>>> b7b665ad962e06c814fec504baf72f0dce6ed95a
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
    this.SkillsMain = true;
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
