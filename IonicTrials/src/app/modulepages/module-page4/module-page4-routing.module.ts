import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulePage4Page } from './module-page4.page';

const routes: Routes = [
  {
    path: '',
    component: ModulePage4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulePage4PageRoutingModule {}
