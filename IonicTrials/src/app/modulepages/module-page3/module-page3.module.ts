import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulePage3PageRoutingModule } from './module-page3-routing.module';

import { ModulePage3Page } from './module-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulePage3PageRoutingModule
  ],
  declarations: [ModulePage3Page]
})
export class ModulePage3PageModule {}
