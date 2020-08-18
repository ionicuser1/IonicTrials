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


  slidePre = 4;
  disablePrevBtn = true;
  disableNextBtn = false;
  public userCollectioN : UserCollections[];
  public userCollection1 : UserCollections;

  constructor(private dataService : DataService, private navCtrl : NavController ) {
    this.userCollectioN = this.dataService.userCollection;
    

   
   }
   names = this.dataService.getStringUserLocalization();
   user_collection_size  = this.dataService.userCollection.length;
   // this.dataService.getStringUserLocalization();
  collection = this.dataService.userCollectionName;


   ngOnInit() {
    
   console.log("UserCollectionSize="+this.user_collection_size);
   console.log("collection name="+this.collection);
  }
  slidePrev() {
    this.ionSlides.slidePrev();
  }
  slideNext() {
    this.ionSlides.slideNext();
  }


  //@ViewChild(IonSlides) slider: IonSlides;
  @ViewChild('slides') ionSlides: IonSlides;
  slideOpts2 = {
   // initialSlide: this.user_collection_size,
    autoplay: false,
    lazyLoad: true,
    slidesPerView: this.slidePre,
    spaceBetween: 0,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      2100: {
       
      }
    }
  };

  doCheck() {
    let prom1 = this.ionSlides.isBeginning();
    let prom2 = this.ionSlides.isEnd();
  
    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
    });
  }

  module1(){
    this.navCtrl.navigateForward('module-page1');
  }
  module2(){
    this.navCtrl.navigateForward('module-page2');
  }
  module3(){
    this.navCtrl.navigateForward('module-page3');
  }
   module4(){
    this.navCtrl.navigateForward('module-page4');
  }
   module5(){
    this.navCtrl.navigateForward('module-page5');
  }
  module6(){
    this.navCtrl.navigateForward('module-page6');
  }
 
}
