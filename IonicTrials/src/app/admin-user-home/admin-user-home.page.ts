import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-home',
  templateUrl: './admin-user-home.page.html',
  styleUrls: ['./admin-user-home.page.scss'],
})
export class AdminUserHomePage implements OnInit {


  ngOnInit() {
  }



  slides = [342, 453, 846, 855, 234, 564, 744, 243]
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };
}

