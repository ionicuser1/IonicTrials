import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCollections, FreeCollections, PublicCollections } from 'src/app/core/model/user_collection.model';
import { DataService } from 'src/app/core/data.service/data.service';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-other-collections',
  templateUrl: './other-collections.component.html',
  styleUrls: ['./other-collections.component.scss'],
})
export class OtherCollectionsComponent implements OnInit {

  slidePre = 4;

  public userCollectioN : UserCollections[];
  public freeCollectio : FreeCollections;

  public publicCollectioN : PublicCollections[];
  
  
  constructor(private dataService : DataService, private navCtrl : NavController) {
    this.userCollectioN = this.dataService.userCollection;
    this.publicCollectioN = this.dataService.public_collection;
   }
   names = this.dataService.getStringUserLocalization();
   public_collection_size  = this.dataService.public_collection.length;
   free_collection_size  = this.dataService.freeCollection.length;
   private_collection_size  = this.dataService.privateCollection.length;

   
   public_collection_name = this.dataService.publicCollectionName
   free_collection_name = this.dataService.freeCollectionName
   private_collection_name = this.dataService.privateCollectionName
 
   slidePrev() {
    this.slider.slidePrev();
  }
  slideNext() {
    this.slider.slideNext();
  }
  

   
   ngOnInit() {
  
    console.log("Public Collection Size="+this.public_collection_size);
    console.log("Free Collection Size="+this.free_collection_size);
    console.log("Private Collection Size="+this.private_collection_size);
    console.log("collection name="+this.public_collection_name);
    console.log("collection name="+this.free_collection_name);
    console.log("collection name="+this.private_collection_name);
    
  }

  @ViewChild(IonSlides) slider: IonSlides;

  slideOpts3 = {
    initialSlide: this.public_collection_size,
    autoplay: true,
    nav: true,
    slidesPerView: this.slidePre,
    spaceBetween: 0,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      2100: {
       
      }
    }
  };
  

 

  desc1(temp:PublicCollections){
    this.dataService.newPublicColl = temp;
    this.navCtrl.navigateForward('module-page7');
    }
}
