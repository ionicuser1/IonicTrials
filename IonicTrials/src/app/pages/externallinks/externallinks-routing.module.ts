import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternallinksPage } from './externallinks.page';

const routes: Routes = [
  {
    path: '',
    component: ExternallinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternallinksPageRoutingModule {}
