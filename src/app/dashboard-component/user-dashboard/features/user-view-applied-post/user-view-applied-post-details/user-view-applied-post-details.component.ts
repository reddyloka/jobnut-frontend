import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HrPostDetail } from '../../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../../services/hrbase.service';
import { uuid } from '../../../../../model/uuid';
import { UserBaseService } from '../../../../../services/userbase/user-base.service';
import { ApplicantBase } from '../../../../../model/applicantbase';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-user-view-applied-post-details',
  templateUrl: './user-view-applied-post-details.component.html',
  styleUrls: ['./user-view-applied-post-details.component.css']
})
export class UserViewAppliedPostDetailsComponent implements OnInit {
  isshortlist: string;
  userdata: ApplicantBase;
  id: string;
  uploadNewCv: boolean;
  hrpost: any;

  constructor(private route: ActivatedRoute,
    private hrbaseservice: HrbaseService,
    private userbaseservice: UserBaseService,
    private router: Router) {
    this.uploadNewCv = false;
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
    console.log('shhhhhhhooooooooo', this.hrpost.applicants);
    this.hrpost.applicants.map((ele) => {
      console.log('shhhhhhhooooooooorrrrrrr', ele.isShortlisted
    );
      if (ele._id._id === this.id) {
        this.isshortlist = ele.isShortlisted;
       console.log(this.isshortlist);
      }
    });
   }
}


