import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DataTablesModule } from 'angular-datatables';
import { DtablePageRoutingModule } from './dtable-routing.module';

import { DtablePage } from './dtable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataTablesModule,
    DtablePageRoutingModule
  ],
  declarations: [DtablePage]
})
export class DtablePageModule {}
