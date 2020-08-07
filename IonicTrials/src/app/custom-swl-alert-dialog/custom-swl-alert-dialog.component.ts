import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-custom-swl-alert-dialog',
  templateUrl: './custom-swl-alert-dialog.component.html',
  styleUrls: ['./custom-swl-alert-dialog.component.scss'],
})
export class CustomSwlAlertDialogComponent implements OnInit {

  dialogTitle: any;
  dialogText: any;
  dialogBtnOk: any;

  constructor(public alertController: AlertController,public translate: TranslateService) { }

  ngOnInit() {}

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
