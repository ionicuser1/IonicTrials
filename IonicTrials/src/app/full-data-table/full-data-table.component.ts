import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { AlertController, ToastController, Platform } from '@ionic/angular';
import { StorageService, Item } from '../core/storage.service/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-full-data-table',
  templateUrl: './full-data-table.component.html',
  styleUrls: ['./full-data-table.component.scss'],
})
export class FullDataTableComponent implements AfterViewInit, OnDestroy, OnInit {

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

  deletePopupYesBtn: any;
  deletePopupNoBtn: any;
  deletePopupMessage: any;
  deletePopupHeader: any;

  phForItemUpdate: any;
  phForItemAdd: any;
  phForItemDelete: any;

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
   
  }


  // Create
  addItem(topic : any,sub_topic : any,link_desc : any,link_url : any){

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
    console.log("inside loadItems method");
    this.storageService.getItems().then(tableItems => {
        if(tableItems != null){
          
          console.log("table is not null and size of items ", tableItems.length);

          if(tableItems.length != 0){
            this.items = tableItems;
            if(check !== "FromAddItem"){
              this.dtTrigger.next();
            }
            this.rows = this.items;
            this.filteredData = this.rows;
            this.columnsWithSearch = Object.keys(this.rows[0]);
          }

            console.log("before individualFilter called");
            this.individualFilter(this.datatableElement,tableItems.length);
            console.log("After individualFilter called");
        
        }else{
          console.log("table is null");
        }
      });
  }

  individualFilter(datatableElement,size:any){

    console.log("inside individualFilter called");

    console.log("Size of Table " + size);


    jQuery(document).ready(function($) {

      if(size == 0){
        console.log("Size is Zero " + size);
        $('#example').DataTable({
          "lengthChange": false,
          'ordering': false,
            'searching': false,
            'info': false,
            "paging": false,
        });
      }else{
        console.log("Size is not Zero " + size);
        function cbDropdown(column) {
          return $('<ul>', {
            'class': 'cb-dropdown'
          }).appendTo($('<div>', {
            'class': 'cb-dropdown-wrap'
          }).appendTo(column));
          }
      
        $('#example').DataTable({

                    // "lengthMenu": [[10,20,30,40,50,60,70,80,90,100,-1], [10,20,30,40,50,60,70,80,90,100, "All"]]
                    "lengthMenu": [[size,20,40,60,80,100,-1], [size,20,40,60,80,100, "All"]],
                    "pageLength": size,
                  //   "language": {
                  //     "paginate": {
                  //       "next": '&#8594;', // or '→'
                  //       "previous": '&#8592;', // or '←' 
                  //       "first":'',
                  //       "last":''
                  //     }
                  //   },
                  "columns": [
                    null,
                    null,
                    null,
                    null,
                    { "orderable": false },
                    { "orderable": false },
                    { "orderable": false },
                    { "orderable": false }
                  ],
       
          initComplete: function() {
            
            this.api().columns().every(function() {
              var column = this;
              if (column.index() == 0 
              || column.index() == 4 || column.index() == 5 || column.index() == 6
              || column.index() == 7) return;
      
              var ddmenu = cbDropdown($(column.header()))
                .on('change', ':checkbox', function() {
                  var vals = $(':checked', ddmenu).map(function(index, element) {
                    return $.fn.dataTable.util.escapeRegex($(element).val() as string);
                  }).toArray().join('|');
      
                  column
                    .search(vals.length > 0 ? '^(' + vals + ')$' : '', true, false)
                    .draw();
                    //console.log(vals);
                    if(vals === ""){
                    $(this).parent().parent().parent().removeClass("factive");
                    }else{            
                       $(this).parent().parent().parent().addClass("factive");
                    }
                    //change callback
                });
      
              column.data().unique().sort().each(function(d, j) {
                var // wrapped
                  $label = $('<label>'),
                  $text = $('<span>', {
                    text: d
                  }),
                  $cb = $('<input>', {
                    type: 'checkbox',
                    value: d
                  });
      
                $text.appendTo($label);
                $cb.appendTo($label);
      
                ddmenu.append($('<li>').append($label));
              });
            });
            
        $(".cb-dropdown-wrap").each(function(){
          console.log($(this).parent().width());
          $(this).width($(this).parent().width());
        });
      
        }
      
        });
      }

});
  
}

// // UPDATE
// updateItem(item : Item){
//   item.topic = `UPDATED: ${item.topic}`;
//   item.modified = Date.now();

//   this.storageService.updateItem(item).then(item => {
//     this.showErrorToast('Item Updated',true);
//     this.loadItems("Null");
//   });
// }

// // DELETE
// deleteItem(item: Item){
//   this.storageService.deleteItem(item.id).then(item => {
//     this.showErrorToast('Item is removed.!',true);
//     this.loadItems("Null");
//   });
// }
  
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
              this.updatedItem.count = this.items[index].count;
              this.storageService.updateItem(this.updatedItem).then(item => {
                this.showErrorToast(this.phForItemUpdate,true);
                console.log("Edit Opeartion")
               // this.loadItems("Null");
              });
              return true;
            }else{
              this.showErrorToast(this.phForURLInvalid,true);
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
              this.showErrorToast(this.phForItemDelete,true);
            });
              this.showErrorToast(this.phForItemDelete,true);
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
