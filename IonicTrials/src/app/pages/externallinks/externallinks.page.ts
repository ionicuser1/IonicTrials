import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, Platform } from '@ionic/angular';
import { StorageService, Item } from 'src/app/core/storage.service/storage.service';

@Component({
  selector: 'app-externallinks',
  templateUrl: './externallinks.page.html',
  styleUrls: ['./externallinks.page.scss'],
})
export class ExternallinksPage implements OnInit {

  items: Item[] = [];

  newItem : Item = <Item>{};

  updatedItem : Item = <Item>{};

  constructor(public alertController: AlertController,private toastCtrl: ToastController,
    public storageService : StorageService,private plt: Platform) {
      
      this.plt.ready().then(() => {
        this.loadItems();
      });
  }

  // Create
  addItem(topic,sub_topic,link_desc,link_url){

    this.newItem.topic = topic;
    this.newItem.subtopic = sub_topic;
    this.newItem.linkDesc = link_desc;
    this.newItem.linkUrl = link_url;
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();
    this.storageService.addItem(this.newItem).then(item =>{
      this.newItem = <Item>{};
      this.showErrorToast('Item has been added.!');
      this.loadItems();
    });

  }
  // READ
  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  // UPDATE
  updateItem(item : Item){
    item.topic = `UPDATED: ${item.topic}`;
    item.modified = Date.now();

    this.storageService.updateItem(item).then(item => {
      this.showErrorToast('Item Updated');
      this.loadItems();
    });
  }

  // DELETE
  deleteItem(item: Item){
    this.storageService.deleteItem(item.id).then(item => {
      this.showErrorToast('Item is removed.!');
      this.loadItems();
    });
  }

  ngOnInit() {  }

  async addLinkAlert(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-alert',
      inputs: [
        {
          type: 'text',
          name: 'topic',
          placeholder: 'Enter The Topic'
          
        },
        {
          type: 'text',
          name: 'sub_topic',
          placeholder: 'Enter The Sub-Topic'
        },
        {
          type: 'text',
          name: 'link_desc',
          placeholder: 'Enter Link Description'
        },{
          type: 'url',
          name: 'link_url',
          placeholder: 'Enter Link URL'
        },
      ],
      buttons: [
        {
          text: 'Save',
          cssClass:'btn btn-outline-primary btn-fw',
          handler: (data) => {
            let validateUrl = this.validateUrl(data.link_url);
            if(validateUrl.isValid){
              this.addItem(data.topic,data.sub_topic,data.link_desc,data.link_url);
              return true;
            }else {
              this.showErrorToast('URL is invalid.! Please Enter Valid URL..');
              return false;
            }
          }
        }, 
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'btn btn-outline-danger btn-fw',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  validateUrl(data: string){
    var regexUrl = new RegExp("(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?");
    if(regexUrl.test(data) ){
      return {
        isValid: true,
        message: ''
      };
    } else {
       return {
          isValid: false,
          message: 'Url address is required'
       }
    }
  }



 async showErrorToast(data: any) {
    let toast = await this.toastCtrl.create({
      message: data,
      duration: 2000,
      position: 'top'
    });

    toast.present();
  }


 async loadEdit(index){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-alert',
      inputs: [
        {
          type: 'text',
          name: 'topic',
          placeholder: 'Enter The Topic',
          value: this.items[index].topic
        },
        {
          type: 'text',
          name: 'subTopic',
          placeholder: 'Enter The Sub-Topic',
          value: this.items[index].subtopic
        },
        {
          type: 'text',
          name: 'linkDescription',
          placeholder: 'Enter Link Description',
          value: this.items[index].linkDesc
        },{
          type: 'url',
          name: 'linkUrl',
          placeholder: 'Enter Link URL',
          value: this.items[index].linkUrl
        },
      ],
      buttons: [
        {
          text: 'Save',
          cssClass:'btn btn-outline-primary btn-fw',
          handler: (data) => {
          
            let validateUrl = this.validateUrl(data.linkUrl);      
            if(validateUrl.isValid){
              this.updatedItem.topic = data.topic;
              this.updatedItem.subtopic = data.subTopic;
              this.updatedItem.linkDesc = data.linkDescription;
              this.updatedItem.linkUrl = data.linkUrl;
              this.updatedItem.modified = Date.now();
              this.updatedItem.id = this.items[index].id;
              this.storageService.updateItem(this.updatedItem).then(item => {
                this.showErrorToast('Data has been updated.!');
                this.loadItems();
              });
              return true;
            }else{
              this.showErrorToast('URL is invalid.! Please Enter Valid URL..');
              return false;
            }
          }
        }, 
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'btn btn-outline-danger btn-fw',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }

  invoke(index) {
    var value = this.items[index].linkUrl;
    window.open(value,'_system', 'location=yes');
  }

  delete(index){
    this.presentAlertDelete(index);
  }


  async presentAlertDelete(index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-alert',
      header: 'Alert',
      message: 'Do you really want to delete this link?',
      buttons: [
        {
          text: 'Yes',
          cssClass:'btn btn-outline-danger btn-fw',
          handler: (data) => {
            var number = this.items[index].id;
            this.storageService.deleteItem(number).then(item => {
              this.loadItems();
            });
              this.showErrorToast('Item has been deleted.!');
              return true;
          }
        },
        {
          text: 'No',
          cssClass: 'btn btn-outline-primary btn-fw',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

}
