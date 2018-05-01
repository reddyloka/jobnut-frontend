import { Component, OnInit } from '@angular/core';
import { uuid } from '../../../../model/uuid';
import { UserBaseService } from '../../../../services/userbase/user-base.service';
import { ApplicantBase } from '../../../../model/applicantbase';
import { NotificationService } from '../../../../_shared/notification.service';
import { Ng2ImgMaxService } from 'ng2-img-max';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  expAdd: boolean;
  educationAdd: boolean;
  id: any;
  userdata: ApplicantBase;
  educationOpen: boolean;
  educationMain: boolean;
  skillOpen: boolean;
  skillMain: boolean;
  expOpen: boolean;
  expMain: boolean;
  detailsOpen: boolean;
  detailsMain: boolean;
  profile_photo_for_viewing: string;

  constructor(private userbaseservice: UserBaseService,
    private _notif: NotificationService,
    private ng2ImgMax: Ng2ImgMaxService,
  ) {
    this.detailsMain = true;
    this.detailsOpen = false;
    this.expMain = true;
    this.expOpen = false;
    this.expAdd = false;
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
      this.profile_photo_for_viewing = this.getUrl();
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
  AddExperienceMore(): void {
    this.expAdd = true;
    }
  EditExpDetails() {
    this.expMain = false;
    this.expOpen = true;

  }
  closeExp() {
    this.expMain = true;
    this.expOpen = false;

  }
  closeAddExp() {
    this.expAdd = false;
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

  getUrl() {
    console.log('fd', this.userdata);
    return `url(http://localhost:3000/images/${this.userdata ? this.userdata.profile_photo : 'skj'})`;
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
        const result = await this.userbaseservice.updateProfilePicture(this.userdata, {'profile_photo': finalImg});
        this.userdata.profile_photo = result.data;
        this.profile_photo_for_viewing = this.getUrl();
        this._notif.pop(result.message, 'New Profile Pic', 3000);
      });
    });
  }
}
