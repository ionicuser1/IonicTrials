import { Component, OnInit } from '@angular/core';
import { OtherCollections } from '../core/model/user_collection.model';
import { DataService } from '../core/data.service/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carpage',
  templateUrl: './carpage.page.html',
  styleUrls: ['./carpage.page.scss'],
})
export class CarpagePage implements OnInit {

  public freeCollectioN : OtherCollections[];

  constructor(private dataService : DataService, private navCtrl : NavController ) {
    this.freeCollectioN = this.dataService.otherCollection;
   }

   free_collection_size  = this.dataService.otherCollection.length;
  
   // this.dataService.getStringUserLocalization();
  freecollection = this.dataService.otherCollectionName;

  ngOnInit() {
  }
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };

  

  

}
