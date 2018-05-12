import { NgModule } from '@angular/core';
import { NumberToWordsPipe } from './pipes/numberToWords.pipe';
@NgModule({
    imports: [

    ],
    declarations: [
        NumberToWordsPipe
    ],
    exports: [
        NumberToWordsPipe
    ]
})
export class SharedModule { }
