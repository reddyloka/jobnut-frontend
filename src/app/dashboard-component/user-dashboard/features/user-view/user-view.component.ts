import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrPostDetail } from '../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../services/hrbase.service';
import { uuid } from '../../../../model/uuid';
import { UserBaseService } from '../../../../services/userbase/user-base.service';
import { ApplicantBase } from '../../../../model/applicantbase';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  id: any;
  suggestedjob: HrPostDetail[];
  jobData: any;
  searchData: any;
  searchInfo: boolean;
  jobInfo: boolean;
  searchText: any;
  userdata: ApplicantBase;
  hrpost: HrPostDetail[];
  recomendedSkill: string[];
  constructor(private hrbaseservice: HrbaseService,
    private userbaseservice: UserBaseService,
    private router: Router) {
    this.id = uuid();
    this.jobInfo = true;
    this.recomendedSkill = ['c++', 'ghhj'];
  }

  ngOnInit() {
    //  this.hrbaseservice.getAllUserViewPost().
    // then((hrpost) => {
    //   this.hrpost = hrpost;
    //   this.suggestedjob = this.hrpost.filter((ele) => {
    //     if (ele.skills.includes(this.recomendedSkill.toString())) {
    //       return ele;
    //     }
    //   });

    // });
    this.hrbaseservice.getAllUserViewPost().
      then((hrpost) => {
        this.hrpost = hrpost;
        this.suggestedjob = this.hrpost;

      });

    this.userbaseservice.getUserDetailsById(this.id).
      then((userdata) => {
        console.log('maindata', userdata);
        this.userdata = userdata;

      });
  }


  searchClicked() {
    if (this.searchText === null || this.searchText === undefined) {
      this.jobInfo = true;
      this.searchInfo = false;
    }

    this.searchData = this.hrpost.filter((ele) => {
      if (ele.location.toLowerCase().includes(this.searchText.toLowerCase()) ||
        ele.title.toLowerCase().includes(this.searchText.toLowerCase()) || ele.companyname.toLowerCase().includes(this.searchText.toLowerCase())) {
        return ele;
      }
    });
    if (this.searchData != null && this.searchData !== undefined && this.searchData.length > 0) {
      this.jobInfo = false;
      this.searchInfo = true;
    }
    console.log(this.searchData);
  }

  routeronclicked(hrpost_id) {
    this.router.navigateByUrl('user-view-post/' + hrpost_id);
  }

}
