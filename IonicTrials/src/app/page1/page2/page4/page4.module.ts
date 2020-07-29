import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page4PageRoutingModule } from './page4-routing.module';

import { Page4Page } from './page4.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page4PageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [Page4Page]
})
export class Page4PageModule {}
