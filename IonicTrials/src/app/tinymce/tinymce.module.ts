import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EditorModule } from '@tinymce/tinymce-angular';

import { TinymcePageRoutingModule } from './tinymce-routing.module';

import { TinymcePage } from './tinymce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinymcePageRoutingModule,
    EditorModule
  ],
  declarations: [TinymcePage]
})
export class TinymcePageModule {}
