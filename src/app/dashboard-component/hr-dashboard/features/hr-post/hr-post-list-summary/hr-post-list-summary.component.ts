import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hr-post-list-summary',
  templateUrl: './hr-post-list-summary.component.html',
  styleUrls: ['./hr-post-list-summary.component.css']
})
export class HrPostListSummaryComponent implements OnInit {
@Input()
hrpost;

@Output()
userclick: EventEmitter<number> = new EventEmitter();

 public userclicked() {

   this.userclick.emit(this.hrpost._id);
 }

  constructor() { }

  ngOnInit() {
  }


}
