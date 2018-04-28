import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html'
})
export class UploadImageComponent implements OnInit {

  @Output()
  uploaddone = new EventEmitter<boolean>();

  constructor() {
    console.log('dscsmdlkcsdmlksclkmcskldaml');

  }

  ngOnInit() {
    $('.ui.modal')
      .modal('show')
      ;
  }

  uploadDoneClicked() {
    console.log('clicked');
    this.uploaddone.emit(false);
  }

}
