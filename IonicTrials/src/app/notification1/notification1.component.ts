import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification1',
  templateUrl: './notification1.component.html',
  styleUrls: ['./notification1.component.scss'],
})
export class Notification1Component implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {}
  showSuccessToast() {
		this.toastr.success("And these were just the basic demos! Scroll down to check further details on how to customize the output", 'Success', {
		  progressBar: true,
		  closeButton: true
		})
	  }
	
	  showInfoToast() {
		this.toastr.info("And these were just the basic demos! Scroll down to check further details on how to customize the output", 'Info', {
		  progressBar: true,
		  closeButton: true
		})
	  }
	
	  showWarningToast() {
		this.toastr.warning("And these were just the basic demos! Scroll down to check further details on how to customize the output", 'Warning', {
		  progressBar: true,
		  closeButton: true
		})
	  }
	
	  showDangerToast() {
		this.toastr.error("And these were just the basic demos! Scroll down to check further details on how to customize the output", 'Error', {
		  progressBar: true,
		  closeButton: true
		})
	  }
	

}
