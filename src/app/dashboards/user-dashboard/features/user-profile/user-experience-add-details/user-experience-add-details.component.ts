import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { UserBaseService } from '../../../../../_shared/services/user-base.service';
import { uuid } from '../../../../../_shared/models/uuid';
@Component({
  selector: 'app-user-experience-add-details',
  templateUrl: './user-experience-add-details.component.html',
  // styleUrls: ['./user-experience-add-details.component.css']
})
export class UserExperienceAddDetailsComponent implements OnInit {

  id: string;
  applicantForm: FormGroup;
@Output()
discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }
  constructor(private userbaservice: UserBaseService) {
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
  }
  onSubmit() {
  console.log('experience', this.applicantForm);
  this.userbaservice.updateUserExpDetailsById(this.applicantForm.value, this.id).
  then(() => {
    this.discardClicked()
  console.log('success');
  });
  }

}
