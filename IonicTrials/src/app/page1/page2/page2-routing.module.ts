import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2Page } from './page2.page';

const routes: Routes = [
  {
    path: '',
    component: Page2Page
  },
  {
    path: 'page4',
    loadChildren: () => import('./page4/page4.module').then( m => m.Page4PageModule),
    data: {
      breadcrumb: 'Page 4'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2PageRoutingModule {}
