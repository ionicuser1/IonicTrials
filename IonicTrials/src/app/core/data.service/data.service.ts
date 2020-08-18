import {UserCollections, Collections } from '../model/user_collection.model';
import { Injectable } from '@angular/core';
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
    cardname1 : any;
    cardname2 : any;
    cardname3 : any;
    cardname4 : any;
    cardname5 : any;
    cardname6 : any;
    cardname7 : any;
    cardname8 : any;
    cardname9 : any;
    cardDetails1 : any;
    cardDetails2 : any;
    cardDetails3 : any;
    cardDetails4 : any;
    cardDetails5 : any;
    cardDetails6 : any;
    cardDetails7 : any;
    cardDetails8 : any;
    cardDetails9 : any;
    cardDetails10 : any;



    newFreeColl :  Collections;
    newPublicColl : Collections;
    newPrivateColl : Collections;
    newOtherColl : Collections;

    details = this.getStringUserLocalization();
     userCollection : UserCollections[] = [{'card_name': this.cardname1,'card_details' : this.cardDetails1},{'card_name':this.cardname2,'card_details' : this.cardDetails2},{'card_name':this.cardname3,'card_details' : this.cardDetails3},{'card_name':this.cardname4,'card_details' : this.cardDetails4},{'card_name':this.cardname5,'card_details' : this.cardDetails5},{'card_name':this.cardname6,'card_details' : this.cardDetails6}];

    freeCollection : Collections[] = [{'collection_name' : this.freeCollectionName,'card_name': this.cardname1,'card_details' : this.cardDetails1,'image' : 'assets/images/carousel/banner_2.jpg'},{'collection_name' : this.freeCollectionName,'card_name': this.cardname2,'card_details' : this.cardDetails2,'image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : this.freeCollectionName,'card_name':this.cardname3,'card_details' : this.cardDetails3,'image' : 'assets/images/carousel/banner_3.jpg'},{'collection_name' : this.freeCollectionName,'card_name':this.cardname4,'card_details' : this.cardDetails4,'image' : 'assets/images/carousel/banner_4.jpg'},{'collection_name' : this.freeCollectionName,'card_name':this.cardname5,'card_details' : this.cardDetails5,'image' : 'assets/images/carousel/banner_6.jpg'}];

    public_collection : Collections[] = [{'collection_name' : this.publicCollectionName,'card_name': this.cardname1,'card_details' : this.cardDetails1,'image' : 'assets/images/carousel/banner_2.jpg'},{'collection_name' : this.publicCollectionName,'card_name':this.cardname2,'card_details' : this.cardDetails2,'image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : this.publicCollectionName,'card_name':this.cardname3,'card_details' : this.cardDetails3,'image' : 'assets/images/carousel/banner_3.jpg'}];

    privateCollection : Collections[] = [{'collection_name' : this.privateCollectionName,'card_name': this.cardname1,'card_details' : this.cardDetails1,'image' : 'assets/images/carousel/banner_2.jpg'},{'collection_name' : this.privateCollectionName,'card_name':this.cardname2,'card_details' : this.cardDetails2,'image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : this.privateCollectionName,'card_name':this.cardname3,'card_details' : this.cardDetails3,'image' : 'assets/images/carousel/banner_3.jpg'},{'collection_name' : this.privateCollectionName,'card_name':this.cardname4,'card_details' : this.cardDetails4,'image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : this.privateCollectionName,'card_name':this.cardname5,'card_details' : this.cardDetails5,'image' : 'assets/images/carousel/banner_5.jpg'},{'collection_name' : this.privateCollectionName,'card_name':this.cardname6,'card_details' : this.cardDetails6,'image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : this.privateCollectionName,'card_name':this.cardname7,'card_details' : this.cardDetails7,'image' : 'assets/images/carousel/banner_3.jpg'},{'collection_name' : this.privateCollectionName,'card_name':this.cardname8,'card_details' : this.cardDetails8,'image' : 'assets/images/carousel/banner_2.jpg'}];

    otherCollection : Collections[] = [{'collection_name' : this.otherCollectionName,'card_name': this.cardname1,'card_details' : this.cardDetails1,'image' : 'assets/images/carousel/banner_2.jpg'},{'collection_name' : this.otherCollectionName,'card_name':this.cardname2,'card_details' : this.cardDetails2,'image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : this.otherCollectionName,'card_name':this.cardname3,'card_details' : this.cardDetails3,'image' : 'assets/images/carousel/banner_3.jpg'},{'collection_name' : this.otherCollectionName,'card_name':this.cardname4,'card_details' : this.cardDetails4,'image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : this.otherCollectionName,'card_name':this.cardname5,'card_details' : this.cardDetails5,'image' : 'assets/images/carousel/banner_5.jpg'},{'collection_name' : this.otherCollectionName,'card_name':this.cardname6,'card_details' : this.cardDetails6,'image' : 'assets/images/carousel/banner_1.jpg'},{'collection_name' : this.otherCollectionName,'card_name':this.cardname7,'card_details' : this.cardDetails7,'image' : 'assets/images/carousel/banner_3.jpg'},{'collection_name' : this.otherCollectionName,'card_name':'card8','card_details' : this.cardDetails8,'image' : 'assets/images/carousel/banner_2.jpg'}];


  getStringUserLocalization(){
          this.translate.get('UserHomePage').subscribe((data:any)=> {
          this.userCollectionName = data.User_Collection_name;
          this.freeCollectionName = data.Free_Collection_name;
          this.privateCollectionName = data.Private_Collection_name;
          this.publicCollectionName = data.Public_Collection_name;
          this.otherCollectionName = data.Other_collection_name;
          this.cardname1 = data.card1;
          this.cardname2 = data.card2;
          this.cardname3 = data.card3;
          this.cardname4 = data.card4;
          this.cardname5 = data.card5;
          this.cardname6 = data.card6;
          this.cardname7 = data.card7;
          this.cardname8 = data.card8;
          this.cardname9 = data.card9;
          this.cardDetails1 = data.card_detail1;
          this.cardDetails2 = data.card_detail2;
          this.cardDetails3 = data.card_detail3;
          this.cardDetails4 = data.card_detail4;
          this.cardDetails5 = data.card_detail5;
          this.cardDetails6 = data.card_detail6;
          this.cardDetails7 = data.card_detail7;
          this.cardDetails8 = data.card_detail8;
          this.cardDetails9 = data.card_detail9;
          this.cardDetails10 = data.card_detail10;

           });
        } 

      getCollectionsName(){
       this.userCollection;
       this.freeCollection;
       this.privateCollection;
      // this.adminCollection;
      // this.userAdminCollection;
       this.public_collection;
      }
}
