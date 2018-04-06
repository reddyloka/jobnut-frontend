import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hr-experience',
  templateUrl: './hr-experience.component.html',
  styleUrls: []
})
export class HrExperienceComponent implements OnInit {

  @Output()
  discardClick = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() {
    }

    discardClicked() {
      this.discardClick.emit(true);
    }

}
