import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-education-details',
  templateUrl: './user-education-details.component.html',
  styleUrls: []
})
export class UserEducationDetailsComponent implements OnInit {

  mediumArray: string[];
  boardArray: string[];
  yearArray: string[];
  specializationArray: string[];
  coursesArray: string[];
  highestDegreeArray: string[];
  @Output()
  discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }


  constructor() {
    this.highestDegreeArray = ['B-Tech', 'B.Sc'];
    this.yearArray = ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004'];
  }

  ngOnInit() {
  }

}
