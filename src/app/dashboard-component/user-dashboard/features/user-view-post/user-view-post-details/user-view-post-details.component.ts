import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HrPostDetail } from '../../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../../services/hrbase.service';

declare const $: any;

@Component({
  selector: 'app-user-view-post-details',
  templateUrl: './user-view-post-details.component.html',
  styleUrls: ['./user-view-post-details.component.css']
})
export class UserViewPostDetailsComponent implements OnInit {
  uploadNewCv: boolean;
  hrpost: HrPostDetail;

  constructor(private route: ActivatedRoute,
    private hrbaseservice: HrbaseService) {
      this.uploadNewCv = false;
    }

  ngOnInit() {


    this.route.paramMap.subscribe((params: ParamMap) => {
      const hrpost_id = params.get('user-post.id');
      this.hrbaseservice.getHrPostById(hrpost_id).
        then((hrpost) => {
          console.log(hrpost);
          this.hrpost = hrpost;
        });
    });
  }
  uploadNew() {
  this.uploadNewCv = true;

  }

  uploadOld() {
    this.uploadNewCv = false;
  }

}
