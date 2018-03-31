import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {
  detailsOpen: boolean;
  jobOpen: boolean;
  skillsOpen: boolean;
  isAuthenticated: boolean;

  constructor(
    private router: Router,
    private _authService: AuthService
  ) {
    this.detailsOpen = false;
    this.jobOpen = false;
    this.skillsOpen = false;
  }

  ngOnInit() {
    console.log('from hr: ', this._authService.isLoggedIn());
    if (!this._authService.isLoggedIn()) {
      this.router.navigateByUrl('login');
    }
  }
  getDetails() {
    this.detailsOpen = true;
  }
  closeDetails() {
    this.detailsOpen = false;
  }
  getJob() {
    this.jobOpen = true;
  }
  closeJob() {
    this.jobOpen = false;
  }
  getSkills() {
    this.skillsOpen = true;
  }
  closeSkills() {
    this.skillsOpen = false;
  }


  // abhishek code

  logoutClicked() {
    console.log('log out clicked');
    this._authService.logout();
    this.router.navigateByUrl('login');
  }
}
