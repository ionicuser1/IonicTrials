import { Component, OnInit, ViewChild } from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarComponent } from 'ng-fullcalendar';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(public eventAlert: AlertController) { }

  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: CalendarComponent;
  ngOnInit() {
    this.options = {
      editable: true,
      eventLimit: true,

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

  updateEvents(model: any){
    this.eventsModel = [{
      title: 'Updated Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
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
          name: 'Event',
          placeholder: 'Event Name',
        },
        {
          type: 'text',
          name: 'Location',
          placeholder: 'Location',
        },
        {
          type: 'date',
          name: 'StartDate',
          placeholder: 'Start Date',
        },{
          type: 'date',
          name: 'EndDate',
          placeholder: 'End Date',
        },
      ],
      buttons: [
        {
          text: 'Save',
          cssClass:'btn btn-outline-primary btn-fw',
          handler: (data) => {
            console.log('Confirm Save');
            
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
