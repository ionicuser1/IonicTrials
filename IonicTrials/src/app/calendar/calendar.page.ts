import { Component, OnInit, ViewChild } from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarComponent } from 'ng-fullcalendar';
import { AlertController, NavController } from '@ionic/angular';
import { CalendarService } from '../data.service/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(public eventAlert: AlertController, private calServ: CalendarService, private navCtrl: NavController) { }

  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: CalendarComponent;
  ngOnInit() {
    this.options = {
      editable: true,
      eventLimit: true,
      events: [{
        title: 'Long Event',
        start: this.yearMonth + '-07',
        end: this.yearMonth + '-10'
      }],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth, timeGridWeek, timeGridDay'
      },
      
      plugins: [dayGridPlugin,interactionPlugin,timeGridPlugin],
      selectable: true,
      themeSystem: 'bootstrap',
      
    }
  }

  eventClick(model: any){
    console.log(model);
  }

  eventDragStop(model: any){
    console.log(model);
  }

  // dateClick(model: any){
  //   console.log(model);
  // }

  updateEvents(){
    this.eventsModel = [{
      title: this.calServ.calendarService.eventName,
      start: this.calServ.calendarService.startDate,
      end: this.calServ.calendarService.endDate
    }];
  }
    get yearMonth(): string {
      const dateObj = new Date();
      return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }

  async dateClick(){
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
            // location.reload();
            this.navCtrl.navigateForward("calendar");
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
