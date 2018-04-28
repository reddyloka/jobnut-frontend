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
  selector: 'app-user-view-post-details',
  templateUrl: './user-view-post-details.component.html',
  styleUrls: ['./user-view-post-details.component.css']
})
export class UserViewPostDetailsComponent implements OnInit {
  istoapply: any;
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
    // this.istoapply = false;
  }


  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const hrpost_id = params.get('user-post.id');
      this.hrbaseservice.getHrPostById(hrpost_id).
        then((hrpost) => {
          this.hrpost = hrpost;
        });
    });

    this.userbaseservice.getUserDetailsById(this.id).
      then((userdata) => {
        this.userdata = userdata;
        this.applytopost();
      });
  }

  applytopost() {
    // console.log('shhhhhhhooooooooo', this.hrpost.applicants);
    this.hrpost.applicants.map((ele) => {
      console.log('shortlisted ', ele.isShortlisted);
      if (ele._id._id === this.id) {
        this.istoapply = true;
       console.log('apply status ',this.istoapply);
      }
    });

   }

  uploadNew() {
    this.uploadNewCv = true;
  }

  uploadOld() {
    this.uploadNewCv = false;
  }
  applyToPost() {
    console.log('post_id', this.hrpost._id);
    console.log('id', this.id);
    this.userbaseservice.updateUserApplyPost(this.hrpost._id, this.id).
      then(() => {
        console.log('successfully applied and notified');
        this.router.navigateByUrl('user-view-post');
      });
  }

}
