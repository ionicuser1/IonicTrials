import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerCountDownPageRoutingModule } from './timer-count-down-routing.module';
import { CountdownModule } from 'ngx-countdown';
import { TimerCountDownPage } from './timer-count-down.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CountdownModule,
    IonicModule,
    TimerCountDownPageRoutingModule
  ],
  declarations: [TimerCountDownPage]
})
export class TimerCountDownPageModule {}