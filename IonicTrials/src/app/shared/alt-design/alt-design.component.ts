import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alt-design',
  templateUrl: './alt-design.component.html',
  styleUrls: ['./alt-design.component.scss'],
})
export class AltDesignComponent implements OnInit {

  constructor(public alertController: AlertController,private toastr: ToastrService, private navCtrl : NavController) { }

  ngOnInit() {}

  async presentAlert() {
    console.log('Alert Event');
    const alert = await this.alertController.create({
      header: 'Alert message',
      subHeader: 'Simple Alert Dialogue',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  showSuccessToast() {
    this.toastr.success("And these were just the basic demos! Scroll down to check further details on how to customize the output", 'Success', {
      progressBar: true,
      closeButton: true
    })
  }
  Next()
  {
    this.navCtrl.navigateForward('timer-count-down');
  }

}
