import {UserCollections, FreeCollections, PrivateCollections, PublicCollections } from '../model/user_collection.model';
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

    userCollection : UserCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'},{'card_name':'card6','card_details' : 'this is card6'}];

    freeCollection : FreeCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'}];

    public_collection : PublicCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'}];

    privateCollection : PrivateCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'},{'card_name':'card6','card_details' : 'this is card6'},{'card_name':'card7','card_details' : 'this is card7'},{'card_name':'card8','card_details' : 'this is card8'}];

    adminCollection : AdminUserCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'},{'card_name':'card6','card_details' : 'this is card6'},{'card_name':'card7','card_details' : 'this is card7'},{'card_name':'card8','card_details' : 'this is card8'}];
 
    userAdminCollection : AdminUserCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'},{'card_name':'card6','card_details' : 'this is card6'}];
  
  getStringUserLocalization(){
          this.translate.get('UserHomePage').subscribe((data:any)=> {
          this.userCollectionName = data.User_Collection_name;
          this.freeCollectionName = data.Free_Collection_name;
          this.privateCollectionName = data.Private_Collection_name;
          this.publicCollectionName = data.Public_Collection_name;
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
