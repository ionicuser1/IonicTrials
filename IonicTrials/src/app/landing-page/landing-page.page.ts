import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  param = "Work in progress, be patient";
  constructor() { }

  ngOnInit() {
    
    
  }

  backGround()
  {
    Swal.fire({
      title: this.param,
      text: 'Click OK to close this alert',
      customClass:{
        popup:'bg-class'
      }
    });
    
  }

  
}
