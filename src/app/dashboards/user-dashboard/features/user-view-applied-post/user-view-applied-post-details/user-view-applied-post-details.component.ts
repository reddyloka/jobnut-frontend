import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { HrbaseService } from '../../../../../_shared/services/hrbase.service';
import { UserBaseService } from '../../../../../_shared/services/user-base.service';
import { ApplicantBase } from '../../../../../_shared/models/applicantbase';
import { HrPostDetail } from '../../../../../_shared/models/hrpostdetails';
import { uuid } from '../../../../../_shared/models/uuid';
declare const $: any;

@Component({
  selector: 'app-user-view-applied-post-details',
  templateUrl: './user-view-applied-post-details.component.html'
})
export class UserViewAppliedPostDetailsComponent implements OnInit {
  isshortlist: string;
  userdata: ApplicantBase;
  id: string;
  chatOpen: boolean;
  uploadNewCv: boolean;
  hrpost: any;

  constructor(private route: ActivatedRoute,
    private hrbaseservice: HrbaseService,
    private userbaseservice: UserBaseService,
    private router: Router) {
    this.uploadNewCv = false;
    this.chatOpen = false;
    this.id = uuid();
    // this.isshortlist = false;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(async (params: ParamMap) => {
      // console.log('NNNNNNNNNNNNNNNNNnn');
      const hrpost_id = params.get('user-post.id');
      this.hrpost = await this.hrbaseservice.getHrPostById(hrpost_id);
      // .
      // then((hrpost) => {
        // this.hrpost = hrpost;
        // console.log('shhhhhhh', this.hrpost);
        // });
        this.userdata = await this.userbaseservice.getUserDetailsById(this.id);
      // .
      // then((userdata) => {
        //  = userdata;
        // console.log("UUUUUUUUUUUUUUUU");
        this.shortlisted();
      });
  }
  shortlisted() {
    console.log('shhhhhhhooooooooo', this.userdata);
    this.hrpost.applicants.map((ele) => {
      console.log('shhhhhhhooooooooorrrrrrr', ele.isShortlisted
    );
      if (ele._id._id === this.id) {
        this.isshortlist = ele.isShortlisted;
       console.log(this.isshortlist);
      }
    });
   }

   chatOpenClicked() {
    this.chatOpen = true;
   }
}


