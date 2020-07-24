import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module6PageRoutingModule } from './module6-routing.module';

import { Module6Page } from './module6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module6PageRoutingModule
  ],
  declarations: [Module6Page]
})
export class Module6PageModule {}
