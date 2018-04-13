import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../../_shared/data.service';

@Component({
  selector: 'app-hr-manage-applicant',
  templateUrl: './hr-manage-applicant.component.html',
  styleUrls: ['./hr-manage-applicant.component.css']
})
export class HrManageApplicantComponent implements OnInit {
  @Input()
  applicant;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // console.log('hrpost', this.hrpost);
  }
  viewDetails() {
    console.log(this.applicant);
    this.data.changeMessage(this.applicant);
    this.router.navigate(['callback'], {queryParams: this.applicant} );
  }

}
