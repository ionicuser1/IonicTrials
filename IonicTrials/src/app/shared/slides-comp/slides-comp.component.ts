import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/core/data.service/data.service';
import { UserCollections, FreeCollections, PublicCollections, PrivateCollections } from 'src/app/core/model/user_collection.model';
import { NavController, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides-comp',
  templateUrl: './slides-comp.component.html',
  styleUrls: ['./slides-comp.component.scss'],
})
export class SlidesCompComponent implements OnInit {

  
  public freeCollectioN : FreeCollections[];
  public publicCollectioN : PublicCollections[];
  public privateCollectioN : PrivateCollections[];


  public userCollection1 : FreeCollections;
  selectedTab = 0;

  constructor(private dataService : DataService, private navCtrl : NavController,private router: Router ) {
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

  desc1(temp:PublicCollections){
    this.dataService.newPublicColl = temp;
    this.navCtrl.navigateForward('module-page7');
    }

  desc2(temp:PrivateCollections){
      this.dataService.newPrivateColl = temp;
      this.navCtrl.navigateForward('module-page7');
      }

  @ViewChild(IonSlides) slider: IonSlides;
  slideOpts2 = {
    initialSlide: this.free_collection_size,
    autoplay: false,
    nav: true,
    loop:false,
    slidesPerView: 4,
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
    autoplay: false,
    nav: true,
    loop:false,
    slidesPerView: 4,
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
    autoplay: false,
    nav: true,
    loop:false,
    slidesPerView: 4,
    spaceBetween: 0,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      2100: {
       
      }
    }
  };



}
