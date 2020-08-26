import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsAnswersPage } from './questions-answers.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionsAnswersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsAnswersPageRoutingModule {}
