<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
>>>>>>> 5ff6da708c72b35e02324dfb35d6cb719a8217fc

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
<<<<<<< HEAD
  
  ngOnInit(){
    
  }
=======

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

  frontViewChange(sender, cb) {
    if (this.signupActive) {
      return false;
    }
    this.signUpHead['fadeOutDownBig'] = true;
    this.userActiveClasses.push(
      'fadeOut',
      'animated'
    );
    cb(true);
  }

  signupComponentCall(caller: string) {
    this.signupActive = !this.signupActive;
    this.frontViewChange(caller, (res) => {
      if (res) {
        if (caller === 'hr') {
          this.hrActive = true;
        } else if (caller === 'applicant') {
          this.applicantActive = true;
        }
      }
    });
  }

>>>>>>> 5ff6da708c72b35e02324dfb35d6cb719a8217fc
}
