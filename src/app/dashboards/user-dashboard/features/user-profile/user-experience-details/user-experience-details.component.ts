import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
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

  constructor() {
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
  
  
  discardClicked() {
    this.discardClick.emit(true);
  }
}
