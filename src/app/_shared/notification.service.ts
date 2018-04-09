import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  message: string;
  title: string;
  stay: number;

  activatePopup: boolean;

  constructor() {
    this.message = 'nothing to display';
    this.title = 'Notifiation';
    this.stay = 3000;
    this.activatePopup = false;
   }

   pop(message: string, title: string, stay: number ) {
     console.log('popped');
    this.message = message;
    this.title = title;
    this.stay = stay;
    this.activatePopup = true;
   }

}
