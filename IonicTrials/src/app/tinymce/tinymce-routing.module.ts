import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinymcePage } from './tinymce.page';

const routes: Routes = [
  {
    path: '',
    component: TinymcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinymcePageRoutingModule {}
