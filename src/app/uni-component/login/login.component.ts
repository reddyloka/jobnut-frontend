import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/authentication/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../../_helper/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  username: string;
  loginForm: FormGroup;
  message: any;
  variable: any;

  constructor(
    private _jwtService: JwtService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _authService: AuthService
  ) {
    this.message = {
      username: {
        text: 'Username Required!',
      },
      password: {
        text: 'Password Required!',
      }
    };

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      isHr: [false, Validators.required]
    });
  }

  ngOnInit() {
      if (this._authService.isLoggedIn) {
        this.router.navigateByUrl('hr');
      }
      this.router.navigateByUrl('');
  }


  // usernameEntered(val) {
  // console.log('value of username : ', val);
  // }
  // passwordEntered() {
  // console.log('value of username : ', this.password);
  // }

  public signupButtonClicked() {
    this.router.navigateByUrl('signin');
    return false;
  }
  // abhishek's changes for routing data token jwt
  login(): void {
    const val = this.loginForm.value;
    console.log(val);

    if (val.username && val.password) {
      // console.log(' :im here');
      this._authService.login(val)
        .subscribe(
          (yo:  any) => {
            console.log('user logged in', yo.user);
            if (yo.user && yo.user.status && yo.user.isHr) {
              this.router.navigateByUrl('hr');
            }
            if (yo.user && yo.user.status && yo.user.isApplicant) {
              console.log('user logged in', yo);
              this.router.navigateByUrl('user-view-post');
            }
          });
    }
  }
  // abhishek's changes for routing data token jwt
  checkValid() {
    console.log(this.loginForm.value);
  }

}
