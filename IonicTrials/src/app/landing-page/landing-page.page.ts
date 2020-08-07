import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  ngOnInit() {
  }

  gotoLoginPage() {
    this.navCtrl.navigateForward('login-page');
  }

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event : ev
    });
    await popover.present();
  }
}
