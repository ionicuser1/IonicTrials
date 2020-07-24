import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  param = "Work in progress, be patient";

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
    
    
  }

  backGround()
  {
    Swal.fire({
      title: this.param,
      text: 'Click OK to close this alert',
      customClass:{
        popup:'bg-class'
      }
    });
    
  }

  
  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event : ev
    });
    await popover.present();
  }
}
