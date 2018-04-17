import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: []
})
export class UserHeaderComponent implements OnInit {
 @Input()
userdata;

  constructor(private router: Router) { }

  ngOnInit() {

  }
  getprofile() {
    this.router.navigateByUrl('/user-profile');
  }
  getJob() {

    this.router.navigateByUrl('/user-view-post');
  }
  getAppliedJob() {

    this.router.navigateByUrl('/applied-job');
  }
}
