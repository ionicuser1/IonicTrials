import { Component, OnInit, ViewChild } from '@angular/core';
import { FreeCollections } from 'src/app/core/model/user_collection.model';
import { DataService } from 'src/app/core/data.service/data.service';
import { NavController, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-admin-comp',
  templateUrl: './other-admin-comp.component.html',
  styleUrls: ['./other-admin-comp.component.scss'],
})
export class OtherAdminCompComponent implements OnInit {

  slidePre = 4;

  public freeCollectioN : FreeCollections[];

  constructor(private dataService : DataService, private navCtrl : NavController ) {
    this.freeCollectioN = this.dataService.freeCollection;
   }

   free_collection_size  = this.dataService.freeCollection.length;
  
   // this.dataService.getStringUserLocalization();
  freecollection = this.dataService.freeCollectionName;

  ngOnInit() {}
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

    @ViewChild(IonSlides) slider: IonSlides;
    slideOpts2 = {
     // initialSlide: this.free_collection_size,
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
