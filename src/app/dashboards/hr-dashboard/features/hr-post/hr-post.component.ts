import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrbaseService } from '../../../../_shared/services/hrbase.service';
import { HrPostDetail } from '../../../../_shared/models/hrpostdetails';
import { uuid } from '../../../../_shared/models/uuid';

@Component({
  selector: 'app-hr-post',
  templateUrl: './hr-post.component.html',
  styleUrls: []
})
export class HrPostComponent implements OnInit {
  id: string;
  hrpost: HrPostDetail[];
  constructor(private hrbaseservice: HrbaseService,
    private router: Router) {
      this.id = uuid();
    }

  ngOnInit() {
    this.hrbaseservice.getAllHrPost(this.id).
      then((hrpost) => {
        this.hrpost = hrpost;
        console.log(hrpost);
      });
  }

  public routeronclicked(hrpost_id): void {
    this.router.navigateByUrl('/jobs-posted/' + hrpost_id);
  }
}
