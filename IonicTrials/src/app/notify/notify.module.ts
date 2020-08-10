import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifyPageRoutingModule } from './notify-routing.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotifyPage } from './notify.page';
import { NotificationDesignComponent } from '../notification-design/notification-design.component';
import { SharedModule } from '../shared/shared.module';



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
  declarations: [NotifyPage, NotificationDesignComponent]
})
export class NotifyPageModule {}
