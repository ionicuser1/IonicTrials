import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { UserCollections, FreeCollections, OtherCollections } from 'src/app/core/model/user_collection.model';
import { DataService } from 'src/app/core/data.service/data.service';

@Component({
  selector: 'app-admin-collections',
  templateUrl: './admin-collections.component.html',
  styleUrls: ['./admin-collections.component.scss'],
})
export class AdminCollectionsComponent implements OnInit {
  slidePre = 4;
  public freeCollectioN : OtherCollections[];

  constructor(private dataService : DataService, private navCtrl : NavController ) {
    this.freeCollectioN = this.dataService.otherCollection;
   }

   free_collection_size  = this.dataService.otherCollection.length;
  
   // this.dataService.getStringUserLocalization();
  freecollection = this.dataService.otherCollectionName;

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
      initialSlide: this.free_collection_size,
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