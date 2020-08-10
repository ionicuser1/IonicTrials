import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification1Component } from '../notification1/notification1.component';



@NgModule({
  declarations: [Notification1Component],
  imports: [
    CommonModule
  ],
  exports: [Notification1Component

  ]
})
export class SharedModule { }
