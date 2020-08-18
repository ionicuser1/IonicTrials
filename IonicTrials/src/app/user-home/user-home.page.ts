import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { DataService } from '../core/data.service/data.service';
import { UserCollections, FreeCollections } from '../core/model/user_collection.model';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {

 initial_slide = 1;
  name = "User Home Page"
  public userCollectioN : UserCollections[];
  
  constructor(private dataService : DataService) {
    this.userCollectioN = this.dataService.userCollection;
   }
   arraySize  = this.dataService.public_collection.length;
   
   ngOnInit() {
  
    console.log("arraysize="+this.arraySize);
  }

  slideOpts = {
    initialSlide: this.initial_slide,
    autoplay: true,
    slidesPerView: this.initial_slide,
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
