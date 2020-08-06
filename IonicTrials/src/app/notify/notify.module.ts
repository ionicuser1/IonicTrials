import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifyPageRoutingModule } from './notify-routing.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotifyPage } from './notify.page';
import { NotificationDesignComponent } from '../notification-design/notification-design.component';
import { Notification2Component } from '../notification2/notification2.component';
import { NotificationModule } from '@progress/kendo-angular-notification';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotificationModule,
    ReactiveFormsModule,
    IonicModule,
    SimpleNotificationsModule.forRoot(),
    NotifyPageRoutingModule
  ],
  declarations: [NotifyPage, NotificationDesignComponent, Notification2Component]
})
export class NotifyPageModule {}
