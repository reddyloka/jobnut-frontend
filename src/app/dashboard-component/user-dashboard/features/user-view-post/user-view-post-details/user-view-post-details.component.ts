import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HrPostDetail } from '../../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../../services/hrbase.service';
import { uuid } from '../../../../../model/uuid';
import { UserBaseService } from '../../../../../services/userbase/user-base.service';
import { ApplicantBase } from '../../../../../model/applicantbase';
declare const $: any;

@Component({
  selector: 'app-user-view-post-details',
  templateUrl: './user-view-post-details.component.html',
  styleUrls: ['./user-view-post-details.component.css']
})
export class UserViewPostDetailsComponent implements OnInit {
  userdata: ApplicantBase;
  id: string;
  uploadNewCv: boolean;
  hrpost: HrPostDetail;

  constructor(private route: ActivatedRoute,
    private hrbaseservice: HrbaseService,
    private userbaseservice: UserBaseService) {
    this.uploadNewCv = false;
    this.id = uuid();
  }


  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const hrpost_id = params.get('user-post.id');
      this.hrbaseservice.getHrPostById(hrpost_id).
        then((hrpost) => {
          console.log('AAAAAAAAAAAAAAAAAAA', hrpost);
          this.hrpost = hrpost;
        });
    });

    this.userbaseservice.getUserDetailsById(this.id).
    then((userdata) => {
      console.log('maindata', userdata);
      this.userdata = userdata;

    });
  }
  uploadNew() {
    this.uploadNewCv = true;

  }

  uploadOld() {
    this.uploadNewCv = false;
  }

}
