import { Component, OnInit, ViewChild } from '@angular/core';
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
    private location: Location) {
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
  }

  public goBackButton() {
    this.location.back();
  }

  frontViewChange(): Promise<any> {
   return new Promise((resolve,reject)=> {
    this.signUpHead['fadeOutDownBig'] = true;
    this.userActiveClasses.push(
      'fadeOut',
      'animated'
    );
    setTimeout(resolve,200);
  });
}

  async signupComponentCall(caller: string) {

    await this.frontViewChange(); 
        this.signupActive = false;
      if (caller === 'hr') {
        this.hrActive = true;
      } else if (caller === 'applicant') {
        this.applicantActive = true;
      }
  }

}
