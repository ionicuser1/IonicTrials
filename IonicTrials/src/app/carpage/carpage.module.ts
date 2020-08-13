import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarpagePageRoutingModule } from './carpage-routing.module';

import { CarpagePage } from './carpage.page';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SlickCarouselModule,
    IonicModule,
    CarpagePageRoutingModule
  ],
  declarations: [CarpagePage]
})
export class CarpagePageModule {}
