import { Component, OnInit, ViewChild } from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarComponent } from 'ng-fullcalendar';
import { AlertController, NavController } from '@ionic/angular';
import { CalendarService } from '../data.service/calendar.service';
import * as moment from 'moment';
import "fullcalendar";
import { async } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(public eventAlert: AlertController, private calServ: CalendarService, private navCtrl: NavController) { }

  // options: OptionsInput;
  // eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: CalendarComponent;
  ngOnInit() {
    // this.event();
    
  }
  eventsList = this.addEvent("this is event");

  addEvent(evntName){
    setTimeout(() => {
      $("#calendar").fullCalendar({  
                      header: {
                          left   : 'prev,next today',
                          center : 'title',
                          right  : 'month,agendaWeek,agendaDay'
                      },
                      navLinks   : true,
                      editable   : true,
                      eventLimit : true,
                      events: [
                          {
                              title : evntName,
                              start : '2020-08-05T12:30:00',
                              color : '#f9c66a', // override!
                              // allDay: true
                          },
                          {
                              title : 'Your meeting with john',
                              start : '2020-08-07T12:30:00',
                              end   : '2019-08-09',
                              color : "#019efb"
                          },
                          {
                              title  : 'This is Today',
                              start  : '2020-08-12T12:30:00',
                              allDay : false, // will make the time show,
                              color  : "#57cd5f"
                          }
                      ],  // request to load current events
                      // plugins: [dayGridPlugin,interactionPlugin,timeGridPlugin],
                      selectable: true,
                      // themeSystem: 'bootstrap',
                  });
   }, 100);
  }

  updateEvent(){
    setTimeout(() => {
      $("#calendar").fullCalendar({  
                      header: {
                          left   : 'prev,next today',
                          center : 'title',
                          right  : 'month,agendaWeek,agendaDay'
                      },
                      navLinks   : true,
                      editable   : true,
                      eventLimit : true,
                      events: [
                          {
                              title : 'title',
                              start : '2020-08-05T12:30:00',
                              color : '#f9c66a', // override!
                              // allDay: true
                          },
                          {
                              title : 'Your meeting with john',
                              start : '2020-08-07T12:30:00',
                              end   : '2019-08-09',
                              color : "#019efb"
                          },
                          {
                              title  : 'This is Today',
                              start  : '2020-08-12T12:30:00',
                              allDay : false, // will make the time show,
                              color  : "#57cd5f"
                          }
                      ],  // request to load current events
                      // plugins: [dayGridPlugin,interactionPlugin,timeGridPlugin],
                      selectable: true,
                      // themeSystem: 'bootstrap',
                  });
   }, 100);

  }
  

  // event(){
  // //   this.options = {
  // //     editable: true,
  // //     eventLimit: true,
  // //     events: [{
  // //       // groupId: 'blueEvents', // recurrent events in this group move together
  // //       // daysOfWeek: [ '4' ],
  // //       title: 'Long Event',
  // //       start: '03-08-2020',
  // //       end:  '03-08-2020'
  // //        // startTime: '10:45:00',
  // //       // endTime: '12:45:00'
  // //     },
  // //     ],
  // //     header: {
  // //       left: 'prev,next today',
  // //       center: 'title',
  // //       right: 'dayGridMonth, timeGridWeek, timeGridDay'
  // //     },
      
  // //     plugins: [dayGridPlugin,interactionPlugin,timeGridPlugin],
  // //     selectable: true,
  // //     themeSystem: 'bootstrap',
      
  // //   }
  // // }

  // // eventClick(model: any){
  // //   console.log(model);
  // // }

  // // eventDragStop(model: any){
  // //   console.log(model);
  // // }

  // // // dateClick(model: any){
  // // //   console.log(model);
  // // // }

  // // updateEvents(){
  // //   this.eventsModel = [{
  // //     title: this.calServ.calendarService.eventName,
  // //     start: this.calServ.calendarService.startDate,
  // //     end: this.calServ.calendarService.endDate
  // //   }];
  // // }
  // //   get yearMonth(): string {
  // //     const dateObj = new Date();
  // //     return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  // // }

  async onDateClick() {
    const alert = await this.eventAlert.create({
      cssClass: 'my-custom-alert',
      inputs: [
        {
          type: 'text',
          name: 'eventName',
          placeholder: 'Event Name',
        },
        {
          type: 'text',
          name: 'location',
          placeholder: 'Location',
        },
        {
          type: 'date',
          name: 'startDate',
          placeholder: 'Start Date',
        },{
          type: 'date',
          name: 'endDate',
          placeholder: 'End Date',
        },
      ],
      buttons: [
        {
          text: 'Save',
          cssClass:'btn btn-outline-primary btn-fw',
          handler: (data) => {
            console.log('Confirm Save');
            this.calServ.calendarService = data;
            console.log(this.calServ.calendarService.eventName);
            console.log(this.calServ.calendarService.location);
            console.log(this.calServ.calendarService.startDate);
            console.log(this.calServ.calendarService.endDate);
            // this.updateEvent(this.calServ.calendarService.eventName);
            // location.reload();
            // this.navCtrl.navigateForward("calendar");
            this.addEvent(this.calServ.calendarService.eventName);
          }
        }, 
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'btn btn-outline-danger btn-fw',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });
 
    await alert.present();
  }
}

  // dateClick(){
  //   var dateStr = prompt('Enter a date in YYYY-MM-DD format');
  //   var date = moment(dateStr);
  //   if (date.isValid()) {
  //     $('#calendar').fullCalendar('renderEvent', {
  //       title: 'dynamic event',
  //       start: date,
  //       allDay: true
  //     });
  //     alert('Great. Now, update your database...');
  //   }else {
  //     alert('Invalid date.');
  //   }
  // }


