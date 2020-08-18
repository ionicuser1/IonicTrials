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

  disablePrevBtn = true;
  disableNextBtn = false;

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

  
   @ViewChild('slides') ionSlides: IonSlides;

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
}

