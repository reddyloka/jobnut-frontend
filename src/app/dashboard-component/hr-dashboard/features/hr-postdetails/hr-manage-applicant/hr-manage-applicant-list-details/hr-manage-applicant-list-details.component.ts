import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-hr-manage-applicant-list-details',
  templateUrl: './hr-manage-applicant-list-details.component.html',
  styleUrls: ['./hr-manage-applicant-list-details.component.css']
})
export class HrManageApplicantListDetailsComponent implements OnInit {

  @Input()
  userdata;

  constructor() { }

  ngOnInit() {
  }

}
