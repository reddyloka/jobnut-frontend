import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  getprofile() {
    this.router.navigateByUrl('/user-profile');
  }
  getpost() {
    this.router.navigateByUrl('/user-view-post');
  }
}
