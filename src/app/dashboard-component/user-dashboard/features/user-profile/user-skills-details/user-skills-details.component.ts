import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-user-skills-details',
  templateUrl: './user-skills-details.component.html',
  styleUrls: ['./user-skills-details.component.css']
})
export class UserSkillsDetailsComponent implements OnInit {
  applicantForm: FormGroup;
  skillsArray: string[];
  @Input()
  userdata;

  @Output()
  discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }


  constructor() {
    this.skillsArray = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML',
    'Information Architecture', 'Javascript', 'Mechanical Engineering',
    'Meteor', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];
    this.buildFormGroup();
   }

   
  buildFormGroup(): void {
    const fg = {
      'skillValue':new FormControl(null, [Validators.required])
    };
    this.applicantForm = new FormGroup(fg);
  }
  ngOnInit() {
    $('.dropdown').dropdown({
      label: {
        duration: 0,
      },
      debug: true,
      performance: true,
    });

    console.log(this.userdata)
  }

}
