import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';

import { LandingPagePage } from './landing-page.page';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule,
    SweetAlert2Module,
    TranslateModule,
    SharedModule
  ],
  declarations: [LandingPagePage]
})
export class LandingPagePageModule {}
