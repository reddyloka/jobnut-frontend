import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-personal-details',
  templateUrl: './user-personal-details.component.html',
  styleUrls: ['./user-personal-details.component.css']
})
export class UserPersonalDetailsComponent implements OnInit {
  applicantForm: FormGroup;
  @Output()
  discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }
  constructor() {
    this.buildFormGroup();
  }

  buildFormGroup(): void {
    const fg = {
      'fname': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'lname': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z\.0-9]+@[A-Za-z]+(.)[A-Za-z]+')]),
      'dob': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{5,}$')]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
      'skillValue': new FormControl(null, Validators.required)
    };
    this.applicantForm = new FormGroup(fg);

  }
  ngOnInit() {
  }

}
