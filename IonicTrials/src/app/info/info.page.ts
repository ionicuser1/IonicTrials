import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InfoService } from './../core/data.service/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  information = null;
  results: Observable<any>;
  selectedEntry;
  // searchTerm: '';
  // type: SearchType = SearchType.all;

  constructor(private infoService: InfoService) {
    this.results = this.infoService.searchData();
  }

  onSelectionChange(select) {
    if(select == 1){
      this.selectedEntry = this.information.option1;
    }else if(select == 2){
      this.selectedEntry = this.information.option2;
    }else if(select == 3){
      this.selectedEntry = this.information.option3;
    }else if(select == 4){
      this.selectedEntry = this.information.option4;
    }
  }

  showDetail(id) {
    // Get the ID that was passed with the URL
    // const id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get the information from the API
    this.infoService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }

  submitAnswer(){
    this.information.selectedEntry = this.selectedEntry;
    this.information.submitted = true;
  }

  isSelected(select) : boolean{
    if(select == 1){
      if(this.information.selectedEntry == this.information.option1){
        return true;
      }
    }else if(select == 2){
      if(this.information.selectedEntry == this.information.option2){
        return true;
      }
    }else if(select == 3){
      if(this.information.selectedEntry == this.information.option3){
        return true;
      }
    }else if(select == 4){
      if(this.information.selectedEntry == this.information.option4){
        return true;
      }
    }

  }

  ngOnInit() {
  }
}
