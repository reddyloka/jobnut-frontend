import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrPostDetail } from '../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../services/hrbase.service';
@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  suggestedjob: HrPostDetail[];
  jobData: any;
  searchData: any;
  searchInfo: boolean;
  jobInfo: boolean;
  searchText: any;
hrpost: HrPostDetail[];
 recomendedSkill: string[];
  constructor(private hrbaseservice: HrbaseService,
              private router: Router) {
    this.jobInfo = true;
    this.recomendedSkill = ['c', 'c++'];
  }

  ngOnInit() {
    this.hrbaseservice.getAllHrPost().
      then((hrpost) => {
        this.hrpost = hrpost;
        this.suggestedjob = this.hrpost.filter((ele) => {
          if (ele.skills.includes(this.recomendedSkill.toString())) {
            return ele;
          }
        });

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
     this.router.navigateByUrl('login-user-view/' + hrpost_id);
  }

}
