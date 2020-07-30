import { Injectable } from '@angular/core';

export interface Item {
  id : number,
  type_ : string,
  sub_type : string,
  link_description : string,
  link_url : string
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }


}
