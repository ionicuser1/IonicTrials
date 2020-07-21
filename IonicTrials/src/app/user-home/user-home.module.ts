import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgImageSliderModule } from 'ng-image-slider';

import { IonicModule } from '@ionic/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { UserHomePageRoutingModule } from './user-home-routing.module';


import { UserHomePage } from './user-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgImageSliderModule,
    CarouselModule,
    IonicModule,
    UserHomePageRoutingModule
  ],
  declarations: [UserHomePage]
})
export class UserHomePageModule {}
