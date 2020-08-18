import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCollectionsComponent } from './user-collections/user-collections.component';
import { IonicModule } from '@ionic/angular';
import { AdminCollectionsComponent } from './admin-collections/admin-collections.component';
import { OtherCollectionsComponent } from './other-collections/other-collections.component';
import { SlidesCompComponent } from './slides-comp/slides-comp.component';
import { OtherAdminCompComponent } from './other-admin-comp/other-admin-comp.component';
import { ReusableCompComponent } from './reusable-comp/reusable-comp.component';



@NgModule({
  declarations: [UserCollectionsComponent,AdminCollectionsComponent,OtherCollectionsComponent, SlidesCompComponent,OtherAdminCompComponent, ReusableCompComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports :[UserCollectionsComponent,AdminCollectionsComponent,OtherCollectionsComponent,SlidesCompComponent,OtherAdminCompComponent,ReusableCompComponent]
})
export class SharedModule { }
