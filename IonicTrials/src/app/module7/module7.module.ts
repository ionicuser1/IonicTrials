import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module7PageRoutingModule } from './module7-routing.module';

import { Module7Page } from './module7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module7PageRoutingModule
  ],
  declarations: [Module7Page]
})
export class Module7PageModule {}
