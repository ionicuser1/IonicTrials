import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../core/data.service/data.service';
import { UserCollections } from '../core/model/user_collection.model';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-admin-user-home',
  templateUrl: './admin-user-home.page.html',
  styleUrls: ['./admin-user-home.page.scss'],
})
export class AdminUserHomePage implements OnInit {

  
  ngOnInit() {
  }

  userCollectioN : UserCollections[];
  constructor(private dataService : DataService) {
    this.userCollectioN = this.dataService.userCollection;
   }

   slideOpts = {
    initialSlide: 1,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 400
  };

   @ViewChild(IonSlides) slider: IonSlides;

   slidePrev() {
     this.slider.slidePrev();
   }
   slideNext() {
     this.slider.slideNext();
   }

}

