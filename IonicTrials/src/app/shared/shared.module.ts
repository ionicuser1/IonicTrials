import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputToCountdownDirective } from '../directives/input-to-countdown.directive';
import { TimeInputComponent } from '../components/time-input/time-input.component';
import { SynthesisService } from '../servicess/synthesis.service';
import { TimeFormatPipe } from '../pipes/time-format.pipe';
import { CountdownComponent } from '../components/countdown/countdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { AltDesignComponent } from './alt-design/alt-design.component';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [CountdownComponent,InputToCountdownDirective,TimeInputComponent,TimeFormatPipe,AltDesignComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule
  ],
  exports: [
    CountdownComponent,InputToCountdownDirective,TimeInputComponent,TimeFormatPipe,AltDesignComponent
  ]
})
export class SharedModule { }
