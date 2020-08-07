import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListPagePage } from './todo-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: TodoListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListPagePageRoutingModule {}
