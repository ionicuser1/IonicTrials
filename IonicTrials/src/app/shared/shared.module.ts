import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputToCountdownDirective } from '../directives/input-to-countdown.directive';
import { TimeInputComponent } from '../components/time-input/time-input.component';
import { SynthesisService } from '../servicess/synthesis.service';
import { TimeFormatPipe } from '../pipes/time-format.pipe';
import { CountdownComponent } from '../components/countdown/countdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [CountdownComponent,InputToCountdownDirective,TimeInputComponent,TimeFormatPipe],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CountdownComponent,InputToCountdownDirective,TimeInputComponent,TimeFormatPipe
  ]
})
export class SharedModule { }
