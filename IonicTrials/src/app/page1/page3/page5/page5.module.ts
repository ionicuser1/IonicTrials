import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page5PageRoutingModule } from './page5-routing.module';

import { Page5Page } from './page5.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page5PageRoutingModule,
    SharedModule
  ],
  declarations: [Page5Page]
})
export class Page5PageModule {}
