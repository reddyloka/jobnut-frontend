import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { NotificationService } from './_shared/notification.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  popup = {
    isActive: false,
    message: 'this is popup',
    title: 'My Popup',
    stay: 3000
  };
  private _notificationService: NotificationService;
  constructor(
    private router: Router,
    _notificationService: NotificationService
  ) {
    this._notificationService = _notificationService;
  }
  title = 'app';

  popupClicked(event) {
    this.popup.isActive = event;
    // this._notificationService.pop('message1', 'message2', 3000);
  }

}
