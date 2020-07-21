import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Page } from './page1.page';

const routes: Routes = [
  {
    path: '',
    component: Page1Page
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule),
    data: {
      breadcrumb: 'Page 2'
    }
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule),
    data: {
      breadcrumb: 'Page 3'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1PageRoutingModule {}
