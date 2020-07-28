import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUserHomePageRoutingModule } from './admin-user-home-routing.module';



import { AdminUserHomePage } from './admin-user-home.page';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedModule,
    IonicModule,
    AdminUserHomePageRoutingModule
  ],
  declarations: [AdminUserHomePage]
})
export class AdminUserHomePageModule {}
