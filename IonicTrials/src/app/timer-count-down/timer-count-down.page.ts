import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-timer-count-down',
  templateUrl: './timer-count-down.page.html',
  styleUrls: ['./timer-count-down.page.scss'],
})
export class TimerCountDownPage {
 
time: number = 0;
  interval;

  constructor(){
 if (this.time === -1){
  window.alert("Timer Has been finished")
 }
  }
  startTimer() {
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time--;
      } else {
        this.time--;
      }
    }, 1000);
   
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  
  transform(value: number): string {
    var sec_num = value; 

  var days = Math.floor(sec_num / (3600 * 24));
  var hours = Math.floor((sec_num - (days * (3600 * 24))) / 3600);
  var minutes = Math.floor((sec_num - (days * (3600 * 24)) - (hours * 3600)) / 60);
  var seconds = sec_num - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60);

  if (hours < 10) {hours = 0+hours;}
  if (minutes < 10) {minutes = 0+minutes;}
  if (seconds < 10) {seconds = 0+seconds;}
  return hours+':'+minutes+':'+seconds;
}
}

