import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hr-newjob',
  templateUrl: './hr-newjob.component.html',
  styleUrls: ['./hr-newjob.component.css']
})
export class HrNewjobComponent implements OnInit {
  @Output()
  discardClick = new EventEmitter<boolean>();
  hrnewjobForm: FormGroup

  constructor() {
    this.buildFormGroup();
   }

   buildFormGroup(): void {
    const fg = {
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'keywords': new FormControl(null, [Validators.required]),
      'minexp': new FormControl(null, Validators.required),
      'maxexp': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required),
      'hiringfor': new FormControl(null, Validators.required),
      'joblink': new FormControl(null, Validators.required),
    };
    this.hrnewjobForm = new FormGroup(fg);
  }

  ngOnInit() {
  }
  
  discardClicked() {
    this.discardClick.emit(true);
  }

  onSubmit(){
    console.log(this.hrnewjobForm);
  }

}
