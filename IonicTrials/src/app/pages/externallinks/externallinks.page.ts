import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ToastController, Platform } from '@ionic/angular';
import { StorageService, Item } from 'src/app/core/storage.service/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

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

  phForItemAdd: any;

  rows = [];
  filteredData = [];
  columnsWithSearch : string[] = [];
  
 // public companies = data;
  tableStyle = "bootstrap"
  // maxSize = 4;

  @ViewChild('myTable') table: DatatableComponent;

  constructor(public alertController: AlertController,private toastCtrl: ToastController,
    public storageService : StorageService,private plt: Platform,public translate: TranslateService) {
      
      this.plt.ready().then(() => {
        this.loadItems();
      });
      var par=document.getElementsByName('parameters')[0];
      var index = par.selectedIndex
      console.log(par.options[index].text);
    //  document.getElementById("mySelect").value = 5;
  }

 // maxSize = document.getElementById("mySelect").value;

  // Create
  addItem(topic,sub_topic,link_desc,link_url){

    this.newItem.topic = topic;
    this.newItem.subtopic = sub_topic;
    this.newItem.linkDesc = link_desc;
    this.newItem.linkUrl = link_url;
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();
    this.newItem.count = ( this.items != null ) ? this.items.length + 1 : 1;
    this.storageService.addItem(this.newItem).then(item =>{
      this.newItem = <Item>{};
      this.showErrorToast(this.phForItemAdd);
      this.loadItems();
    });

  }
  // READ
  loadItems(){
    this.storageService.getItems().then(items => {
        if(items != null){
          this.items = items;
          this.rows = this.items;
          this.filteredData = this.rows;
          this.columnsWithSearch = Object.keys(this.rows[0]);
        }
        
    });
  }


  ngOnInit() {
    this.table.offset = 0;
  }

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


    this.phForItemAdd = data.AddItem;
     
   });
  
 }

     // filters results
filterDatatable(event){
  // get the value of the key pressed and make it lowercase
  let filter = event.target.value.toLowerCase();

  // assign filtered matches to the active datatable
  this.rows = this.filteredData.filter(item => {
    // iterate through each row's column data
    for (let i = 0; i < this.columnsWithSearch.length; i++){
      var colValue = item[this.columnsWithSearch[i]] ;

      // if no filter OR colvalue is NOT null AND contains the given filter
      if (!filter || (!!colValue && colValue.toString().toLowerCase().indexOf(filter) !== -1)) {
        // found match, return true to add to result set
        return true;
      }
    }
  });
  // TODO - whenever the filter changes, always go back to the first page
  //this.table.offset = 0;
}

 
}
