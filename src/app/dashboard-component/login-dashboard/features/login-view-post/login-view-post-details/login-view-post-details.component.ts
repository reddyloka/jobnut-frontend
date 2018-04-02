import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HrPostDetail } from '../../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../../services/hrbase.service';
@Component({
  selector: 'app-login-view-post-details',
  templateUrl: './login-view-post-details.component.html',
  styleUrls: ['./login-view-post-details.component.css']
})
export class LoginViewPostDetailsComponent implements OnInit {
  hrpost: HrPostDetail;

  constructor(private route: ActivatedRoute,
    private hrbaseservice: HrbaseService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const hrpost_id = params.get('login-post.id');
      this.hrbaseservice.getHrPostById(hrpost_id).
      then((hrpost) => {
        console.log(hrpost);
        this.hrpost = hrpost;
      });
    });
  }

}
