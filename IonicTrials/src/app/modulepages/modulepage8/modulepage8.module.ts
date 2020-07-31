import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modulepage8PageRoutingModule } from './modulepage8-routing.module';

import { Modulepage8Page } from './modulepage8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modulepage8PageRoutingModule
  ],
  declarations: [Modulepage8Page]
})
export class Modulepage8PageModule {}
