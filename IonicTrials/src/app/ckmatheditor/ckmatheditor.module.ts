import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CkmatheditorPageRoutingModule } from './ckmatheditor-routing.module';

import { CkmatheditorPage } from './ckmatheditor.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CkmatheditorPageRoutingModule,
    CKEditorModule
  ],
  declarations: [CkmatheditorPage]
})
export class CkmatheditorPageModule {}
