import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { AlertController, ToastController, Platform } from '@ionic/angular';
import { StorageService, Item } from 'src/app/core/storage.service/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-externallinks',
  templateUrl: './externallinks.page.html',
  styleUrls: ['./externallinks.page.scss'],
})
export class ExternallinksPage implements AfterViewInit, OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  
  items: Item[] = [];

  dtTrigger: Subject<any> = new Subject();

  newItem : Item = <Item>{};

  updatedItem : Item = <Item>{};

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  
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
  

  constructor(public alertController: AlertController,private toastCtrl: ToastController,
    public storageService : StorageService,private plt: Platform,public translate: TranslateService) {
      this.plt.ready().then(() => {
        this.loadItems("Null");
      });
  }
  ngAfterViewInit(): void {
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }


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
      this.showErrorToast(this.phForItemAdd,true);
    });

  }
  // READ
  loadItems(check : string){
    this.storageService.getItems().then(items => {
        if(items != null){
          this.items = items;
          if(check !== "FromAddItem"){
            this.dtTrigger.next();
          }
          this.rows = this.items;
          this.filteredData = this.rows;
          this.columnsWithSearch = Object.keys(this.rows[0]);
          this.individualFilter(this.datatableElement);
        }
        
    });
  }

  individualFilter(datatableElement){
    $(document).ready(function() {
      // Setup - add a text input to each footer cell
      // $('#example tfoot th').each( function () {
      //     var title = $(this).text();
      //     $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
      // });

      datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          var that = this;
          $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
        });
      });   
   });
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
              this.showErrorToast(this.phForURLInvalid,false);
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



 async showErrorToast(data: any,isReload: boolean) {

    let toast = await this.toastCtrl.create({
      message: data,
      duration: 2000,
      position: 'top'
    });

    toast.present();

    if(isReload){
      const dismiss = await toast.onDidDismiss();
      console.log('Dismissed toast', dismiss);
      location.reload();
    }
  
    
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


}
