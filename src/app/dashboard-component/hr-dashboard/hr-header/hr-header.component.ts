import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-header',
  templateUrl: './hr-header.component.html'
})
export class HrHeaderComponent implements OnInit {


  isActive: boolean[];
  constructor(
    private _authService: AuthService,
    private router: Router
  ) {
    this.isActive = [true, false, false];
    // this.id =
    if (!_authService.isLoggedIn) {
      this.router.navigateByUrl('login');
    }
  }
  ngOnInit() {
  }

  getprofile() {
    this.isActive = [true, false, false];
    this.router.navigateByUrl('hr/profile');
  }
  getpost() {
    this.isActive = [false, true, false];
    this.router.navigateByUrl('hr/jobs-posted');
  }
  addnewpost() {
    this.isActive = [false, false, true];
    this.router.navigateByUrl('hr/new-job');
  }

  getDetails() {
    if (!this._authService.isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
    this.router.navigateByUrl('hr/profile');
    // console.log( this._authService. )
  }

  logoutClicked() {
    console.log('log out clicked');
    this._authService.logout();
    this.router.navigateByUrl('login');
  }
}
