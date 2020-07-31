import {UserCollections, FreeCollections, PrivateCollections, PublicCollections, OtherCollections } from '../model/user_collection.model';
import { Injectable } from '@angular/core';
import { AdminUserCollections } from '../model/admin_collections.model';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
    providedIn: 'root'
  })

export class DataService {
  static getCollectionsName(getCollectionsName: any) {
    throw new Error("Method not implemented.");
  }

  constructor(public translate: TranslateService){
    
  }
      
    userCollectionName : any;
    freeCollectionName : any;
    publicCollectionName : any;
    privateCollectionName : any;
    otherCollectionName : any;

    newFreeColl :  FreeCollections;
    newPublicColl : PublicCollections;
    newPrivateColl : PrivateCollections;
    newOtherColl : OtherCollections;

    userCollection : UserCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'},{'card_name':'card6','card_details' : 'this is card6'}];

    freeCollection : FreeCollections[] = [{'collection_name' : 'FreeCollection','card_name': 'card1','card_details' : 'this is card1','image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : 'FreeCollection','card_name':'card2','card_details' : 'this is card2','image' : 'assets/images/carousel/banner_2.jpg'},{'collection_name' : 'FreeCollection','card_name':'card3','card_details' : 'this is card3','image' : 'assets/images/carousel/banner_3.jpg'},{'collection_name' : 'FreeCollection','card_name':'card4','card_details' : 'this is card4','image' : 'assets/images/carousel/banner_4.jpg'},{'collection_name' : 'FreeCollection','card_name':'card5','card_details' : 'this is card5','image' : 'assets/images/carousel/banner_6.jpg'}];

    public_collection : PublicCollections[] = [{'collection_name' : 'PublicCollection','card_name': 'card1','card_details' : 'this is card1','image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : 'PublicCollection','card_name':'card2','card_details' : 'this is card2','image' : 'assets/images/carousel/banner_2.jpg'},{'collection_name' : 'PublicCollection','card_name':'card3','card_details' : 'this is card3','image' : 'assets/images/carousel/banner_3.jpg'}];

    privateCollection : PrivateCollections[] = [{'collection_name' : 'PrivateCollection','card_name': 'card1','card_details' : 'this is card1','image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : 'PrivateCollection','card_name':'card2','card_details' : 'this is card2','image' : 'assets/images/carousel/banner_2.jpg'},{'collection_name' : 'PrivateCollection','card_name':'card3','card_details' : 'this is card3','image' : 'assets/images/carousel/banner_3.jpg'},{'collection_name' : 'PrivateCollection','card_name':'card4','card_details' : 'this is card4','image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : 'PrivateCollection','card_name':'card5','card_details' : 'this is card5','image' : 'assets/images/carousel/banner_5.jpg'},{'collection_name' : 'PrivateCollection','card_name':'card6','card_details' : 'this is card6','image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : 'PrivateCollection','card_name':'card7','card_details' : 'this is card7','image' : 'assets/images/carousel/banner_3.jpg'},{'collection_name' : 'PrivateCollection','card_name':'card8','card_details' : 'this is card8','image' : 'assets/images/carousel/banner_2.jpg'}];

    otherCollection : OtherCollections[] = [{'collection_name' : 'OtherCollection','card_name': 'card1','card_details' : 'this is card1','image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : 'OtherCollection','card_name':'card2','card_details' : 'this is card2','image' : 'assets/images/carousel/banner_2.jpg'},{'collection_name' : 'OtherCollection','card_name':'card3','card_details' : 'this is card3','image' : 'assets/images/carousel/banner_3.jpg'},{'collection_name' : 'OtherCollection','card_name':'card4','card_details' : 'this is card4','image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : 'OtherCollection','card_name':'card5','card_details' : 'this is card5','image' : 'assets/images/carousel/banner_5.jpg'},{'collection_name' : 'OtherCollection','card_name':'card6','card_details' : 'this is card6','image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : 'OtherCollection','card_name':'card7','card_details' : 'this is card7','image' : 'assets/images/carousel/banner_3.jpg'},{'collection_name' : 'OtherCollection','card_name':'card8','card_details' : 'this is card8','image' : 'assets/images/carousel/banner_2.jpg'}];


    adminCollection : AdminUserCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'},{'card_name':'card6','card_details' : 'this is card6'},{'card_name':'card7','card_details' : 'this is card7'},{'card_name':'card8','card_details' : 'this is card8'}];
 
    userAdminCollection : AdminUserCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'},{'card_name':'card6','card_details' : 'this is card6'}];
  
  getStringUserLocalization(){
          this.translate.get('UserHomePage').subscribe((data:any)=> {
          this.userCollectionName = data.User_Collection_name;
          this.freeCollectionName = data.Free_Collection_name;
          this.privateCollectionName = data.Private_Collection_name;
          this.publicCollectionName = data.Public_Collection_name;
          this.otherCollectionName = data.Other_collection_name;
           });
        } 

      getCollectionsName(){
       this.userCollection;
       this.freeCollection;
       this.privateCollection;
       this.adminCollection;
       this.userAdminCollection;
       this.public_collection;
      }
}
