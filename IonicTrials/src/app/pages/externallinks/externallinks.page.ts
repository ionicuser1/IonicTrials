import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-externallinks',
  templateUrl: './externallinks.page.html',
  styleUrls: ['./externallinks.page.scss'],
})
export class ExternallinksPage implements OnInit {

  constructor(private storage: Storage,public alertController: AlertController) { 
    console.log('constructor');
  }

  ngOnInit() {
  //  this.storage.clear();
  }

  
  async addLink()
  {
    const { value: formValues  } = await Swal.fire({
      showCancelButton: true,
      confirmButtonText:'Save',
      // input: 'url',
      // inputPlaceholder: 'Enter the URL',
      html : 
       '<input id="swal-input1" class="swal2-input" placeholder="Enter Topic" type="text" >' +
       '<input id="swal-input2" class="swal2-input" placeholder="Enter Sub-Topic" type="text">' +
       '<input id="swal-input3" class="swal2-input" placeholder="Enter Link Description" type="text">' +
       '<input id="swal-input4" class="swal2-input" placeholder="Enter Link URL" type="url" pattern="https?://.+" required>'
      // preConfirm: () => {
      //   return [
      //     document.getElementById('swal-input1').value,
      //     document.getElementById('swal-input2').value,
      //     document.getElementById('swal-input3').value,
      //     document.getElementById('swal-input4').value
      //   ]
      // }
    });

    if (formValues ) {
      Swal.fire(JSON.stringify(formValues))
    }
    
  }


  async addLinkAlert(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          type: 'text',
          placeholder: 'Enter The Topic'
        },
        {
          type: 'text',
          placeholder: 'Enter The Sub-Topic'
        },
        {
          type: 'text',
          placeholder: 'Enter Link Description'
        },{
          type: 'url',
          placeholder: 'Enter Link URL',
          cssClass:'swal2-input'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
