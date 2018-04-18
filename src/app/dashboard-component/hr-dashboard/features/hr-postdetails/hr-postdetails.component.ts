import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HrPostDetail } from '../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../services/hrbase.service';
import { DataService } from '../../../../_shared/data.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hr-postdetails',
  templateUrl: './hr-postdetails.component.html',
  styleUrls: ['./hr-postdetails.component.css']
})
export class HrPostdetailsComponent implements OnInit {

  editviewback: boolean;
  postviewback: boolean;
  editpostDetailsInfo: boolean;
  textInfo: string;

  postDetailsInfo: boolean;
  hrpost: HrPostDetail;
  constructor(private route: ActivatedRoute,
    private hrbaseservice: HrbaseService,
    private data: DataService,
    private router: Router,
    private location: Location) {
    this.postDetailsInfo = true;
    this.editpostDetailsInfo = false;
    this.textInfo = 'Manage Applicant';
    this.postviewback = true;
    this.editviewback = false;
  }

  ngOnInit() {
    this.postdetails();
  }

  manageApplicant() {
    this.data.changeMessage(this.hrpost);
    this.router.navigate(['jobs-posted/' + this.hrpost._id + '/manageApplicant']);
  }
  editpost() {
      this.postviewback = false;
      this.editviewback = true;
      this.postDetailsInfo = false;
      this.editpostDetailsInfo = true;
  }
  postdetails() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const hrpost_id = params.get('id');
      this.hrbaseservice.getHrPostById(hrpost_id).
        then((hrpost) => {
          console.log(hrpost);
          this.hrpost = hrpost;
        });
    });
  }

 postbackpage() {
  this.location.back();
 }
 editbackpage() {
  this.postviewback = true;
  this.editviewback = false;
  this.postDetailsInfo = true;
 this.editpostDetailsInfo = false;
}
}
