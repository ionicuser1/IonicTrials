import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCollections } from 'src/app/core/model/user_collection.model';
import { DataService } from 'src/app/core/data.service/data.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-other-collections',
  templateUrl: './other-collections.component.html',
  styleUrls: ['./other-collections.component.scss'],
})
export class OtherCollectionsComponent implements OnInit {

  public userCollectioN : UserCollections[];
  
  constructor(private dataService : DataService) {
    this.userCollectioN = this.dataService.userCollection;
   }
   public_collection_size  = this.dataService.public_collection.length;
   free_collection_size  = this.dataService.freeCollection.length;
   private_collection_size  = this.dataService.privateCollection.length;

   
   ngOnInit() {
  
    console.log("arraysize="+this.public_collection_size);
    console.log("arraysize="+this.free_collection_size);
    console.log("arraysize="+this.private_collection_size);
  }

  @ViewChild(IonSlides) slider: IonSlides;

  slideOpts2 = {
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
  slideOpts3 = {
    initialSlide: this.free_collection_size,
    autoplay: true,
    nav: true,
    slidesPerView: this.free_collection_size,
    spaceBetween: 0,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      2100: {
       
      }
    }
  };

  slideOpts4 = {
    initialSlide: this.private_collection_size,
    autoplay: true,
    nav: true,
    slidesPerView: this.private_collection_size,
    spaceBetween: 0,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      2100: {
       
      }
    }
  };
}
