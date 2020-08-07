import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  msgTitle: any;
  buttonText: any;

  
  message = this.msgTitle;

  constructor(private navCtr: NavController,public translate: TranslateService) { }

  ngOnInit() {}
  back(){
this.navCtr.navigateBack('landing-page')
  }

  dataValue = this.getStringLocalization();
    getStringLocalization(){
    this.translate.get('ViewPage').subscribe((data:any)=> {
    this.msgTitle = data.msg;
    this.buttonText = data.BackButton;
    
     });
  }

  

}
