import { Component, ViewChild } from '@angular/core';
import { FreeCollections, PrivateCollections, PublicCollections } from '../core/model/user_collection.model';
import { DataService } from '../core/data.service/data.service';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public freeCollectioN : FreeCollections[];
  public publicCollectioN : PublicCollections[];
  public privateCollectioN : PrivateCollections[];


  public userCollection1 : FreeCollections;

  constructor(private dataService : DataService, private navCtrl : NavController ) {
    this.freeCollectioN = this.dataService.freeCollection;
    this.publicCollectioN = this.dataService.public_collection;
    this.privateCollectioN = this.dataService.privateCollection;
    
 }
   names = this.dataService.getStringUserLocalization();
   free_collection_size  = this.dataService.freeCollection.length;
   public_collection_size  = this.dataService.public_collection.length;
   private_collection_size  = this.dataService.privateCollection.length;
   // this.dataService.getStringUserLocalization();
  freecollection = this.dataService.freeCollectionName;
  publiccollection = this.dataService.publicCollectionName;
  privatecollection = this.dataService.privateCollectionName;


   ngOnInit() {
    
  }
  slidePrev() {
    this.slider.slidePrev();
  }
  slideNext() {
    this.slider.slideNext();
  }

  desc(temp:FreeCollections){
  this.dataService.newFreeColl = temp;
  this.navCtrl.navigateForward('module-page7');
  }

  desc1(temp1:PublicCollections){
    this.dataService.newPublicColl = temp1;
    this.navCtrl.navigateForward('module-page7');
    }

  desc2(temp2:PrivateCollections){
      this.dataService.newPrivateColl = temp2;
      this.navCtrl.navigateForward('module-page7');
      }

  @ViewChild(IonSlides) slider: IonSlides;
  slideOpts2 = {
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

  slideOpts3 = {
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
