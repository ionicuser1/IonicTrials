import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulepage8Page } from './modulepage8.page';

const routes: Routes = [
  {
    path: '',
    component: Modulepage8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulepage8PageRoutingModule {}
