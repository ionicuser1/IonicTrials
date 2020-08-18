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
  
  //   $(document).ready(function() {
  //     $('#example').DataTable( {
  //         "lengthMenu": [[10,20,30,40,50,60,70,80,90,100,-1], [10,20,30,40,50,60,70,80,90,100, "All"]],
  //         "pageLength": 10
  //     } );
  // } );

    // Header searching
    
  //   $(document).ready(function(){
  //   // Setup - add a text input to each footer cell
  //   $('#example thead tr').clone(true).appendTo( '#example thead' );
  //   $('#example thead tr:eq(1) th').each( function (i) {
  //       var title = $(this).text();
  //       $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
 
  //       $( 'input', this ).on( 'keyup change', function () {
  //           if ( table.column(i).search() !== this['value'] ) {
  //               table
  //                   .column(i)
  //                   .search( this['value'] )
  //                   .draw();
  //           }
  //       });
  //   });
 
  //   var table = $('#example').DataTable( {
  //        orderCellsTop: true
  //   });
    
  //  });


 // Footer List with options

//   $(document).ready(function() {
//     $('#example').DataTable( {
//         initComplete: function () {
//             this.api().columns().every( function () {
//                 var column = this;
//                 var select = $('<select><option value=""></option></select>')
//                     .appendTo( $(column.footer()).empty() )
//                     .on( 'change', function () {
//                         var val = $.fn.dataTable.util.escapeRegex($(this).val() as string);
//                         column
//                             .search( val ? '^'+val+'$' : '', true, false )
//                             .draw();
//                     } );
 
//                 column.data().unique().sort().each( function ( d, j ) {
//                     select.append( '<option value="'+d+'">'+d+'</option>' )
//                 } );
//             } );
//         }
//     } );
// } );

// checkbox in header 

// $(document).ready(function() {
//   function cbDropdown(column) {
//     return $('<ul>', {
//       'class': 'cb-dropdown'
//     }).appendTo($('<div>', {
//       'class': 'cb-dropdown-wrap'
//     }).appendTo(column));
//   }

//   $('#example').DataTable({
//     initComplete: function() {
//       this.api().columns().every(function() {
//         var column = this;
//         var ddmenu = cbDropdown($(column.header()))
//           .on('change', ':checkbox', function() {
//             var active;
//             var vals = $(':checked', ddmenu).map(function(index, element) {
//               active = true;
//               return $.fn.dataTable.util.escapeRegex($(element).val() as string);
//             }).toArray().join('|');

//             column
//               .search(vals.length > 0 ? '^(' + vals + ')$' : '', true, false)
//               .draw();

//             // Highlight the current item if selected.
//             if (this.checked) {
//               $(this).closest('li').addClass('active');
//             } else {
//               $(this).closest('li').removeClass('active');
//             }

//             // Highlight the current filter if selected.
//             var active2 = ddmenu.parent().is('.active');
//             if (active && !active2) {
//               ddmenu.parent().addClass('active');
//             } else if (!active && active2) {
//               ddmenu.parent().removeClass('active');
//             }
//           });

//         column.data().unique().sort().each(function(d, j) {
//           var // wrapped
//             $label = $('<label>'),
//             $text = $('<span>', {
//               text: d
//             }),
//             $cb = $('<input>', {
//               type: 'checkbox',
//               value: d
//             });

//           $text.appendTo($label);
//           $cb.appendTo($label);

//           ddmenu.append($('<li>').append($label));
//         });
//       });
//             $(".cb-dropdown-wrap").each(function(){
//             console.log($(this).parent().width());
//             $(this).width($(this).parent().width());
//             });
//     }
//   });
// });

// Footer select 

// $(document).ready(function() {
//   $('#example').DataTable({
//     initComplete: function() {
//       this.api().columns().every(function() {
//         var column = this;
//         //added class "mymsel"
//         var select = $('<select class="mymsel" multiple="multiple"><option value=""></option></select>')
//           .appendTo($(column.footer()).empty())
//           .on('change', function() {
//             var vals = $('option:selected', this).map(function(index, element) {
//               return $.fn.dataTable.util.escapeRegex($(element).val() as string);
//             }).toArray().join('|');

//             column
//               .search(vals.length > 0 ? '^(' + vals + ')$' : '', true, false)
//               .draw();
//           });

//         column.data().unique().sort().each(function(d, j) {
//           select.append('<option value="' + d + '">' + d + '</option>')
//         });
//       });
//       //select2 init for .mymsel class
//       $(".mymsel").select2();
//     }
//   });
// });

// Multiselect header
    // This code has been beautified via http://jsbeautifier.org/ with 2 spaces indentation.

jQuery(document).ready(function($) {
  function cbDropdown(column) {
    return $('<ul>', {
      'class': 'cb-dropdown'
    }).appendTo($('<div>', {
      'class': 'cb-dropdown-wrap'
    }).appendTo(column));
  }

  $('#example').DataTable({
    "lengthMenu": [[10,20,30,40,50,60,70,80,90,100,-1], [10,20,30,40,50,60,70,80,90,100, "All"]],
    "pageLength": 10,
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
    { "orderable": false }
  ],
 
    initComplete: function() {
      
      this.api().columns().every(function() {
        var column = this;
        if (column.index() == 0 || column.index() == 4) return;

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
