import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, Platform } from '@ionic/angular';
import { StorageService, Item } from 'src/app/core/storage.service/storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-externallinks',
  templateUrl: './externallinks.page.html',
  styleUrls: ['./externallinks.page.scss'],
})
export class ExternallinksPage implements OnInit {

  items: Item[] = [];

  newItem : Item = <Item>{};

  updatedItem : Item = <Item>{};

  phForTopic: any;
  phForSubTopic: any;
  phForLinkDesc: any;
  phForLinkURL: any;

  alertSaveBtn: any;
  alertCancelBtn: any;
  phForURLInvalid: any;
  phForURLRequired: any;

  deletePopupYesBtn: any;
  deletePopupNoBtn: any;
  deletePopupMessage: any;
  deletePopupHeader: any;

  phForItemUpdate: any;
  phForItemAdd: any;
  phForItemDelete: any;


  constructor(public alertController: AlertController,private toastCtrl: ToastController,
    public storageService : StorageService,private plt: Platform,public translate: TranslateService) {
      
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
      this.showErrorToast(this.phForItemAdd);
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

    this.getExternalLinkLocalization();

    const alert = await this.alertController.create({
      cssClass: 'my-custom-alert',
      inputs: [
        {
          type: 'text',
          name: 'topic',
          placeholder: this.phForTopic
          
        },
        {
          type: 'text',
          name: 'sub_topic',
          placeholder: this.phForSubTopic
        },
        {
          type: 'text',
          name: 'link_desc',
          placeholder: this.phForLinkDesc
        },{
          type: 'url',
          name: 'link_url',
          placeholder: this.phForLinkURL
        },
      ],
      buttons: [
        {
          text: this.alertSaveBtn,
          cssClass:'btn btn-outline-primary btn-fw',
          handler: (data) => {
            let validateUrl = this.validateUrl(data.link_url);
            if(validateUrl.isValid){
              this.addItem(data.topic,data.sub_topic,data.link_desc,data.link_url);
              return true;
            }else {
              this.showErrorToast(this.phForURLInvalid);
              return false;
            }
          }
        }, 
        {
          text: this.alertCancelBtn,
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
    this.getExternalLinkLocalization();
    var regexUrl = new RegExp("(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?");
    if(regexUrl.test(data) ){
      return {
        isValid: true,
        message: ''
      };
    } else {
       return {
          isValid: false,
          message: this.phForURLRequired
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
  this.getExternalLinkLocalization();
    const alert = await this.alertController.create({
      cssClass: 'my-custom-alert',
      inputs: [
        {
          type: 'text',
          name: 'topic',
          placeholder: this.phForTopic,
          value: this.items[index].topic
        },
        {
          type: 'text',
          name: 'subTopic',
          placeholder: this.phForSubTopic,
          value: this.items[index].subtopic
        },
        {
          type: 'text',
          name: 'linkDescription',
          placeholder: this.phForLinkDesc,
          value: this.items[index].linkDesc
        },{
          type: 'url',
          name: 'linkUrl',
          placeholder: this.phForLinkURL,
          value: this.items[index].linkUrl
        },
      ],
      buttons: [
        {
          text: this.alertSaveBtn,
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
                this.showErrorToast(this.phForItemUpdate);
                this.loadItems();
              });
              return true;
            }else{
              this.showErrorToast(this.phForURLInvalid);
              return false;
            }
          }
        }, 
        {
          text: this.alertCancelBtn,
          role: 'cancel',
          cssClass:'btn btn-outline-danger btn-fw',
          handler: () => {
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
    this.getExternalLinkLocalization();
    const alert = await this.alertController.create({
      cssClass: 'my-custom-alert',
      header: this.deletePopupHeader,
      message: this.deletePopupMessage,
      buttons: [
        {
          text: this.deletePopupYesBtn,
          cssClass:'btn btn-outline-danger btn-fw',
          handler: (data) => {
            var number = this.items[index].id;
            this.storageService.deleteItem(number).then(item => {
              this.loadItems();
            });
              this.showErrorToast(this.phForItemDelete);
              return true;
          }
        },
        {
          text: this.deletePopupNoBtn,
          cssClass: 'btn btn-outline-primary btn-fw',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }


  getExternalLinkLocalization(){
    this.translate.get('ExternalLinks').subscribe((data:any)=> {
    this.phForTopic = data.PhTopic;
    this.phForSubTopic = data.PhSubtopic;
    this.phForLinkDesc = data.PhLinkDescription;
    this.phForLinkURL = data.PhLinkURL;

    this.alertSaveBtn = data.BtnSave;
    this.alertCancelBtn = data.BtnCancel;
    this.phForURLInvalid = data.InvalidURL;
    this.phForURLRequired = data.URLRequired;

    this.deletePopupYesBtn = data.BtnYes;
    this.deletePopupNoBtn = data.BtnNo;
    this.deletePopupMessage = data.DeletePopupMessage;
    this.deletePopupHeader = data.DeletePopupHeader;

    this.phForItemUpdate = data.UpdateItem;
    this.phForItemAdd = data.AddItem;
    this.phForItemDelete = data.DeleteItem;
     
   });
  
 }

}
