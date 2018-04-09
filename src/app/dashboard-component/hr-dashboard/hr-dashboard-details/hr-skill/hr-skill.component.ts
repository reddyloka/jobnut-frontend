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
    this.functional = ['Accounts / Finance / Tax / CS / Audit', 'Architecture / Interior Design', 'Web / Graphic Design / Visualiser', 'Hotels / Restaurants', 'Content / Journalism', 'Banking / Insurance', 'Corporate Planning / Consulting', 'ITES / BPO / KPO / Customer Service / Operations', 'Self Employed / Consultants', 'Export / Import / Merchandising', 'Secretary / Front Office / Data Entry', 'HR / Administration / IR', 'Legal', 'Purchase / Logistics / Supply Chain', 'Marketing / Advertising / MR / PR', 'Pharma / Biotech / Healthcare / Medical / R&D', 'Packaging', 'Production / Maintenance / Quality', 'Site Engineering / Project Management', 'Engineering Design / R&D', 'Sales / BD', 'Teaching / Education', 'IT- Hardware / Telecom / Technical Staff / Support', 'Top Management', 'Other', 'Fashion / Garments / Merchandising', 'TV / Films / Production', 'Ticketing / Travel / Airlines', 'Guards / Security Services', 'Agent', 'IT Software - Application Programming / Maintenance', 'IT Software - Client Server', 'IT Software - DBA / Datawarehousing', 'IT Software - ERP / CRM', 'IT Software - Embedded /EDA /VLSI /ASIC /Chip Des.', 'IT Software - Network Administration / Security', 'IT Software - QA & Testing', 'IT Software - System Programming', 'IT Software - Telecom Software', 'IT Software - Systems / EDP / MIS', 'IT Software - E-Commerce / Internet Technologies', 'IT Software - Mainframe', 'IT Software - Mobile', 'IT Software - Middleware', 'IT Software - Other', 'Analytics & Business Intelligence', 'Shipping', 'CSR & Sustainability', 'Beauty / Fitness / Spa Services'];
  }

  buildFormGroup(): void {
    const fg = {
      'industry': new FormControl(null, Validators.required),
      'functional': new FormControl(null, Validators.required),
      'level': new FormControl(null, [Validators.required]),
      'client': new FormControl(null, Validators.required),
      'skills': new FormControl(null, Validators.required),
    };
    this.hrskillForm = new FormGroup(fg);
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

  discardClicked() {
    this.discardClick.emit(true);
  }
  onSubmit() {
    console.log(this.hrskillForm);
  }
}
