import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrPostDetail } from '../../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../../services/hrbase.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { uuid } from '../../../../../_helper/uuid';
@Component({
  selector: 'app-hr-edit-new-post',
  templateUrl: './hr-edit-new-post.component.html',
  styleUrls: []
})
export class HrEditNewPostComponent implements OnInit {
  hrpostNewDataForm: FormGroup;
  id: string;

  hrpostNewData: HrPostDetail;
  constructor(private hrbaseservice: HrbaseService,
    private router: Router) {
    this.hrpostNewData = HrPostDetail.createblank();
    console.log(this.hrpostNewData);
    this.buildFormGroup();
    this.id = uuid();
  }

  buildFormGroup(): void {
    const fg = {
      'title': new FormControl(this.hrpostNewData.title, [Validators.required]),
      'description': new FormControl(this.hrpostNewData.description, [Validators.required]),
      'companyname': new FormControl(this.hrpostNewData.companyname, [Validators.required]),
      'startdate': new FormControl(this.hrpostNewData.startdate, [Validators.required]),
      'enddate': new FormControl(this.hrpostNewData.enddate, [Validators.required]),
      'skills': new FormControl(this.hrpostNewData.skills, [Validators.required]),
      'location': new FormControl(this.hrpostNewData.location, [Validators.required]),
      'salary': new FormControl(this.hrpostNewData.salary, [Validators.required]),
      'experinece': new FormControl(this.hrpostNewData.experinece, [Validators.required]),
      'dateOfJoining': new FormControl(this.hrpostNewData.dateOfJoining, [Validators.required]),
      'extraRequirement': new FormControl(this.hrpostNewData.extraRequirement, []),
      'noOfJobOpenings': new FormControl(this.hrpostNewData.noOfJobOpenings, []),
      'CompanyUrl': new FormControl(this.hrpostNewData.CompanyUrl, [Validators.required]),
      'bondDetails': new FormControl(this.hrpostNewData.bondDetails, [Validators.required]),
      'ReportingVenue': new FormControl(this.hrpostNewData.ReportingVenue, [Validators.required]),
      'ResourcePersonContact': new FormControl(this.hrpostNewData.ResourcePersonContact, [Validators.required]),
      'selectionProcedure': new FormControl(this.hrpostNewData.selectionProcedure, [Validators.required]),
    };

    this.hrpostNewDataForm = new FormGroup(fg);

  }
  ngOnInit() {
  }


  onSubmit() {
    this.hrbaseservice.addNewPost(this.hrpostNewData, this.id);
    this.router.navigate(['hr-post']);
  }
}
