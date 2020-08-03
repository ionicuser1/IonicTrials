import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulePage4PageRoutingModule } from './module-page4-routing.module';

import { ModulePage4Page } from './module-page4.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    ModulePage4PageRoutingModule
  ],
  declarations: [ModulePage4Page]
})
export class ModulePage4PageModule {}
