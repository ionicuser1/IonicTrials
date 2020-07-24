import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCollections } from 'src/app/core/model/user_collection.model';
import { DataService } from 'src/app/core/data.service/data.service';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-collections',
  templateUrl: './user-collections.component.html',
  styleUrls: ['./user-collections.component.scss'],
})
export class UserCollectionsComponent implements OnInit {


  
  public userCollectioN : UserCollections[];
  public userCollection1 : UserCollections;
  //collection :string;
  constructor(private dataService : DataService, private navCtrl : NavController) {
    this.userCollectioN = this.dataService.userCollection;

   
   }
   
   user_collection_size  = this.dataService.userCollection.length;

   collection = this.dataService.userCollectionName
   ngOnInit() {
   console.log("arraysize="+this.user_collection_size);
   console.log("collection name="+this.collection);
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

  module1(){
    this.navCtrl.navigateForward('module1');
  }
  module2(){
    this.navCtrl.navigateForward('module2');
  }
  module3(){
    this.navCtrl.navigateForward('module3');
  }
   module4(){
    this.navCtrl.navigateForward('module4');
  }
   module5(){
    this.navCtrl.navigateForward('module5');
  }
  module6(){
    this.navCtrl.navigateForward('module6');
  }
 
}
