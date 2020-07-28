import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulePage5PageRoutingModule } from './module-page5-routing.module';

import { ModulePage5Page } from './module-page5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulePage5PageRoutingModule
  ],
  declarations: [ModulePage5Page]
})
export class ModulePage5PageModule {}