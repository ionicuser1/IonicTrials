import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service/data.service';
import { UserCollections, FreeCollections, PrivateCollections, PublicCollections } from 'src/app/core/model/user_collection.model';

@Component({
  selector: 'app-module-page7',
  templateUrl: './module-page7.page.html',
  styleUrls: ['./module-page7.page.scss'],
})
export class ModulePage7Page implements OnInit {

  // CollectionName = "public collection";
  // cardName = "card 1";
  // cardDetails = "This is card 1"


 // public freeCollections : FreeCollections[];
  public publicCollections : PublicCollections[];
  public privateCollections : PrivateCollections[];

  constructor( private dataService : DataService) {
    // this.freeCollections = this.dataService.freeCollectionName
     this.publicCollections = this.dataService.publicCollectionName
     this.privateCollections = this.dataService.privateCollectionName

     }
    
     CollectionName =  this.dataService.freeCollectionName;

  ngOnInit() {
    console.log("CollectionName ==="+this.CollectionName)
  }
 
 

}
