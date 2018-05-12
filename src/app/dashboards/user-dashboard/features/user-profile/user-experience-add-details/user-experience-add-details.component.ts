import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { UserBaseService } from '../../../../../_shared/services/user-base.service';
import { uuid } from '../../../../../_shared/models/uuid';

@Component({
  selector: 'app-user-experience-add-details',
  templateUrl: './user-experience-add-details.component.html',
  styleUrls: []
})
export class UserExperienceAddDetailsComponent implements OnInit {
  personaldata: any;
  id: any;
  applicantForm: FormGroup;
  @Input()
  userdata;

  @Output()
  discardClick = new EventEmitter();
  @Output()
  saveClick = new EventEmitter();
  constructor(private _userService: UserBaseService) {
    this.buildFormGroup();
    this.id = uuid();
  }
  
  buildFormGroup(): void {
    const fg = {
      'designation': new FormControl(null, Validators.required),
      'totalExperience': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
    };
    this.applicantForm = new FormGroup(fg);
  }
  
  ngOnInit() {
<<<<<<< HEAD
    this.buildFormGroup();
    // this.personaldata = this.userdata;
=======
    this.personaldata  = JSON.stringify(this.userdata);
  this.personaldata=JSON.parse(this.personaldata)
>>>>>>> a60d25fcceab1c839611d3c23ccc5192340f84d2
  }
  onSubmit() {
     this.personaldata.experience.push(this.applicantForm.value);
    console.log('values exp', this.personaldata);
    this._userService.updateUserDetailsById( this.personaldata, this.id).
    then(() => {
      this.saveClick.emit(this.personaldata);
    });
  }
  discardClicked() {
    this.discardClick.emit(this.personaldata);
  }
}
