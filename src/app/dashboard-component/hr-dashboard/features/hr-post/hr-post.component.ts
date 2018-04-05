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
  id: String;
  constructor(private hrbaseservice: HrbaseService,
    private router: Router) {
    this.id = localStorage['uuid'];
  }

  ngOnInit() {
    this.hrbaseservice.getAllHrPost(this.id)
      .then((hrpost) => {
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
