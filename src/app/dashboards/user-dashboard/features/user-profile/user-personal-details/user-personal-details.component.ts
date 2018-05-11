import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { UserBaseService } from '../../../../../_shared/services/user-base.service';
import { ApplicantBase } from '../../../../../_shared/models/applicantbase';
import { uuid } from '../../../../../_shared/models/uuid';
@Component({
  selector: 'app-user-personal-details',
  templateUrl: './user-personal-details.component.html',
  styleUrls: []
})
export class UserPersonalDetailsComponent implements OnInit {
  id: string;
  temp: any;
  personaldata: ApplicantBase;
  applicantForm: FormGroup;
  @Input()
  userdata;

  @Output()
  discardClick = new EventEmitter();
  @Output()
  saveClick = new EventEmitter();

  discardClicked() {
    // Object.assign(this.userdata, this.temp);
    // this.userdata = this.temp;
    console.log('Discarderd', this.temp);
    this.discardClick.emit(JSON.parse(this.temp));
  }
  constructor(private userbaseservice: UserBaseService) {
    this.buildFormGroup();
    // this.personaldata = this.userdata;
    // this.temp = this.userdata;
    console.log('personalDatadwkfnn kdjsnkjwnjk', JSON.stringify(this.userdata));
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
    this.temp = JSON.stringify(this.userdata);
    console.log('personalDatadwkfnn kdjsnkjwnjk', JSON.stringify(this.temp));
  }

  onsubmit() {
    console.log('update values', this.applicantForm);
    this.userbaseservice.updateUserDetailsById(this.applicantForm.value, this.id).
      subscribe(() => {
        this.saveClick.emit(this.userdata);
        console.log('success');
      });
  }
}
