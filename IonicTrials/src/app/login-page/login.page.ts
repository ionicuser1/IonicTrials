import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginModel } from '../core/model/LoginModel';
import { DataService } from '../core/data.service/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})

export class LoginPagePage implements OnInit {

  isValidUser : boolean;
  loginModel: LoginModel;
  dataService : DataService;

  constructor(public navCtrl: NavController, private service: DataService, private alertCtrl: AlertController) {
    this.navCtrl = navCtrl;
    this.dataService = service;
    this.loginModel = new LoginModel();
  }

  ngOnInit() {
  }

  async LoginUser() {
    if(this.dataService.validateUser(this.loginModel.username, this.loginModel.password)){
      this.dataService.loggedInUser = this.loginModel.username;
      this.navCtrl.navigateForward('user-home-page');
    }else{
      let alert = this.alertCtrl.create({
        message: "Please Enter Valid Credentials",
        buttons: [
          {
            text: 'Ok',
            role: 'ok',
            handler: data => {
              console.log('ok clicked');
            }
          }
        ]
      });
      (await alert).present();
    }
    }
}
