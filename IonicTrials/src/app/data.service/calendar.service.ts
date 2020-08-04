import { Injectable } from '@angular/core';
import { CalendarModel } from '../core/model/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  calendarService: CalendarModel;
  constructor() { }
}
