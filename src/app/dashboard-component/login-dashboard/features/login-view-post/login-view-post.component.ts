import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-view-post',
  templateUrl: './login-view-post.component.html',
  styleUrls: ['./login-view-post.component.css']
})
export class LoginViewPostComponent implements OnInit {
@Input()
hrpost;
@Output()
userclick = new EventEmitter<number>();

userclicked(hrpost_id) {
  this.userclick.emit(this.hrpost._id);
}
  constructor() { }
  ngOnInit() {
  }

}
