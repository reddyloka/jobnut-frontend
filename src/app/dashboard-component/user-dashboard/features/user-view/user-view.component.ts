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
  p: Number;
  jobtext: String;
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
    this.p = 1;
  }
  ngOnInit() {
    this.userbaseservice.getUserDetailsById(this.id).
      then((userdata) => {
        console.log('maindata', userdata);
        this.userdata = userdata;
        this.suggestedjobs();
      });
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
        console.log('post', this.suggestedjob);
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
    if ((this.searchText === null || this.searchText === undefined) && (this.searchLocation !== null && this.searchLocation !== undefined)) {
      this.searchLocation = this.searchLocation.trim();
      console.log('location', this.searchLocation);
      console.log('hrpost', this.hrpost);
      this.searchData = this.hrpost.filter((el) => {
        console.log('ele', el);
        return el.location.toLowerCase().indexOf(this.searchLocation.toLowerCase()) > -1;
      });
      console.log('arrayvalue', this.searchData);
    }
    if ((this.searchText !== null && this.searchText !== undefined) && (this.searchLocation === null || this.searchLocation === undefined)) {
      this.searchText = this.searchText.trim();
      console.log(this.searchText);
      this.searchData = this.hrpost.filter((el) => {
        return ((el.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) || (el.skills.toString().toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) || (el.companyname.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1));
      });
    }
    if ((this.searchText !== null && this.searchText !== undefined) && (this.searchLocation !== null && this.searchLocation !== undefined)) {
      this.searchText = this.searchText.trim();
      this.searchLocation = this.searchLocation.trim();
      this.searchData = this.hrpost.filter((el) => {
        if ((el.location.toLowerCase().indexOf(this.searchLocation.toLowerCase()) > -1) && ((el.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) || (el.skills.toString().toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) || (el.companyname.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1))) {
          return el;
        }
      });
    }


    if (this.searchData !== null && this.searchData !== undefined && this.searchData.length > 0) {
      this.jobInfo = false;
      this.searchInfo = true;
      this.p = 1;
    }
  }
  routeronclicked(hrpost_id) {
    this.router.navigateByUrl('user-view-post/' + hrpost_id);
    // console.log(hrpost_id);
  }


}
