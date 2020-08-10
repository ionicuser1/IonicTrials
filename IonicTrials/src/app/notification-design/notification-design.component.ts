import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification-design',
  templateUrl: './notification-design.component.html',
  styleUrls: ['./notification-design.component.scss'],
})
export class NotificationDesignComponent implements OnInit {

  constructor(private _notifications: NotificationsService,private _fb: FormBuilder,public translate: TranslateService) { }

  form: FormGroup;

  typeName: any;
  titleText: any;
  contentText: any;
  animateText: any;
  alertText :any;
  erroeText :any;
  infoText :any;
  warntText :any;
  successText :any;



  types = [this.alertText, 'error', 'info', 'warn', 'success'];
	animationTypes = ['fromRight'];

  ngOnInit() {
		this.form = this._fb.group({
			type: 'success',
			title: 'This is just a title',
			content: 'This is just some content',
			timeOut: 5000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: true,
			animate: 'fromRight'
		});
	}


	create() {

		const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type = temp.type;

		delete temp.title;
		delete temp.content;
		delete temp.type;

		this._notifications.create(title, content, type, temp)
	}

	getStringLocalization(){
		this.translate.get('LandingPage').subscribe((data:any)=> {
		this.typeName = data.typeText;
		this.titleText = data.TitleText;
		this.contentText = data.ContentText;
		this.animateText = data.AnimateText;
		this.alertText = data.AlertText;
		this.erroeText = data.ErrorText;
		this.infoText = data.InfoText;
		this.warntText = data.WarText;
		this.successText = data.SuccText;
		 });
	  }


	 
}


