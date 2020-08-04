import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerCountDownPage } from './timer-count-down.page';

const routes: Routes = [
  {
    path: '',
    component: TimerCountDownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerCountDownPageRoutingModule {}
