import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/authentication/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  username: string;
  loginForm: FormGroup;



  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _authService: AuthService
  ) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  ngOnInit() {
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

  login(): void {
    const val = this.loginForm.value;
    console.log(val);

    if (val.username && val.pass) {
      this._authService.login(val.username, val.pass).subscribe(
        () => {
          console.log('user logged in');
        }
      );
    }
  }

}
