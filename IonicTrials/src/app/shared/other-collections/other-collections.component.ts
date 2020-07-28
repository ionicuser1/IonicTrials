import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCollections } from 'src/app/core/model/user_collection.model';
import { DataService } from 'src/app/core/data.service/data.service';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-other-collections',
  templateUrl: './other-collections.component.html',
  styleUrls: ['./other-collections.component.scss'],
})
export class OtherCollectionsComponent implements OnInit {

  public userCollectioN : UserCollections[];
  
  
  constructor(private dataService : DataService, private navCtrl : NavController) {
    this.userCollectioN = this.dataService.userCollection;
   }
   names = this.dataService.getStringUserLocalization();
   public_collection_size  = this.dataService.public_collection.length;
   free_collection_size  = this.dataService.freeCollection.length;
   private_collection_size  = this.dataService.privateCollection.length;


   public_collection_name = this.dataService.publicCollectionName
   free_collection_name = this.dataService.freeCollectionName
   private_collection_name = this.dataService.privateCollectionName

   
   ngOnInit() {
  
    console.log("Public Collection Size="+this.public_collection_size);
    console.log("Free Collection Size="+this.free_collection_size);
    console.log("Private Collection Size="+this.private_collection_size);
    console.log("collection name="+this.public_collection_name);
    console.log("collection name="+this.free_collection_name);
    console.log("collection name="+this.private_collection_name);
  }

  @ViewChild(IonSlides) slider: IonSlides;

  slideOpts2 = {
    initialSlide: this.public_collection_size,
    autoplay: true,
    nav: true,
    slidesPerView: this.public_collection_size,
    spaceBetween: 0,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      2100: {
       
      }
    }
  };
  slideOpts3 = {
    initialSlide: this.free_collection_size,
    autoplay: true,
    nav: true,
    slidesPerView: this.free_collection_size,
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
    autoplay: true,
    nav: true,
    slidesPerView: this.private_collection_size,
    spaceBetween: 0,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      2100: {
       
      }
    }
  };

  module7(){
   // const collectionName =  this.dataService.getCollectionsName;
    if(onclick === this.free_collection_name)
    {
      console.log("CollectionName free")
    }else if(onclick == this.dataService.publicCollectionName)
    {
      console.log("CollectionName public")
    }else if(onclick == this.dataService.privateCollectionName){
      console.log("CollectionName private")
    }else{
      console.log("CollectionName wrong")
    }
    this.navCtrl.navigateForward('module-page7');
   // console.log("CollectionName=" + collectionName)
  }
}
