import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TryService } from '../try.service';

@Component({
  selector: 'app-pd',
  templateUrl: './pd.component.html',
  styleUrls: ['./pd.component.css']
})
export class PdComponent implements OnInit {

  pdForm: FormGroup;
  // @Output()
  // pdClick = new EventEmitter<boolean>();


  constructor(
    private _tryservice: TryService
  ) { 

  }

  ngOnInit() {
    this.pdForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'number': new FormControl(null, Validators.required),
   });
  }

  personalDetailClicked() {
    console.log('pdclikck');
    this._tryservice.emitChange(true);
    // this.pdClick.emit(true);
    console.log(this.pdForm);
  }
}
