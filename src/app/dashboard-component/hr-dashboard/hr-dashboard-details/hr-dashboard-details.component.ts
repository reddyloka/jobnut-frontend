import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authentication/auth.service';
import { uuid } from '../../../model/uuid';
import { HrbaseService } from '../../../services/hrbase.service';
import { Userbase } from '../../../model/userbase';
import { NotificationService } from '../../../_shared/notification.service';
import { UserBaseService } from '../../../services/userbase/user-base.service';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-hr-dashboard-details',
  templateUrl: './hr-dashboard-details.component.html',
  styleUrls: []
})
export class HrDashboardDetailsComponent implements OnInit, OnChanges {
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
  uploadImageActive: boolean;
  profile_photo_for_viewing: string;

  constructor(private router: Router,
    private _authService: AuthService,
    private hrbaseservice: HrbaseService,
    private _userService: UserBaseService,
    private _notif: NotificationService,
    private ng2ImgMax: Ng2ImgMaxService
  ) {
    this.ExpMain = true;
    this.ExpOpen = false;
    this.detailsMain = true;
    this.detailsOpen = false;
    this.jobOpen = false;
    this.SkillsOpen = false;
    this.SkillsMain = true;
    this.ContactMain = true;
    this.ContactOpen = false;
    this.uploadImageActive = false;
    this.id = uuid();
  }

  async ngOnInit() {
    // console.log('from hr: ', this._authService.isLoggedIn());
    // if (!this._authService.isLoggedIn()) {
    //   this.router.navigateByUrl('login');
    // }
    if (!this._authService.isLoggedIn) {
      this.router.navigateByUrl('login');
    }
    this.hrdata = await this.hrbaseservice.getHrDetailsById(this.id);

      await console.log('sjbjn', this.hrdata);

      this.profile_photo_for_viewing = this.getUrl();

  }

  ngOnChanges(changes: SimpleChanges): void {
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

  uploadImageClicked() {
    // console.log(event);
    this.uploadImageActive = !this.uploadImageActive;
    console.log('dscs', this.uploadImageActive);
  }

  getUrl() {
    console.log('fd', this.hrdata);

    return `url(http://localhost:3000/images/${this.hrdata ? this.hrdata.profile_photo : 'skj'})`;
    // return `url()`;/
    // return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
  }

  updateProfilePicture(files) {
    const file = files[0];
    if (!file || file.size > 202400000) {
      this._notif.pop('Please Select an Image\n or file size is greater then 2mb', 'Wrong Input!', 3000);
    }
    this.ng2ImgMax.resizeImage(file, 250, 250).subscribe( resImg => {
      this.ng2ImgMax.compressImage(resImg, 1.00).subscribe( async ( finalImg ) => {
        const result = JSON.parse( await this._userService.updateProfilePicture(this.hrdata, {'profile_photo': finalImg}));
        console.log(finalImg);
        this.hrdata.profile_photo = result.data;
        this.profile_photo_for_viewing = this.getUrl();
        this._notif.pop(result.message, 'New Profile Pic', 3000);
      });
    });
  }
  // uploadImageClicked1(event) {
  //   // console.log(event);
  //   this.uploadImageActive = event;
  //   console.log('dscs', this.uploadImageActive);
  // }
}
