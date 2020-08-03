import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../calendar/calendar.component';
import { AppointmentDetailComponent } from '../appointment-detail/appointment-detail.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,CalendarComponent,AppointmentDetailComponent
  ],
  exports: [
    CalendarComponent,AppointmentDetailComponent
  ]
})
export class SharedModule { }
