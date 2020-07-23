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
   arraySize  = this.dataService.public_collection.length;
   
   ngOnInit() {
  
    console.log("arraysize="+this.arraySize);
  }

  @ViewChild(IonSlides) slider: IonSlides;
  slideOpts2 = {
    initialSlide: this.arraySize,
    autoplay: true,
    nav: true,
    slidesPerView: this.arraySize,
    spaceBetween: 0,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      2100: {
       
      }
    }
  };
}
