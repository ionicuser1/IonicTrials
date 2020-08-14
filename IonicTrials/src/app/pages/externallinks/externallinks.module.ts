import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternallinksPageRoutingModule } from './externallinks-routing.module';

import { ExternallinksPage } from './externallinks.page';
import { TranslateModule } from '@ngx-translate/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExternallinksPageRoutingModule,
    TranslateModule,
    SweetAlert2Module,
    NgxDatatableModule,
    SharedModule  
  ],
  declarations: [ExternallinksPage]
})
export class ExternallinksPageModule {}
