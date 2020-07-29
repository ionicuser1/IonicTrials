import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  param = "Hello world"
  constructor(private navCtrl: NavController, private popoverCtrl: PopoverController) { }
  

  ngOnInit() {
  }

  goToPage1(){
    this.navCtrl.navigateForward('page1');
  }

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event : ev
    });
    await popover.present();
  }
}
