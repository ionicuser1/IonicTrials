import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/core/data.service/data.service';
import { Collections } from 'src/app/core/model/user_collection.model';

@Component({
  selector: 'app-modulepage8',
  templateUrl: './modulepage8.page.html',
  styleUrls: ['./modulepage8.page.scss'],
})
export class Modulepage8Page implements OnInit {


  freeCollectionObj : Collections;
  constructor( private dataService : DataService) {
    // this.freeCollections = this.dataService.freeCollectionName
    this.freeCollectionObj = this.dataService.newFreeColl;
  }
  CollectionName =  this.dataService.freeCollectionName;
  ngOnInit() {
  }

}
