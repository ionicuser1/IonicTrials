import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulePage5Page } from './module-page5.page';

const routes: Routes = [
  {
    path: '',
    component: ModulePage5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulePage5PageRoutingModule {}
