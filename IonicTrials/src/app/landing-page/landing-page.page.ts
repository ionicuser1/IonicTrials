import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { TranslateService } from '@ngx-translate/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  dialogTitle: any;
  dialogText: any;
  dialogBtnOk: any;

  constructor(public translate: TranslateService,public alertController: AlertController) { 
  }

  ngOnInit() {
    
  }

  backGround()
  {
      this.getStringLocalization();
      Swal.fire({
      title: this.dialogTitle,
      text: this.dialogText,
      customClass:{
        popup:'swal-overlay'
      }
    });
    
  }


  async presentAlert() {

    this.getStringLocalization();
    const alert = await this.alertController.create({
      cssClass: 'my-custom-alert',
      subHeader: this.dialogTitle,
      message: this.dialogText,
      buttons: [this.dialogBtnOk]
    });

    await alert.present();
  }


getStringLocalization(){
    this.translate.get('LandingPage').subscribe((data:any)=> {
    this.dialogTitle = data.ModalDialogTitle;
    this.dialogText = data.ModalDialogText;
    this.dialogBtnOk = data.BtnOk;
     });
  }
}



