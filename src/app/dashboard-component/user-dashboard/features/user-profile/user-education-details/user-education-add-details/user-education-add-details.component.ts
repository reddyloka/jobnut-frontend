import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-education-add-details',
  templateUrl: './user-education-add-details.component.html',
  styleUrls: ['./user-education-add-details.component.css']
})
export class UserEducationAddDetailsComponent implements OnInit {

  yearArray: string[];
  highestDegreeArray1: string[];
  @Output()
  discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }

  constructor() {
    this.highestDegreeArray1 = ['B-Tech', 'B.Sc'];
    this.yearArray = ['2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998'];
 
  }

  ngOnInit() {
  }

}
