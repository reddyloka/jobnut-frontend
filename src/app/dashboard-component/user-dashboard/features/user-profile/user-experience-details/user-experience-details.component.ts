import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-experience-details',
  templateUrl: './user-experience-details.component.html',
  styleUrls: []
})
export class UserExperienceDetailsComponent implements OnInit {

  @Output()
  discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }
  constructor() { }

  ngOnInit() {
  }

}
