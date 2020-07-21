import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})

export class LoginPagePage implements OnInit {

  username : String;
  password : String;
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  ngOnInit() {
  }

  LoginUser() {
    if(this.username == "parent" && this.password == "parent")
    {
      this.navCtrl.navigateForward('home'); 
    }
  }

}
