import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NestedTablePage } from './nested-table.page';

const routes: Routes = [
  {
    path: '',
    component: NestedTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NestedTablePageRoutingModule {}
