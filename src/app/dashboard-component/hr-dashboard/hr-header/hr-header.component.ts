import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hr-header',
  templateUrl: './hr-header.component.html',
  styleUrls: ['./hr-header.component.css']
})
export class HrHeaderComponent implements OnInit {

@Input()
hrdata;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  getprofile() {
    this.router.navigateByUrl('/hr');
  }
  getpost() {
    this.router.navigateByUrl('/hr-post');
  }
  addnewpost() {
    this.router.navigateByUrl('/hr-new-post');
  }
}
