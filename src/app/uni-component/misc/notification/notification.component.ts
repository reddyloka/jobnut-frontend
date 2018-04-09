import { Component, OnInit, Output, HostBinding, Directive, HostListener, Input, OnChanges, SimpleChange, EventEmitter } from '@angular/core';
import { NotificationService } from '../../../_shared/notification.service';

// @Directive({
//   // tslint:disable-next-line:directive-selector
//   selector: '[popup]'
// })
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit, OnChanges {

  @HostBinding('attr.class') cssClass = 'hidden';
  @Output()
  donePopup = new EventEmitter<boolean>();
  @Input() data: any;
  message: string;
  title: string;
  isActive: boolean;
  stay: number;

  constructor() {
  }

  ngOnChanges(changes: SimpleChange) {
    if (this.data) {
      Object.assign(this, this.data);
      this.cssClass = this.isActive ? 'active' : 'hidden';
    }
    console.log(this);
  }

  ngOnInit() {
    setTimeout(() => {
      this.donePopup.emit(false);
    }, this.stay);
  }

  @HostListener('click') displayMessage(): void {
    this.donePopup.emit(false);
  }

}
