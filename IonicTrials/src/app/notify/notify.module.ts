import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifyPageRoutingModule } from './notify-routing.module';
import { SimpleNotificationsModule, NotificationComponent } from 'angular2-notifications';
import { NotifyPage } from './notify.page';
import { SharedModule } from '../shared/shared.module';
import { CustomNotificationComponent } from '../shared/custom-notification/custom-notification.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    IonicModule,
    SimpleNotificationsModule.forRoot(),
    NotifyPageRoutingModule
  ],
  declarations: [NotifyPage,CustomNotificationComponent]
})
export class NotifyPageModule {}
