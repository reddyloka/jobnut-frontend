import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HrPostDetail } from '../../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../../services/hrbase.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-hr-postdetails-edit-list',
  templateUrl: './hr-postdetails-edit-list.component.html',
  styleUrls: ['./hr-postdetails-edit-list.component.css']
})
export class HrPostdetailsEditListComponent implements OnInit {
  skillsArray: string[];
  hrpostNewDataForm: FormGroup;
  id: string;
  @Input()
  hrpost;


@Output()
saveClick = new EventEmitter<boolean>();

  constructor(private hrbaseservice: HrbaseService,
    private router: Router) {
    this.buildFormGroup();
    this.skillsArray = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML', 'Javascript',
      'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby', 'c', 'c++', 'java', 'Database', 'Mean stack', 'Full stack'];
  }

  buildFormGroup(): void {
    const fg = {
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'companyname': new FormControl(null, [Validators.required]),
      'startdate': new FormControl(null, [Validators.required]),
      'enddate': new FormControl(null, [Validators.required]),
      'skills': new FormControl(null, [Validators.required]),
      'location': new FormControl(null, [Validators.required]),
      'salary': new FormControl(null, [Validators.required]),
      'experinece': new FormControl(null, [Validators.required]),
      'dateOfJoining': new FormControl(null, [Validators.required]),
      'extraRequirement': new FormControl(null, []),
      'noOfJobOpenings': new FormControl(null, []),
      'CompanyUrl': new FormControl(null, [Validators.required]),
      'bondDetails': new FormControl(null, [Validators.required]),
      'ReportingVenue': new FormControl(null, [Validators.required]),
      'ResourcePersonContact': new FormControl(null, [Validators.required]),
      'selectionProcedure': new FormControl(null, [Validators.required]),
    };

    this.hrpostNewDataForm = new FormGroup(fg);

  }
  ngOnInit() {
    $('.dropdown').dropdown({
      label: {
        duration: 0,
      },
      // debug: true,
      performance: true,
    });
    this.id = this.hrpost._id;
  }

  onSubmit() {
    console.log('edit', this.hrpostNewDataForm.value);
    this.hrbaseservice.HrPostUpdate(this.hrpostNewDataForm.value, this.id).
      then((res) => {
        console.log('success');
      });
      this.saveClick.emit(true);
  }
}
