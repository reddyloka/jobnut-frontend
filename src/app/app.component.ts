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
  // private toasterService: ToasterService;
  constructor(
    private router: Router,
    _notificationService: NotificationService
  ) {
  }
  title = 'app';

}
