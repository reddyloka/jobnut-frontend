import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  message: string;
  title: string;
  stay: number;

  constructor() {
    this.message = 'nothing to display';
    this.title = 'Notifiation';
    this.stay = 2500;
   }

   pop(message: string, title: string, stay: number ) {
    this.message = message;
    this.title = title;
    this.stay = stay;
   }

}
