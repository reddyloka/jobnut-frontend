import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HrPostDetail } from '../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../services/hrbase.service';
@Component({
  selector: 'app-hr-postdetails',
  templateUrl: './hr-postdetails.component.html',
  styleUrls: ['./hr-postdetails.component.css']
})
export class HrPostdetailsComponent implements OnInit {

  textInfo: string;
  manageApplicantInfo: boolean;
  postDetailsInfo: boolean;
  hrpost: HrPostDetail;
  constructor(private route: ActivatedRoute,
    private hrbaseservice: HrbaseService) {
      this.postDetailsInfo = true;
      this.manageApplicantInfo = false;
      this.textInfo = 'Manage Applicant';
     }

  ngOnInit() {
    this.postdetails();
  }

  manageApplicant() {
    if (!this.manageApplicantInfo) {
      this.postDetailsInfo = false;
      this.manageApplicantInfo = true;
      this.textInfo = 'view post';
    } else {
      this.postdetails();
      this.postDetailsInfo = true;
      this.manageApplicantInfo = false;
      this.textInfo = 'Manage Applicant';
    }
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

}
