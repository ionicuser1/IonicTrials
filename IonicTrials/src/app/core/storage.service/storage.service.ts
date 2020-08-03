import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  id: number,
  topic: string,
  subtopic: string,
  linkDesc: string,
  linkUrl: string,
  modified: number
 }

 const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage : Storage) { }

  addItem(item: Item) : Promise<any> {

    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if(items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      }else{
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  getItems(){
    return this.storage.get(ITEMS_KEY);
  }

  updateItem(item : Item) : Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      
      if(!items || items.length === 0){
        return null;
      }

      let newItems: Item[] = [];

      for(let i of items){
        if(i.id === item.id){
          newItems.push(item);
        }else{
          newItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY,newItems);
    });
  }

  deleteItem(id: number) : Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      
      if(!items || items.length === 0){
        return null;
      }

      let toKeep: Item[] = [];

      for( let i of items){
        if(i.id != id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY,toKeep);
    });
  }
  
}
