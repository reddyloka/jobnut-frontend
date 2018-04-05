import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-view-post-deatilssummary',
  templateUrl: './user-view-post-deatilssummary.component.html',
  styleUrls: ['./user-view-post-deatilssummary.component.css']
})
export class UserViewPostDeatilssummaryComponent implements OnInit {
@Input()
hrpost;
  constructor() { }

  ngOnInit() {
  }

}
