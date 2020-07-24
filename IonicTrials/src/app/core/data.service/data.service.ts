import {UserCollections, FreeCollections, PrivateCollections, PublicCollections } from '../model/user_collection.model';
import { Injectable } from '@angular/core';
import { AdminUserCollections } from '../model/admin_collections.model';


@Injectable({
    providedIn: 'root'
  })

export class DataService {


    userCollection : UserCollections[] = [{'card_name': 'card1','card_details' : 'this is card1','collection_name' : 'User Collection'},{'card_name':'card2','card_details' : 'this is card2', 'collection_name' : 'User Collection'},{'card_name':'card3','card_details' : 'this is card3', 'collection_name' : 'User Collection'},{'card_name':'card4','card_details' : 'this is card4','collection_name' : 'User Collection'},{'card_name':'card5','card_details' : 'this is card5', 'collection_name' : 'User Collection'},{'card_name':'card6','card_details' : 'this is card6','collection_name' : 'User Collection'}];

    freeCollection : FreeCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'}];

    public_collection : PublicCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'}];

    privateCollection : PrivateCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'},{'card_name':'card6','card_details' : 'this is card6'},{'card_name':'card7','card_details' : 'this is card7'},{'card_name':'card8','card_details' : 'this is card8'}];

    adminCollection : AdminUserCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'},{'card_name':'card6','card_details' : 'this is card6'},{'card_name':'card7','card_details' : 'this is card7'},{'card_name':'card8','card_details' : 'this is card8'}];
 
    userAdminCollection : AdminUserCollections[] = [{'card_name': 'card1','card_details' : 'this is card1'},{'card_name':'card2','card_details' : 'this is card2'},{'card_name':'card3','card_details' : 'this is card3'},{'card_name':'card4','card_details' : 'this is card4'},{'card_name':'card5','card_details' : 'this is card5'},{'card_name':'card6','card_details' : 'this is card6'}];

}