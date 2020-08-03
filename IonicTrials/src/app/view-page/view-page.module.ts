import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPagePageRoutingModule } from './view-page-routing.module';

import { ViewPagePage } from './view-page.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    ViewPagePageRoutingModule
  ],
  declarations: [ViewPagePage]
})
export class ViewPagePageModule {}
