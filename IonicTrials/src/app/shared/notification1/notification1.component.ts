import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-notification1',
  templateUrl: './notification1.component.html',
  styleUrls: ['./notification1.component.scss'],
})
export class Notification1Component implements OnInit {

  msgbox : any;

  constructor(private toastr: ToastrService,public translate: TranslateService) { }

  ngOnInit() {}
  showSuccessToast() {
	this. getStringLocalization();
		this.toastr.success(this.msgbox, 'Success', {
		  progressBar: true,
		  closeButton: true
		})
	  }
	
	  showInfoToast() {
		this. getStringLocalization();
		this.toastr.info(this.msgbox, 'Info', {
		  progressBar: true,
		  closeButton: true
		})
	  }
	
	  showWarningToast() {
		this. getStringLocalization();
		this.toastr.warning(this.msgbox, 'Warning', {
		  progressBar: true,
		  closeButton: true
		})
	  }
	
	  showDangerToast() {
		  this. getStringLocalization();
		this.toastr.error(this.msgbox, 'Error', {
		  progressBar: true,
		  closeButton: true
		})
	  }
	
	  showToastPosition (position) {
		switch(position) {
		  case 'bottom-left':
			this.toastr.info(this.msgbox, "Positioning", {
			  progressBar: true,
			  closeButton: true,
			  positionClass: 'toast-bottom-left'
			});
			break;
		  case 'bottom-right':
			this.toastr.info(this.msgbox, "Positioning", {
			  progressBar: true,
			  closeButton: true,
			  positionClass: 'toast-bottom-right'
			});
			break;
		  case 'bottom-center':
			this.toastr.info(this.msgbox, "Positioning", {
			  progressBar: true,
			  closeButton: true,
			  positionClass: 'toast-bottom-center'
			});
			break;
		  case 'top-left':
			this.toastr.info(this.msgbox, "Positioning", {
			  progressBar: true,
			  closeButton: true,
			  positionClass: 'toast-top-left'
			});
			break;
		  case 'top-right':
			this.toastr.info(this.msgbox, "Positioning", {
			  progressBar: true,
			  closeButton: true,
			  positionClass: 'toast-top-right'
			});
			break;
		  case 'top-center':
			this.toastr.info(this.msgbox, "Positioning", {
			  progressBar: true,
			  closeButton: true,
			  positionClass: 'toast-top-center'
			});
			break;case 'bottom-full-width':
			this.toastr.info(this.msgbox, "Positioning", {
			  progressBar: true,
			  closeButton: true,
			  positionClass: 'toast-bottom-full-width'
			});
			break;case 'top-full-width':
			this.toastr.info(this.msgbox, "Positioning", {
			  progressBar: true,
			  closeButton: true,
			  positionClass: 'toast-top-full-width'
			});
			break;
		}
	  }
	



	  getStringLocalization(){
		this.translate.get('NotifyPage').subscribe((data:any)=> {
		this.msgbox = data.msges;
		
		
		 });
}
}
