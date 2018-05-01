import { EventEmitter, Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HrbaseService } from '../../../../_shared/services/hrbase.service';
import { uuid } from '../../../../_shared/models/uuid';

@Component({
  selector: 'app-hr-details',
  templateUrl: './hr-details.component.html',
  styleUrls: []
})
export class HrDetailsComponent implements OnInit {
  id: string;
  hrdetailForm: FormGroup;
@Input()
hrdata;

  @Output()
  discardClick = new EventEmitter<boolean>();

@Output()
saveClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }

  constructor(private hrbaseservice: HrbaseService) {
    this.buildFormGroup();
    this.id = uuid();
  }

  buildFormGroup(): void {
    const fg = {
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'dob':  new FormControl(null, Validators.required),
      'phone':  new FormControl(null, Validators.required),
      'industry':  new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'designation': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'jobProfile': new FormControl(null, Validators.required)
    };

    this.hrdetailForm = new FormGroup(fg);
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.hrdetailForm);
    console.log('update values', this.hrdetailForm);
    this.hrbaseservice.updateHrDetailsById(this.hrdetailForm.value, this.id).
      then((res) => {
        console.log('success');
      });
      this.saveClick.emit(true);
  }
}
