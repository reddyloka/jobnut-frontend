import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hr-postdetails-summary',
  templateUrl: './hr-postdetails-summary.component.html',
  styleUrls: ['./hr-postdetails-summary.component.css']
})
export class HrPostdetailsSummaryComponent implements OnInit {

  @Input()
  hrpost;
  constructor() { }

  ngOnInit() {
  }

}
