import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CkmatheditorPage } from './ckmatheditor.page';

const routes: Routes = [
  {
    path: '',
    component: CkmatheditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CkmatheditorPageRoutingModule {}
