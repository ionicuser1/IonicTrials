import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulePage2Page } from './module-page2.page';

const routes: Routes = [
  {
    path: '',
    component: ModulePage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulePage2PageRoutingModule {}
