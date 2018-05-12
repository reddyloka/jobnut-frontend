import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotificationService } from '../../../../../../_shared/services/notification.service';
import { HrbaseService } from '../../../../../../_shared/services/hrbase.service';
import { uuid } from '../../../../../../_shared/models/uuid';
@Component({
  selector: 'app-hr-manage-applicant-list-details',
  templateUrl: './hr-manage-applicant-list-details.component.html'
})
export class HrManageApplicantListDetailsComponent implements OnInit {

  @Output()
  openChat = new EventEmitter<boolean>();

  @Input()
  postData;
  @Input()
  hrpost;
  userdata: any;
  isShortlisted: boolean;
  chatOpen: boolean;
  id: string;
  hrpostdata: any;
  constructor(private _notif: NotificationService,
              private hrbaseservice: HrbaseService) {
    this.id = uuid();
    this.chatOpen = false;
  }

  ngOnInit( ) {
    console.log('looo', this.hrpost);
    this.isShortlisted = this.postData.isShortlisted;
    this.userdata = this.postData._id;
    this.hrpostdata = this.hrpost;
  }

  shortlist(event) {
    this.isShortlisted = !this.isShortlisted;
    const applicants = {
      isShortlisted: this.isShortlisted
    };
   console.log('short', applicants);
   console.log('short', this.hrpostdata._id);
   console.log('short', this.userdata._id);
       this.hrbaseservice.hrShortlist(applicants, this.hrpostdata._id, this.userdata._id).
      then((res) => {
        console.log('success');
      });
    // if (this.isShortlisted) {
    //   this._notif.pop(`${this.userdata.firstName + ' ' + this.userdata.lastName} has been shortlisted\nfor Job Tittle`, 'Success', 3000);
    // } else {
    //   this._notif.pop(`${this.userdata.firstName + ' ' + this.userdata.lastName} has been deselected\nfrom Job Tittle`, 'Deselect Successfull', 3000);
    // }
  }

  chatOpenClicked() {
    this.openChat.emit(true);
  }

}
