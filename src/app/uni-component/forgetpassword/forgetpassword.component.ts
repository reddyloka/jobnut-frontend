import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApplicantBase } from '../../model/applicantbase';
import { UserBaseService } from '../../services/userbase/user-base.service';
import { promise } from 'protractor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

 
  loginEmailForm: FormGroup;
  resetForm: FormGroup;
  UserEmail:string;
  forgetInfo:Boolean=true;
  resetInfo:Boolean=false;
  inputType: string='password';
  user_details:ApplicantBase;

  constructor(private fb: FormBuilder,private _userbase:UserBaseService,private router: Router) {
    this.user_details = ApplicantBase.createblank();
    this.loginEmailForm = fb.group({
      userEmail: new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')])
    });
    this.resetForm = fb.group({
     password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
     confirmPassword:new FormControl(null,[Validators.required])
    });
   }

  ngOnInit() {
  }
  tooglepwd() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else if (this.inputType === 'text') {
      this.inputType = 'password';
    }
  }
  resetPassword(){
    this.forgetInfo=false;
    this.resetInfo=true;
}
onSubmit(){
  console.log('login form value',this.loginEmailForm.value);
  console.log('reset form value',this.resetForm.value);
this._userbase.passwordUpdate(this.loginEmailForm.value.userEmail,this.resetForm.value.password)
.then(()=>{
  console.log('password updated successfully');
  this.router.navigateByUrl('login');
});
}
 
}
