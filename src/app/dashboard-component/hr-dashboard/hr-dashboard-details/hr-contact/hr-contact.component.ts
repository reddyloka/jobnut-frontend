import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hr-contact',
  templateUrl: './hr-contact.component.html',
  styleUrls: ['./hr-contact.component.css']
})
export class HrContactComponent implements OnInit {

 @Output()
  discardClick = new EventEmitter<boolean>();
  hrcontactForm: FormGroup;

  constructor() {
    this.buildFormGroup();
   }

   buildFormGroup(): void {
    const fg = {
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'email2': new FormControl(null),
      'phone': new FormControl(null, [Validators.required]),
      'fburl': new FormControl(null, Validators.required),
      'linkurl': new FormControl(null, Validators.required),
    };
    this.hrcontactForm = new FormGroup(fg);
  }

  ngOnInit() {

  }

  discardClicked() {
    this.discardClick.emit(true);
  }

}

