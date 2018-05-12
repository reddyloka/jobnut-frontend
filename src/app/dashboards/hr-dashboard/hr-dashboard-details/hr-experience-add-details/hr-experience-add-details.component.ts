import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HrbaseService } from '../../../../_shared/services/hrbase.service';
import { Hrbase } from '../../../../_shared/models/hrbase';
import { uuid } from '../../../../_shared/models/uuid';
@Component({
  selector: 'app-hr-experience-add-details',
  templateUrl: './hr-experience-add-details.component.html'
})
export class HrExperienceAddDetailsComponent implements OnInit {
  @Input()
  hrdata;

  personaldata: Hrbase;
  id: string;
  applicantForm: FormGroup;

  @Output()
  discardClick = new EventEmitter<boolean>();
  @Output()
  saveClick = new EventEmitter<any>();

  constructor(private hrbaservice: HrbaseService,
    private router: Router) {
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
    this.personaldata = this.hrdata;
  }

  async onSubmit() {
    await this.hrdata.experience.push(this.applicantForm.value);
    console.log('values exp', this.hrdata);
    this.hrbaservice.updateHrDetailsById(this.hrdata, this.id).
      then((res) => {
        this.personaldata = res;

        console.log('experience updated');
      });
    // this.router.navigateByUrl('hr');
    this.saveClick.emit(true);
  }

  discardClicked() {
    this.discardClick.emit(true);
  }
}
