import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-hr-skill',
  templateUrl: './hr-skill.component.html',
  styleUrls: ['./hr-skill.component.css'],
})
export class HrSkillComponent implements OnInit {
  skillsArray: string[];
  @Input()
   hrpost;

  @Output()
  discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }


  constructor() {
    this.skillsArray = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML',
    'Information Architecture', 'Javascript', 'Mechanical Engineering',
    'Meteor', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
   }

  ngOnInit() {
    $('.dropdown').dropdown({
      label: {
        duration: 0,
      },
      debug: true,
      performance: true,
    });
  }
}
