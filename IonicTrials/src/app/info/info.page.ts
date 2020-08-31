import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InfoService } from './../core/data.service/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  results: Observable<any>;
  // searchTerm: '';
  // type: SearchType = SearchType.all;

  constructor(private infoService: InfoService) {
    this.results = this.infoService.searchData();
  }

  ngOnInit() {
  }
}
