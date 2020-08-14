import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullDataTableComponent } from '../full-data-table/full-data-table.component';

import { DataTablesModule } from 'angular-datatables';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [FullDataTableComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    TranslateModule 
  ],
  exports:[
    FullDataTableComponent
  ]
})
export class SharedModule { }
