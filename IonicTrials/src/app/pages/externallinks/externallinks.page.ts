import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-externallinks',
  templateUrl: './externallinks.page.html',
  styleUrls: ['./externallinks.page.scss'],
})
export class ExternallinksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addLink()
  {
    Swal.fire()
  }
}
