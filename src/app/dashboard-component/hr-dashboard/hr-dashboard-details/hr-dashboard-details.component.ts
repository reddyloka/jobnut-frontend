import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authentication/auth.service';
import { uuid } from '../../../model/uuid';
import { HrbaseService } from '../../../services/hrbase.service';
import { Hrbase } from '../../../model/hrbase';
@Component({
  selector: 'app-hr-dashboard-details',
  templateUrl: './hr-dashboard-details.component.html',
  styleUrls: ['./hr-dashboard-details.component.css']
})
export class HrDashboardDetailsComponent implements OnInit {
  expAdd: boolean;
  hrdata: Hrbase;
  id: string;
  ExpOpen: boolean;
  expMain: boolean;
  ContactMain: boolean;
  ContactOpen: boolean;
  detailsOpen: boolean;
  jobOpen: boolean;
  SkillsOpen: boolean;
  isAuthenticated: boolean;
  detailsMain: boolean;
  SkillsMain: boolean;


  constructor(private router: Router,
    private _authService: AuthService,
    private hrbaseservice: HrbaseService) {
    this.expMain = true;
    this.ExpOpen = false;
    this.detailsMain = true;
    this.detailsOpen = false;
    this.jobOpen = false;
    this.SkillsOpen = false;
    this.SkillsMain = true;
    this.ContactMain = true;
    this.ContactOpen = false;
    this.expAdd = false;
    this.id = uuid();
  }

  ngOnInit() {
    // console.log('from hr: ', this._authService.isLoggedIn());
    // if (!this._authService.isLoggedIn()) {
    //   this.router.navigateByUrl('login');
    // }
    this.hrbaseservice.getHrDetailsById(this.id).
      then((hrdata) => {
        console.log('maindata', hrdata);
        this.hrdata = hrdata;
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
  AddExperienceMore() {
    this.expAdd = true;
  }
  EditExpDetails() {
    this.expMain = false;
    this.ExpOpen = true;
  }
  closeexp() {
    this.expMain = true;
    this.ExpOpen = false;
  }
  closeAddExp() {
    this.expAdd = false;
  }
  // abhishek code

  logoutClicked() {
    console.log('log out clicked');
    this._authService.logout();
  }
}
