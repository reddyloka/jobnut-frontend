import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserBaseService } from '../../../../_shared/services/user-base.service';
import { HrPostDetail } from '../../../../_shared/models/hrpostdetails';
import { uuid } from '../../../../_shared/models/uuid';

@Component({
  selector: 'app-user-view-applied-post',
  templateUrl: './user-view-applied-post.component.html'
})
export class UserViewAppliedPostComponent implements OnInit {
  error_text: string;
  hrpost: HrPostDetail[];
  p: number;
  id: string;
  loadPage = false;
  loadError = false;
  constructor(private userbaseservice: UserBaseService,
    private router: Router) {
    this.id = uuid();
  }

  ngOnInit() {
    this.userbaseservice.getUserApplyPost(this.id).
    subscribe((hrpost) => {
      console.log('applied data', hrpost);
     this.hrpost = hrpost;
     this.loadPage = true
    })
    // .catch((error=>{
    //   this.loadError = true;
    //  this.error_text = "Get error on server request ";
    //  }));
  this.p = 1;
  }
  routeronclicked(hrpost_id) {
    this.router.navigateByUrl('applied-job/' + hrpost_id);
    // console.log(hrpost_id);
  }

}
