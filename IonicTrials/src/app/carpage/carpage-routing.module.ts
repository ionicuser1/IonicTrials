import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarpagePage } from './carpage.page';

const routes: Routes = [
  {
    path: '',
    component: CarpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarpagePageRoutingModule {}
