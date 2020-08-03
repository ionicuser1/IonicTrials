import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulePage2PageRoutingModule } from './module-page2-routing.module';

import { ModulePage2Page } from './module-page2.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ModulePage2PageRoutingModule
  ],
  declarations: [ModulePage2Page]
})
export class ModulePage2PageModule {}
