import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-alt-design',
  templateUrl: './alt-design.component.html',
  styleUrls: ['./alt-design.component.scss'],
})
export class AltDesignComponent implements OnInit {

  dialogTitle: any;
  dialoHeader: any;
  dialogText: any;
  dialogBtnOk: any;
  successMsgs: any;

  constructor(public alertController: AlertController,private toastr: ToastrService, private navCtrl : NavController, public translate: TranslateService) { }

  ngOnInit() {}

  async presentAlert() {
    this.getStringLocalization();
    console.log('Alert Event');
    const alert = await this.alertController.create({
      header: this.dialogTitle,
      subHeader: this.dialoHeader,
      message: this.dialogText,
      buttons: ['OK']
    });

    await alert.present();
  }

  showSuccessToast() {
    this.getStringLocalization();
    this.toastr.success(this.successMsgs, 'Success', {
      progressBar: true,
      closeButton: true
    })
  }
  Next()
  {
    this.navCtrl.navigateForward('timer-count-down');
  }

  getStringLocalization(){
    this.translate.get('AltPage').subscribe((data:any)=> {
    this.dialogTitle = data.header;
    this.dialoHeader = data.subHeader;
    this.dialogText = data.msg;
    this.dialogBtnOk = data.btnOk;
    this.successMsgs = data.successMsg;
    

     });
  }

}
