import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulePage7PageRoutingModule } from './module-page7-routing.module';

import { ModulePage7Page } from './module-page7.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedModule,
    IonicModule,
    ModulePage7PageRoutingModule
  ],
  declarations: [ModulePage7Page]
})
export class ModulePage7PageModule {}
