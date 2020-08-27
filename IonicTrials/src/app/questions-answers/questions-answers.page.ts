import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-questions-answers',
  templateUrl: './questions-answers.page.html',
  styleUrls: ['./questions-answers.page.scss'],
})
export class QuestionsAnswersPage implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: '/answer-options/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/answer-options/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/answer-options/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/answer-options/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/answer-options/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/answer-options/Spam',
      icon: 'warning'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('answer-options/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
