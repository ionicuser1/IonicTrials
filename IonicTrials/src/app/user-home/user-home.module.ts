import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgImageSliderModule } from 'ng-image-slider';

import { IonicModule } from '@ionic/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';



import { UserHomePageRoutingModule } from './user-home-routing.module';


import { UserHomePage } from './user-home.page';
import { SharedModule } from '../shared/shared.module';
import { UserCollectionsComponent } from '../shared/user-collections/user-collections.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgImageSliderModule,
    CarouselModule,
    IonicModule,
    UserHomePageRoutingModule
  ],
  declarations: [UserHomePage],
 
})
export class UserHomePageModule {}
