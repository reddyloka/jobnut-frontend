import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {

  id: string;

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {
    // this.id =
    if (!_authService.isLoggedIn) {
      this.router.navigateByUrl('login');
    }
  }

  ngOnInit() {

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
