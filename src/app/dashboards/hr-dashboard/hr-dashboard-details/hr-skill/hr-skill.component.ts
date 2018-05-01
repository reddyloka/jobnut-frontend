import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-hr-skill',
  templateUrl: './hr-skill.component.html',
  styleUrls: [],
})
export class HrSkillComponent implements OnInit {
  skillsArray: string[];
  @Input()
   hrpost;

  @Output()
  discardClick = new EventEmitter<boolean>();

  hrskillForm: FormGroup;
  functional: string[];


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

  // onSubmit() {
  //   console.log(this.hrskillForm);
  // }
}
