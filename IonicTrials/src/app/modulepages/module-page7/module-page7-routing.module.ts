import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulePage7Page } from './module-page7.page';

const routes: Routes = [
  {
    path: '',
    component: ModulePage7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulePage7PageRoutingModule {}
