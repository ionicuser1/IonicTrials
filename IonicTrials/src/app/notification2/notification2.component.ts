import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-notification2',
  templateUrl: './notification2.component.html',
  styleUrls: ['./notification2.component.scss'],
})
export class Notification2Component 
{

  private hideAfterTime: number = 2000;

  constructor( private notificationService: NotificationService) {}

  public show(): void {
    const notification = this.notificationService.show({
          content: 'Your data has been saved. Time for tea!',
          animation: { type: 'slide', duration: 400 },
          position: { horizontal: 'right', vertical: 'top' },
          type: { style: 'success', icon: true },
          closable: true
      });

    setTimeout(() => notification.hide(), this.hideAfterTime);
  }
}
