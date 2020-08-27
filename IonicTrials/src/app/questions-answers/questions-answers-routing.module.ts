import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     component: QuestionsAnswersPage
//   }
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'answer-options/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'answer-options/:id',
    loadChildren: () => import('../answer-options/answer-options.module').then( m => m.AnswerOptionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class QuestionsAnswersPageRoutingModule {}
