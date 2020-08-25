import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPagePageRoutingModule } from './calendar-page-routing.module';

import { CalendarPagePage } from './calendar-page.page';
import { SharedModule } from '../shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPagePageRoutingModule,
    SharedModule,
    FullCalendarModule
  ],
  declarations: [CalendarPagePage]
})
export class CalendarPagePageModule {}
