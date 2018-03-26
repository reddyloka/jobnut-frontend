import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hrActive: boolean;
  applicantActive: boolean;
  signupActive: boolean;
  userActiveClasses: string[];
  signUpHead: any;
  constructor(private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute) {
    this.userActiveClasses = [];
    this.signupActive = true;
    this.signUpHead = {
      'fadeOutDownBig': false,
      'animated': true
    };
    this.applicantActive = false;
    this.hrActive = false;
  }

  ngOnInit() {
    if (this.router.url.split('/').splice(-1).toString() === 'signin-hr') {
      this.signupActive = false;
    }
    // console.log(this.router.url);
    // console.log('hrsignup: ', this.hrsignupActive);
  }

  public goBackButton() {
    this.location.back();
  }

  frontViewChange(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.signUpHead['fadeOutDownBig'] = true;
      this.userActiveClasses.push(
        'fadeOut',
        'animated'
      );
      setTimeout(resolve, 200);
    });
  }

  async signupComponentCall(caller: string) {

    await this.frontViewChange();

    // await new Promise((res,rej)=> setTimeout(res,1000));
    // if ( response ) {
    if (caller === 'hr') {
      // this.hrActive = true;
      this.signupActive = false;
      // this.router.navigate(['./', 'signin-hr']);
      this.router.navigateByUrl('signin/signin-hr');
    } else if (caller === 'applicant') {
      // this.router.navigate(['./', 'signin-applicant']);
      // this.applicantActive = true;
    }
    // }
  }

}
