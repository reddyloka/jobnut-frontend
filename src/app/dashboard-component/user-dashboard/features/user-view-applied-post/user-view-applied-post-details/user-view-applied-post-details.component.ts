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
  userdata: ApplicantBase;
  id: string;
  uploadNewCv: boolean;
  hrpost: HrPostDetail;

  constructor(private route: ActivatedRoute,
    private hrbaseservice: HrbaseService,
    private userbaseservice: UserBaseService,
    private router: Router) {
    this.uploadNewCv = false;
    this.id = uuid();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // console.log('NNNNNNNNNNNNNNNNNnn');
      const hrpost_id = params.get('user-post.id');
      this.hrbaseservice.getHrPostById(hrpost_id).
        then((hrpost) => {
          this.hrpost = hrpost;
         this.shortlisted();
        });
    });
    this.userbaseservice.getUserDetailsById(this.id).
      then((userdata) => {
        this.userdata = userdata;
      });

  }
   shortlisted() {

   }
}


