import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { UserBaseService } from '../../../../../_shared/services/user-base.service';
import { uuid } from '../../../../../_shared/models/uuid';

@Component({
  selector: 'app-user-experience-details',
  templateUrl: './user-experience-details.component.html',
  styleUrls: []
})
export class UserExperienceDetailsComponent implements OnInit {
  personaldata: any;
  id: any;
  applicantForm: FormGroup;
  @Input()
  userdata;

  @Output()
  discardClick = new EventEmitter<boolean>();

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
    this.buildFormGroup();
    this.personaldata = this.userdata;
  }
  async onSubmit() {
    console.log('experience', this.applicantForm.value);
    // await this._userService.updateUserExpDetailsById(this.applicantForm.value, this.id).
    await this.userdata.experience.push(this.applicantForm.value);
    console.log('values exp', this.userdata);
    this._userService.updateUserExpDetailsById(this.userdata, this.id).
    then((res) => {
      this.personaldata = res;
      console.log('experience updated');
    });
    this.saveClick.emit(this.userdata);
  }
  
  discardClicked() {
    this.discardClick.emit(true);
  }
}
