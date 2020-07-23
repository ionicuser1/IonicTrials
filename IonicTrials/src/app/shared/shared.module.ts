import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCollectionsComponent } from './user-collections/user-collections.component';



@NgModule({
  declarations: [UserCollectionsComponent],
  imports: [
    CommonModule
  ],
  exports :[UserCollectionsComponent]
})
export class SharedModule { }
