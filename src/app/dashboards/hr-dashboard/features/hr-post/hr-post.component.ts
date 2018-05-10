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
  error_text: any;
  id: string;
  hrpost: HrPostDetail[];
  loadPage: boolean = false;
  loadError: boolean = false;
  constructor(private hrbaseservice: HrbaseService,
    private router: Router) {
      this.id = uuid();
    }

  ngOnInit() {
    this.hrbaseservice.getAllHrPost(this.id).
      then((hrpost) => {
        this.hrpost = hrpost;
        console.log(hrpost);
        this.loadPage = true
      }).
      catch((error=>{
       this.loadError = true;
      this.error_text = "Get error on server request ";
      }))
  }

  public routeronclicked(hrpost_id): void {
    this.router.navigateByUrl('/jobs-posted/' + hrpost_id);
  }
}
