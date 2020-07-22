import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../core/data.service/data.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.page.html',
  styleUrls: ['./user-home-page.page.scss'],
})
export class UserHomePagePage implements OnInit {
  dataService : DataService;
  logInUser : String;
  constructor(public navCtrl: NavController, private service: DataService) {
    this.navCtrl = navCtrl;
    this.dataService = service;
  }

  ngOnInit() {
    this.logInUser = this.service.loggedInUser;
  }

}
