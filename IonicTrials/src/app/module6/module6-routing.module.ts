import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module6Page } from './module6.page';

const routes: Routes = [
  {
    path: '',
    component: Module6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module6PageRoutingModule {}
