import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  message = "Work in progress, be patient..";

  constructor(private navCtr: NavController,public translate: TranslateService) { }

  ngOnInit() {}
  back(){
this.navCtr.navigateBack('landing-page')
  }

}
