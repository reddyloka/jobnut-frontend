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


