import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtablePage } from './dtable.page';

const routes: Routes = [
  {
    path: '',
    component: DtablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DtablePageRoutingModule {}
