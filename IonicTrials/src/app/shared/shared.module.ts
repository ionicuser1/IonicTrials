import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../calendar/calendar.component';
import { AppointmentDetailComponent } from '../appointment-detail/appointment-detail.component';



@NgModule({
  declarations: [CalendarComponent,AppointmentDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarComponent,AppointmentDetailComponent
  ]
})
export class SharedModule { }
