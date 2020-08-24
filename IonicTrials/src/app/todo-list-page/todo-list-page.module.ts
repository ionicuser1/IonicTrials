import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoListPagePageRoutingModule } from './todo-list-page-routing.module';

import { TodoListPagePage } from './todo-list-page.page';
import { TranslateModule } from '@ngx-translate/core';
import { IonicContextMenuModule } from 'ionic-context-menu';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoListPagePageRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    IonicContextMenuModule,
    NgbModule, 
    MatDatepickerModule,
  ],
  declarations: [TodoListPagePage]
})
export class TodoListPagePageModule {}
