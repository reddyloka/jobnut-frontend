import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { HrbaseService } from '../../../../../_shared/services/hrbase.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-hr-post-list-summary',
  templateUrl: './hr-post-list-summary.component.html',
  styleUrls: []
})
export class HrPostListSummaryComponent implements OnInit {
@Input()
hrpost;
 
@Output()
userclick: EventEmitter<number> = new EventEmitter();

 public userclicked() {

   this.userclick.emit(this.hrpost._id);
 }

  constructor(public hrbaseservice:HrbaseService,public router:Router) {

  }

  ngOnInit() {
  }
  deletePost(){
    let windowStatus=window.confirm('confirm to delete post');
    if(windowStatus){
    this.hrbaseservice.deleteHrPost(this.hrpost._id).then(()=>{
      console.log('deleted successfully');
    })
  }
  }

}
