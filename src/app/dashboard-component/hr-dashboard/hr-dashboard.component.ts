import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {


  constructor(
    private _authService: AuthService,
    private router: Router
  ) {
  }

ngOnInit() {

}

  logoutClicked() {
    console.log('log out clicked');
    this._authService.logout();
    this.router.navigateByUrl('login');
  }
}
