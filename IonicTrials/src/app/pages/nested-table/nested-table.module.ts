import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NestedTablePageRoutingModule } from './nested-table-routing.module';

import { NestedTablePage } from './nested-table.page';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NestedTablePageRoutingModule,
    DataTablesModule
  ],
  declarations: [NestedTablePage]
})
export class NestedTablePageModule {}
