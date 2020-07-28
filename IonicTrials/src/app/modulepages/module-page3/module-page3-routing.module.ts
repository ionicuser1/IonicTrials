import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulePage3Page } from './module-page3.page';

const routes: Routes = [
  {
    path: '',
    component: ModulePage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulePage3PageRoutingModule {}
