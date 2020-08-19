import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCollectionsComponent } from './user-collections/user-collections.component';
import { IonicModule } from '@ionic/angular';
import { AdminCollectionsComponent } from './admin-collections/admin-collections.component';
import { FreeCollectionComponent } from './free-collection/free-collection.component';
import { PublicCollectionComponent } from './public-collection/public-collection.component';
import { PrivateCollectionComponent } from './private-collection/private-collection.component';



@NgModule({
  declarations: [UserCollectionsComponent,AdminCollectionsComponent,FreeCollectionComponent,PublicCollectionComponent, PrivateCollectionComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports :[UserCollectionsComponent,AdminCollectionsComponent,FreeCollectionComponent,PublicCollectionComponent,PrivateCollectionComponent]
})
export class SharedModule { }
