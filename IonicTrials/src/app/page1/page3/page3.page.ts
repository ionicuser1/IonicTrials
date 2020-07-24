import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToPage4(){
    this.navCtrl.navigateForward("page1/page2/page4");
  }
  goToPage5(){
    this.navCtrl.navigateForward("page1/page3/page5");
  }

}
