import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HrPostDetail } from '../../../../model/hrpostdetails';
import { HrbaseService } from '../../../../services/hrbase.service';
@Component({
  selector: 'app-hr-postdetails',
  templateUrl: './hr-postdetails.component.html',
  styleUrls: ['./hr-postdetails.component.css']
})
export class HrPostdetailsComponent implements OnInit {

  hrpost: HrPostDetail;
  constructor(private route: ActivatedRoute,
    private hrbaseservice: HrbaseService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const hrpost_id = parseInt(params.get('hr-post.id'), 10);
      this.hrbaseservice.getHrPostById(hrpost_id).
      then((hrpost) => {
        console.log(hrpost);
        this.hrpost = hrpost;
      });
    });
  }

}
