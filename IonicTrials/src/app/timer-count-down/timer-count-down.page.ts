import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';


@Component({
  selector: 'app-timer-count-down',
  templateUrl: './timer-count-down.page.html',
  styleUrls: ['./timer-count-down.page.scss'],
})
export class TimerCountDownPage {
 

  status = 'ready';
  @ViewChild('countdown') counter: CountdownComponent;

  start() {
    this.status = 'started';
    this.counter.begin();
  }

  finishTest() {
    console.log("count down", this.counter);
    setTimeout(() => this.counter.restart());
    this.status = 'restarted';
  }

  resetTimer() {
    this.counter.restart();
  }
}

