import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { UserCollections } from 'src/app/core/model/user_collection.model';
import { DataService } from 'src/app/core/data.service/data.service';

@Component({
  selector: 'app-admin-collections',
  templateUrl: './admin-collections.component.html',
  styleUrls: ['./admin-collections.component.scss'],
})
export class AdminCollectionsComponent implements OnInit {

  public userCollectioN : UserCollections[];
  
  constructor(private dataService : DataService) {
    this.userCollectioN = this.dataService.userCollection;
   }
   public_collection_size  = this.dataService.public_collection.length;

   collection_name = this.dataService.userCollection;
   
   ngOnInit() {
  
    console.log("arraysize="+this.public_collection_size);
  }

  @ViewChild(IonSlides) slider: IonSlides;
  slideOpts1 = {
    initialSlide: this.public_collection_size,
    autoplay: true,
    nav: true,
    slidesPerView: this.public_collection_size,
    spaceBetween: 0,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      2100: {
       
      }
    }
  };
}
