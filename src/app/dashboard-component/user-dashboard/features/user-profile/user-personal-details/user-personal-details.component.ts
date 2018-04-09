import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { ApplicantBase } from '../../../../../model/applicantbase';
import { UserBaseService } from '../../../../../services/userbase/user-base.service';
import { uuid } from '../../../../../_helper/uuid';
@Component({
  selector: 'app-user-personal-details',
  templateUrl: './user-personal-details.component.html',
  styleUrls: []
})
export class UserPersonalDetailsComponent implements OnInit {
  id: string;
  personaldata: ApplicantBase;
  applicantForm: FormGroup;
  @Input()
  userdata;

  @Output()
  discardClick = new EventEmitter<boolean>();
  @Output()
  saveClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }
  constructor(private userbaseservice: UserBaseService) {
    this.buildFormGroup();
    this.personaldata = this.userdata;
    console.log('personalData', this.personaldata);
    this.id = uuid();
  }

  buildFormGroup(): void {
    const fg = {
      'firstName': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'lastName': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
      'dob': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
      'skillValue': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
    };
    this.applicantForm = new FormGroup(fg);

  }
  ngOnInit() {
  }

  onsubmit() {
    console.log('update values', this.applicantForm);
    this.userbaseservice.updateUserDetailsById(this.applicantForm.value, this.id).
      then((res) => {
        this.personaldata = res;
        console.log('success');
      });
      this.saveClick.emit(true);
  }
}
