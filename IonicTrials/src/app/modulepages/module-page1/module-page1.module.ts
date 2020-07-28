import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulePage1PageRoutingModule } from './module-page1-routing.module';

import { ModulePage1Page } from './module-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulePage1PageRoutingModule
  ],
  declarations: [ModulePage1Page]
})
export class ModulePage1PageModule {}
