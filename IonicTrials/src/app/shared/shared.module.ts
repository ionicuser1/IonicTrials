import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    MessageComponent
  ],
})
export class SharedModule { }
