import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import {SelectModule} from 'ng2-select';

@Component({
  selector: 'app-hr-skill',
  templateUrl: './hr-skill.component.html',
  styleUrls: ['./hr-skill.component.css'],
})
export class HrSkillComponent implements OnInit {
  @Output()
  discardClick = new EventEmitter<boolean>();
  // hrskillForm: FormGroup

  constructor() {
    // this.buildFormGroup();
   }
  //  buildFormGroup(): void {
  //   const fg = {
  //     'industry': new FormControl(null, Validators.required),
  //     'functional': new FormControl(null, Validators.required),
  //     'levels': new FormControl(null, [Validators.required]),
  //     'hirefor': new FormControl(null, Validators.required),
  //     'skills': new FormControl(null, Validators.required),
  //   };
  //   this.hrskillForm = new FormGroup(fg);
  // }

  ngOnInit() {
  }
  /////////////////////////////////////////////////////////////////
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
  'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
  'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
  'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
  'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
  'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
  'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

private value:any = ['Athens'];
private _disabledV:string = '0';
private disabled:boolean = false;

private get disabledV():string {
  return this._disabledV;
}

private set disabledV(value:string) {
  this._disabledV = value;
  this.disabled = this._disabledV === '1';
}

public selected(value:any):void {
  console.log('Selected value is: ', value);
}

public removed(value:any):void {
  console.log('Removed value is: ', value);
}

public refreshValue(value:any):void {
  this.value = value;
}

  public itemsToString(value:Array<any> = []):string {
    return value
      .map((item:any) => {
        return item.text;
      }).join(',');
  }

  /////////////////////////////////////////////////////////////////
  discardClicked() {
    this.discardClick.emit(true);
  }
  onSubmit(){
    // console.log(this.hrskillForm);
  }
}
