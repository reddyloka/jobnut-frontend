import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../_shared/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {

  message: string;
  title: string;
  stay: number;
  constructor(
    private _notificationService: NotificationService
  ) {
    this.message =  _notificationService.message;
    this.title = _notificationService.title;
    this.stay = _notificationService.stay;
   }

  ngOnInit() {
  }

}
