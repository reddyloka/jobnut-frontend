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
  temp: any;
  id: string;
  hrdetailForm: FormGroup;
@Input()
hrdata;

  @Output()
  discardClick = new EventEmitter();

@Output()
saveClick = new EventEmitter();

  discardClicked() {
    this.discardClick.emit(JSON.parse(this.temp));
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
    this.temp = JSON.stringify(this.hrdata);
  }

  onSubmit() {
    console.log(this.hrdetailForm);
    console.log('update values', this.hrdetailForm);
    this.hrbaseservice.updateHrDetailsById(this.hrdetailForm.value, this.id).
      subscribe(() => {
      console.log('success');
      });
      this.saveClick.emit(this.hrdata);
  }
}
