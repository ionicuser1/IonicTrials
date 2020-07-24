import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCollections } from 'src/app/core/model/user_collection.model';
import { DataService } from 'src/app/core/data.service/data.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-user-collections',
  templateUrl: './user-collections.component.html',
  styleUrls: ['./user-collections.component.scss'],
})
export class UserCollectionsComponent implements OnInit {

  public userCollectioN : UserCollections[];
  
  constructor(private dataService : DataService) {
    this.userCollectioN = this.dataService.userCollection;
   }
  /// user_collection_size  = this.dataService.userCollection.length;
   user_collection_size  = this.dataService.userCollection.length;

   collection_name = 'User Collection';
   
   ngOnInit() {
  
    console.log("arraysize="+this.user_collection_size);
  }

  @ViewChild(IonSlides) slider: IonSlides;
  slideOpts2 = {
    initialSlide: this.user_collection_size,
    autoplay: true,
    nav: true,
    slidesPerView: this.user_collection_size,
    spaceBetween: 0,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      2100: {
       
      }
    }
  };
}
