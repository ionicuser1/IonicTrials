import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToPage2(){
    this.navCtrl.navigateForward('page1/page2')
  }

  goToPage3(){
    this.navCtrl.navigateForward('page1/page3')
  }

}
