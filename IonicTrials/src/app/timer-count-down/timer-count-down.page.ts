import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';


@Component({
  selector: 'app-timer-count-down',
  templateUrl: './timer-count-down.page.html',
  styleUrls: ['./timer-count-down.page.scss'],
})
export class TimerCountDownPage {
 
//   interval;
//   status = 'ready';
//   @ViewChild('countdown') counter: CountdownComponent;

//   start() {
//     this.interval = setInterval(() => {
//     this.status = 'started';
//     this.counter.begin();
//     },)
//   }

//   finishTest() {
//     console.log("count down", this.counter);
//     setTimeout(() => this.counter.restart());
//     this.status = 'restarted';
//   }

//   resetTimer() {
//     this.counter.restart();
//   }

//   pauseTimer() {
//     clearInterval(this.interval);
//   }
// }

time: number = 0;
  interval;

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

  resetTimer() {
       //  this.counter.restart();
      stop();
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

