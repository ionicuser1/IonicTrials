import { Component, OnInit, ViewChild } from '@angular/core';
import { Collections } from 'src/app/core/model/user_collection.model';
import { DataService } from 'src/app/core/data.service/data.service';
import { NavController, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-collection',
  templateUrl: './private-collection.component.html',
  styleUrls: ['./private-collection.component.scss'],
})
export class PrivateCollectionComponent implements OnInit {

  disablePrevBtn = true;
  disableNextBtn = false;
    slidePre = 4;
    public freeCollectioN : Collections[];
    public publicCollectioN : Collections[];
    public privateCollectioN : Collections[];
  
  
    public userCollection1 : Collections;
  
    constructor(private dataService : DataService, private navCtrl : NavController,private router: Router ) {
      this.freeCollectioN = this.dataService.freeCollection;
      this.publicCollectioN = this.dataService.public_collection;
      this.privateCollectioN = this.dataService.privateCollection;
      
   }
     names = this.dataService.getStringUserLocalization();
     //getting length of collections
     free_collection_size  = this.dataService.freeCollection.length;
     public_collection_size  = this.dataService.public_collection.length;
     private_collection_size  = this.dataService.privateCollection.length;
    //getting collections name
    freecollection = this.dataService.freeCollectionName;
    publiccollection = this.dataService.publicCollectionName;
    privatecollection = this.dataService.privateCollectionName;
  
   ngOnInit() {
      
    }
    slidePrev() {
      this.ionSlides.slidePrev();
    }
    slideNext() {
      this.ionSlides.slideNext();
    }
  
    doCheck() {
      let prom1 = this.ionSlides.isBeginning();
      let prom2 = this.ionSlides.isEnd();
    
      Promise.all([prom1, prom2]).then((data) => {
        data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
        data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
      });
    }
  
    desc(temp:Collections){
    this.dataService.newFreeColl = temp;
    this.navCtrl.navigateForward('module-page7');
    }
  
    desc1(temp:Collections){
      this.dataService.newPublicColl = temp;
      this.navCtrl.navigateForward('module-page7');
      }
  
    desc2(temp:Collections){
        this.dataService.newPrivateColl = temp;
        this.navCtrl.navigateForward('module-page7');
        }
  
    
    @ViewChild('slides') ionSlides: IonSlides;
    
    slideOpts2 = {
      //initialSlide: this.free_collection_size,
      autoplay: false,
      nav: true,
      loop:false,
      slidesPerView: this.slidePre,
      spaceBetween: 0,
      autoplayTimeout: 5500,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      responsive: {
        2100: {
         
        }
      }
    };
  
    
  
  
  }