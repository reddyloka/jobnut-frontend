import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../_shared/services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserBaseService } from '../../../_shared/services/user-base.service';
import { uuid } from '../../../_shared/models/uuid';

declare var $:any;
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  

  id: string;
 @Input()
userdata;
inputType: string='password';
public currentForm:FormGroup;
 public resetInfo:Boolean=false;
  constructor(private router: Router,
  private _authService: AuthService,private userbase:UserBaseService,private route: ActivatedRoute) {
    this.id = uuid(); 
    this.buildFormGroup(); 
  }

  buildFormGroup(): void {
    const fg = {
    currentPassword: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
    newPassword:new FormControl(null, [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
    confirmPassword:new FormControl(null, [Validators.required]),
  }
  this.currentForm = new FormGroup(fg);
}
  ngOnInit() {
    $(document).ready(function(){
      $('.ui.dropdown').dropdown();});
    
    }
  getprofile() {
    this.router.navigateByUrl('/user-profile');
  }
  getJob() {

    this.router.navigate(['user-view-post'], {relativeTo: this.route.parent});
  }
  changePassword(){
    $('.small.modal')
    .modal({
      closable  : true,
      onDeny    : function(){
        return true;
      }
    })
    .modal('show');
    console.log('request to change password',this.currentForm.value);
  this.userbase.checkCurrentPassword(this.currentForm.value,this.id).then((data)=>{
    console.log('data',data)
    if(data.status)
    {  $('.small.modal').modal({
      closable : true,
       onDeny  : function(){
        return true;
      }
    }).modal('toggle');
      this.logoutClicked();
    }
    else {
   window.alert(data.errors.message);
   this.buildFormGroup(); 
    }
  })
}

  tooglepwd() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else if (this.inputType === 'text') {
      this.inputType = 'password';
    }
  }
  logoutClicked() {
    this._authService.logout();
    this.router.navigateByUrl('login');
  }
  getAppliedJob() {
    
    this.router.navigateByUrl('/user-profile/applied-job');
    // this.router.navigate(['/applied-job'], {relativeTo: this.route});
  }
}
