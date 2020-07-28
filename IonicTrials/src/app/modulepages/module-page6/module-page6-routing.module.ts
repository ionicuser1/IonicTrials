import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulePage6Page } from './module-page6.page';

const routes: Routes = [
  {
    path: '',
    component: ModulePage6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulePage6PageRoutingModule {}
