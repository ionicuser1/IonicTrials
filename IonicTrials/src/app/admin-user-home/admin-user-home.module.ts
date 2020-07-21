import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUserHomePageRoutingModule } from './admin-user-home-routing.module';

import { AdminUserHomePage } from './admin-user-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUserHomePageRoutingModule
  ],
  declarations: [AdminUserHomePage]
})
export class AdminUserHomePageModule {}
