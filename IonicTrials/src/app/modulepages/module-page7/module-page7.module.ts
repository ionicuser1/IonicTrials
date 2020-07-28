import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulePage7PageRoutingModule } from './module-page7-routing.module';

import { ModulePage7Page } from './module-page7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulePage7PageRoutingModule
  ],
  declarations: [ModulePage7Page]
})
export class ModulePage7PageModule {}
