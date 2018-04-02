import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-view-post-deatilssummary',
  templateUrl: './login-view-post-deatilssummary.component.html',
  styleUrls: ['./login-view-post-deatilssummary.component.css']
})
export class LoginViewPostDeatilssummaryComponent implements OnInit {
@Input()
hrpost;
  constructor() { }

  ngOnInit() {
  }

}
