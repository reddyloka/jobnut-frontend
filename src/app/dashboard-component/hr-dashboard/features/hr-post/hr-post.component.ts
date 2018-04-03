import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrPostDetail } from '../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../services/hrbase.service';
@Component({
  selector: 'app-hr-post',
  templateUrl: './hr-post.component.html',
  styleUrls: ['./hr-post.component.css']
})
export class HrPostComponent implements OnInit {
  hrpost: HrPostDetail[];
  constructor(private hrbaseservice: HrbaseService,
    private router: Router) { }

  ngOnInit() {
    this.hrbaseservice.getAllHrPost().
      then((hrpost) => {
        this.hrpost = hrpost;
        console.log(hrpost);
      });
  }

  public routeronclicked(hrpost_id): void {
    this.router.navigateByUrl('/hr-post/' + hrpost_id);
  }
  adddetails() {
    this.router.navigateByUrl('/hr-new-post');
  }
}
