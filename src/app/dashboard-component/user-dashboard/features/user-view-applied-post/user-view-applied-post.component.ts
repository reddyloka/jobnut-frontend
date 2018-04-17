import { Component, OnInit } from '@angular/core';
import { UserBaseService } from '../../../../services/userbase/user-base.service';
import { uuid } from '../../../../_helper/uuid';
import { HrPostDetail } from '../../../../model/hrpostdetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view-applied-post',
  templateUrl: './user-view-applied-post.component.html',
  styleUrls: ['./user-view-applied-post.component.css']
})
export class UserViewAppliedPostComponent implements OnInit {
  hrpost: HrPostDetail[];
  p: number;
  id: string;
  constructor(private userbaseservice: UserBaseService,
              private router: Router) {
    this.id = uuid();
   }

  ngOnInit() {
    this.userbaseservice.getUserApplyPost(this.id).
    then((hrpost) => {
      console.log('applied data', hrpost);
     this.hrpost = hrpost;
    });
  this.p = 1;
  }
  routeronclicked(hrpost_id) {
    this.router.navigateByUrl('applied-job/' + hrpost_id);
    // console.log(hrpost_id);
  }

}
