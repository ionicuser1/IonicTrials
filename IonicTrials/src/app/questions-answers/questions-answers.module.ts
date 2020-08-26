import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsAnswersPageRoutingModule } from './questions-answers-routing.module';

import { QuestionsAnswersPage } from './questions-answers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsAnswersPageRoutingModule
  ],
  declarations: [QuestionsAnswersPage]
})
export class QuestionsAnswersPageModule {}
