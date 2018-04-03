import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hr-experience',
  templateUrl: './hr-experience.component.html',
  styleUrls: ['./hr-experience.component.css']
})
export class HrExperienceComponent implements OnInit {

  @Output()
  discardClick = new EventEmitter<boolean>();
  hrexperienceForm: FormGroup;

    constructor() {
      this.buildFormGroup();
     }

     buildFormGroup(): void {
       const fg = {
        'currdesig': new FormControl(null, [Validators.required]),
        'curremp': new FormControl(null, Validators.required),
        'jobprofile': new FormControl(null, [Validators.required]),
        'joinedin': new FormControl(null, Validators.required),
       }
       this.hrexperienceForm = new FormGroup(fg);
     }

    ngOnInit() {
    }

    discardClicked() {
      this.discardClick.emit(true);
    }

}
