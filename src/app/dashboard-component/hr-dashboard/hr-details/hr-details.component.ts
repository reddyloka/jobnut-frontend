import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import {  } from 'protractor';

@Component({
  selector: 'app-hr-details',
  templateUrl: './hr-details.component.html',
  styleUrls: ['./hr-details.component.css']
})
export class HrDetailsComponent implements OnInit {

  @Output()
  discardClick = new EventEmitter<boolean>();

  constructor() {
   }

  ngOnInit() {
  }

  discardClicked() {
    this.discardClick.emit(true);
  }
}
