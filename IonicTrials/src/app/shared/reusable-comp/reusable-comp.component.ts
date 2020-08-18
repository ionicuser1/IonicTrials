import { Component, OnInit, ViewChild } from '@angular/core';
import { Collections } from 'src/app/core/model/user_collection.model';
import { DataService } from 'src/app/core/data.service/data.service';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-reusable-comp',
  templateUrl: './reusable-comp.component.html',
  styleUrls: ['./reusable-comp.component.scss'],
})
export class ReusableCompComponent implements OnInit {

  slidePre = 4;
  public freeCollectioN : Collections[];
  public collectionname : Collections;

  constructor(private dataService : DataService, private navCtrl : NavController ) {
    this.freeCollectioN = this.dataService.otherCollection;
   }

   free_collection_size  = this.dataService.otherCollection.length;
  
   // this.dataService.getStringUserLocalization();
  collectionName = this.dataService.freeCollectionName

  ngOnInit() {}
  slidePrev() {
    this.slider.slidePrev();
  }
  slideNext() {
    this.slider.slideNext();
  }

  desc(temp:Collections){
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