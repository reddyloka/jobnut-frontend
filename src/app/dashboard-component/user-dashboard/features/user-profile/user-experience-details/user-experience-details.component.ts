import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { UserBaseService } from '../../../../../services/userbase/user-base.service';

@Component({
  selector: 'app-user-experience-details',
  templateUrl: './user-experience-details.component.html',
  styleUrls: []
})
export class UserExperienceDetailsComponent implements OnInit {

  applicantForm: FormGroup;
@Input()
userdata;
@Output()
discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }
  constructor(private _userService: UserBaseService) {
    this.buildFormGroup();
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
  }
  onSubmit() {
    // this._userService.detailsUpdate(this.applicantForm, {
    // })
  }

}
