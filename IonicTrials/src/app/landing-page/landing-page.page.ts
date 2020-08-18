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

  
  constructor(private popoverCtrl: PopoverController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  user()
  {
    this.navCtrl.navigateForward('user-home');
    //this.navCtrl.navigateForward('carpage');
  }
  admin_user()
  {
    this.navCtrl.navigateForward('admin-user-home'); 
  }

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event : ev
    });
    await popover.present();
  }
}
