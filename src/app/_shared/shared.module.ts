import { NgModule } from '@angular/core';
import { NumberToWordsPipe } from './pipes/numberToWords.pipe';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';
import { HomePageComponent } from './components/home-page/home-page.component';
@NgModule({
    imports: [
        CommonModule,
        SelectModule,
        ReactiveFormsModule,
    ],
    declarations: [
        NumberToWordsPipe,
        ChangePasswordComponent,
        HomePageComponent
    ],
    exports: [
        NumberToWordsPipe,
        HomePageComponent,
        ChangePasswordComponent
    ]
})
export class SharedModule { }
