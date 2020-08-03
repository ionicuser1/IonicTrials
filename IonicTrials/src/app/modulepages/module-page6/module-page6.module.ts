import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulePage6PageRoutingModule } from './module-page6-routing.module';

import { ModulePage6Page } from './module-page6.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    ModulePage6PageRoutingModule
  ],
  declarations: [ModulePage6Page]
})
export class ModulePage6PageModule {}
