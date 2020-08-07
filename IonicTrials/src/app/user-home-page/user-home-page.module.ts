import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserHomePagePageRoutingModule } from './user-home-page-routing.module';

import { UserHomePagePage } from './user-home-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserHomePagePageRoutingModule
  ],
  declarations: [UserHomePagePage]
})
export class UserHomePagePageModule {}
