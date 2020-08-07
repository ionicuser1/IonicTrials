import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSwlAlertDialogComponent } from '../custom-swl-alert-dialog/custom-swl-alert-dialog.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [CustomSwlAlertDialogComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports:[
    CustomSwlAlertDialogComponent
  ]
})
export class SharedModule { }
