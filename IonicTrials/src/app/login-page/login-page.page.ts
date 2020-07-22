import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginModel } from '../core/model/LoginModel';
import { DataService } from '../core/data.service/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})

export class LoginPagePage implements OnInit {

  isValidUser : boolean;
  loginModel: LoginModel;
  dataService : DataService;

  constructor(public navCtrl: NavController, private service: DataService) {
    this.navCtrl = navCtrl;
    this.dataService = service;
    this.loginModel = new LoginModel();
  }

  ngOnInit() {
  }

  LoginUser() {
    if(this.service.validateUser(this.loginModel.username, this.loginModel.password)){
      this.service.loggedInUser = this.loginModel.username;
      this.navCtrl.navigateForward('user-home-page');
    }
  }

}
