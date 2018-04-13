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

  jobtext: String;

  appliedJob: boolean;
  searchBarInfo: boolean;
  searchBarInfo1: boolean;
  id: any;
  suggestedjob: HrPostDetail[];
  jobData: any;
  searchData: any;
  searchInfo: boolean;
  jobInfo: boolean;
  searchText: any;
  searchLocation: any;
  userdata: ApplicantBase;
  hrpost: HrPostDetail[];
  recomendedSkill: string[];
  constructor(private hrbaseservice: HrbaseService,
    private userbaseservice: UserBaseService,
    private router: Router) {
    this.id = uuid();
    this.jobInfo = true;
    this.searchBarInfo = true;
    this.searchBarInfo1 = false;
    this.appliedJob = false;
    this.jobtext = 'Applied Jobs';
  }

  ngOnInit() {
    this.userbaseservice.getUserDetailsById(this.id).
      then((userdata) => {
        console.log('maindata', userdata);
        this.userdata = userdata;

      });

    this.suggestedjobs();
  }
  userAppliedJob() {
    if (!this.appliedJob) {
      this.jobtext = 'Suggested Jobs';
      this.appliedJob = true;
      this.jobInfo = false;
      this.userbaseservice.getUserApplyPost(this.id).
        then((hrpost) => {
          this.suggestedjob = hrpost;
          // this.appliedJob = true;
          this.searchInfo = false;
        });
    } else {
      this.suggestedjobs();
      this.jobtext = 'Applied Jobs';
      this.appliedJob = false;
      this.jobInfo = true;
    }
  }

 suggestedjobs() {

  this.hrbaseservice.getAllUserViewPost().
      then((hrpost) => {
        this.hrpost = hrpost;
        this.suggestedjob = this.hrpost.filter((ele) => {
          const data = ele.skills.filter((ele1) => {
            if (this.userdata.skillValue.includes(ele1)) {
              console.log(ele1);
              console.log(this.userdata.skillValue);
              return ele1;
            }
          });
          if (data.length > 0) {
            return ele;
          }
        });
      });
 }

  onfocus() {
    this.searchBarInfo = false;
    this.searchBarInfo1 = true;
  }

  searchClicked() {
    if (this.searchText === null || this.searchText === undefined) {
      this.jobInfo = true;
      this.searchInfo = false;
    }

    this.searchData = this.hrpost.filter((ele) => {
      if ((this.searchText != null && this.searchText !== undefined) && (this.searchLocation != null && this.searchLocation !== undefined)) {
        if (ele.location.toLowerCase().includes(this.searchLocation.toLowerCase()) ||
          ele.title.toLowerCase().includes(this.searchText.toLowerCase()) || ele.companyname.toLowerCase().includes(this.searchText.toLowerCase())) {
          return ele;
        }
      }
    });
    if (this.searchData != null && this.searchData !== undefined && this.searchData.length > 0) {
      this.jobInfo = false;
      this.searchInfo = true;
      this.appliedJob = false;
    }
    console.log(this.searchData);
  }

  routeronclicked(hrpost_id) {
    this.router.navigateByUrl('user-view-post/' + hrpost_id);
    // console.log(hrpost_id);
  }


}
