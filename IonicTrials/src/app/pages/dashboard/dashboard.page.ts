import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model';
import { UserService } from 'src/app/core/services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  deleteUser(id: number) {
      this.userService.delete(id).pipe(first()).subscribe(() => { 
          this.loadAllUsers() 
      });
  }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => { 
          this.users = users; 
      });
  }
}