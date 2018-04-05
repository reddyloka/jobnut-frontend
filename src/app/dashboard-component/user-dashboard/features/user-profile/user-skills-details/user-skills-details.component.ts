import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-skills-details',
  templateUrl: './user-skills-details.component.html',
  styleUrls: ['./user-skills-details.component.css']
})
export class UserSkillsDetailsComponent implements OnInit {
  @Output()
  discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }


  constructor() { }

  ngOnInit() {
  }

}
