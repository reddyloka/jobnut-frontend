import { Injectable } from '@angular/core';

@Injectable()
export class FroalaEditorService {

  constructor() { }

  public options: Object = { 
    placeholderText: 'Edit Me',
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic','underline','fontSize','fontFamily'],
    height:100,
    width:350,
    toolbarSticky: false
  }

    public imageOptions: Object = { 
    placeholderText: 'Edit Me',
    charCounterCount: false,
    toolbarButtons: ['insertImage'],
    height:150,
    width:350,
    imageDefaultWidth:180,
    toolbarSticky: false,
    imageInsertButtons: ['imageBack', '|', 'imageUpload']
  }

}
