import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Injectable()
export class DownloadService {

  constructor() { }

  downloadPDF(){
    
      html2canvas(document.querySelector('#download')
      // ,{allowTaint:true,useCORS:true,proxy:'http://localhost:4200/2'}
    ).then(function(canvas) {
        var img = new Image();
        // img.crossOrigin = 'anonymous';
        img = canvas.toDataURL('image/png');
        var doc = new jsPDF("l", "px", "a4");
        var width = doc.internal.pageSize.width;    
        var height = doc.internal.pageSize.height;
        doc.addImage(img,'JPEG',0,0,width, height);
        doc.save('test.pdf');
    });
  }

}
