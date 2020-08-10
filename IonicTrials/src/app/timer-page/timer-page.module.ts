import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerPagePageRoutingModule } from './timer-page-routing.module';

import { TimerPagePage } from './timer-page.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    FontAwesomeModule,
    TimerPagePageRoutingModule
  ],
  declarations: [TimerPagePage]
})
export class TimerPagePageModule {}
