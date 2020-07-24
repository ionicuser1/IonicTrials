import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page3PageRoutingModule } from './page3-routing.module';

import { Page3Page } from './page3.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page3PageRoutingModule,
    SharedModule
  ],
  declarations: [Page3Page]
})
export class Page3PageModule {}
