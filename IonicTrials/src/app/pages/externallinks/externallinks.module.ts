import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternallinksPageRoutingModule } from './externallinks-routing.module';

import { ExternallinksPage } from './externallinks.page';
import { TranslateModule } from '@ngx-translate/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExternallinksPageRoutingModule,
    TranslateModule,
    SweetAlert2Module
  ],
  declarations: [ExternallinksPage]
})
export class ExternallinksPageModule {}
