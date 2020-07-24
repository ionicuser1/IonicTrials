import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module7Page } from './module7.page';

const routes: Routes = [
  {
    path: '',
    component: Module7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module7PageRoutingModule {}
