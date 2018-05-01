import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HrbaseService } from '../../../../services/hrbase.service';
import { Router } from '@angular/router';
import { uuid } from '../../../../_helper/uuid';

@Component({
  selector: 'app-hr-experience',
  templateUrl: './hr-experience.component.html',
  styleUrls: []
})
export class HrExperienceComponent implements OnInit {
  id: string;
  hrexperienceForm: FormGroup;

  @Output()
  discardClick = new EventEmitter<boolean>();
  @Output()
  saveClick = new EventEmitter<boolean>();

  constructor(private hrbaseService: HrbaseService, route: Router) {
    this.buildFormGroup();
  }

  buildFormGroup(): void {
    const fg = {
      'currdesig': new FormControl(null, [Validators.required]),
      'curremp': new FormControl(null, Validators.required),
      'jobprofile': new FormControl(null, [Validators.required]),
      'joinedin': new FormControl(null, Validators.required)
    };
    this.hrexperienceForm = new FormGroup(fg);
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('update values', this.hrexperienceForm);
    this.hrbaseService.updateHrExpDetailsById(this.hrexperienceForm.value, this.id).
      then((res) => {
        console.log('success');
      });
    this.saveClick.emit(true);
  }

  discardClicked() {
    this.discardClick.emit(true);
  }

}
