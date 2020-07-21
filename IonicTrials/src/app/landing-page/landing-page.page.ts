import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  ngOnInit() {
  }

  goAnOtherPage() {
    this.navCtrl.navigateForward('login-page');
  }

}