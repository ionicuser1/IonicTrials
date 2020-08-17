import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification1Component } from '../notification1/notification1.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [Notification1Component],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [Notification1Component

  ]
})
export class SharedModule { }
