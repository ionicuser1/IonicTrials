import { NavController } from '@ionic/angular';
import { DataService } from '../core/data.service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.page.html',
  styleUrls: ['./todo-list-page.page.scss'],
})
export class TodoListPagePage implements OnInit {
  public static MY_DAY = 1;
  public static IMPORTANT = 2;
  public static PLANNED = 3;
  public static ASSIGNED = 4;
  public static TASKS = 5;
  public static NO_OF_LIST = 5;
  dataService : DataService;
  title : any;
  selected : any;
  form;
  todoArray;
  todoTypesArray;
  impText;
  currentDate;

  ngOnInit() {}

  constructor(fb: FormBuilder, public navCtrl: NavController, private service: DataService, private menu: MenuController, private alertCtrl: AlertController) {
    this.form = fb.group({
      todoitem : ['', Validators.required]
    });
    this.navCtrl = navCtrl;
    this.dataService = service;
    this.title = "My Day Todo's";
    this.todoArray = this.dataService.MyDayArray;
    this.todoTypesArray = this.dataService.TaskTypeArray;
    this.impText = "Mark as Important";
    this.selected = TodoListPagePage.MY_DAY;
  }

  openMyDay() {
    this.selected = TodoListPagePage.MY_DAY;
    this.menu.toggle();
    this.todoArray = this.dataService.MyDayArray;
    this.title = "My Day Todo's";
  }

  openImportant() {
    this.selected = TodoListPagePage.IMPORTANT;
    this.menu.toggle();
    this.todoArray = this.dataService.ImportantArray;
    this.title = "Important Todo's";
  }

  openMyPlanned() {
    this.selected = TodoListPagePage.PLANNED;
    this.menu.toggle();
    this.todoArray = this.dataService.PlannedArray;
    this.title = "Planned Todo's";
  }

  openAssigned() {
    this.selected = TodoListPagePage.ASSIGNED;
    this.menu.toggle();
    this.todoArray = this.dataService.AssignedArray;
    this.title = "Assigned to me Todo's";
  }

  openTasks() {
    this.selected = TodoListPagePage.TASKS;
    this.menu.toggle();
    this.todoArray = this.dataService.TasksArray;
    this.title = "Tasks Todo's";
  }

  openCustomList(item) {
    for(let i=0; i<=this.dataService.TaskTypeArray.length; i++) {
      if(item === this.dataService.TaskTypeArray[i]) {
        this.menu.toggle();
        this.selected = this.dataService.TaskTypeArray[i].id;
        this.title = this.dataService.TaskTypeArray[i].name;
        this.todoArray = this.dataService.TaskTypeArray[i].listData;
      }
    } 
  }

  isSelected(tab) : boolean{
    if(tab == this.selected){
      return true;
    }else{
      return false;
    }
  }

  addTodo() {
    let newTodoList; 
    if(this.selected != TodoListPagePage.IMPORTANT){
      newTodoList = { task: '' , completed: false , important: false, dueDate : null };
    }else{
      newTodoList = { task: '' , completed: false , important: true, dueDate : null };
    }

    newTodoList.task= this.form.value.todoitem;

    this.todoArray.push(newTodoList);
    if(this.selected != TodoListPagePage.TASKS){
      this.dataService.TasksArray.push(newTodoList);
    }
    this.form.reset();
  }

  removeTodoItem(item) {
   for(let i=0; i<=this.todoArray.length; i++) {
     if(item === this.todoArray[i]) {
       this.todoArray.splice(i, 1);
     }
   } 
  }

  changeTodoStatus(event,index) {
    if(event.target.checked) {
    this.todoArray[index]['completed'] = true; 
    } else {
      this.todoArray[index]['completed'] = false;
    }
  }

  changeStatus(item, isCompleted) {
    for(let i=0; i<=this.todoArray.length; i++) {
      if(item === this.todoArray[i]) {
        if(isCompleted){
          this.todoArray[i]['completed'] = true;
        }else{
          this.todoArray[i]['completed'] = false;
        }
      }
    }
  }

  impTodoItem(item) {
    for(let i=0; i<=this.todoArray.length; i++) {
      if(item === this.todoArray[i]) {
        if(this.todoArray[i]['important'] == false){
          this.impText = "Mark as Not Important";
          this.todoArray[i]['important'] = true;
          this.dataService.ImportantArray.push(this.todoArray[i]);
        }else{
          this.impText = "Mark as Important";
          this.todoArray[i]['important'] = false;
          this.dataService.ImportantArray.splice(i, 1);
        }
      }
    } 
   }

   setDueDate(item, date) {
    for(let i=0; i<=this.todoArray.length; i++) {
      if(item === this.todoArray[i]) {
        if(date === 'today'){
          this.currentDate = new Date();
          this.todoArray[i]['dueDate'] = this.currentDate;
        }else if(date === 'tomorrow'){
          this.currentDate = new Date();
          this.currentDate.setDate(this.currentDate.getDate() + 1);
          this.todoArray[i]['dueDate'] = this.currentDate;
        }else{
          var newdate = date.split("/").reverse().join("/");
          var dueDate = new  Date (newdate);
          this.todoArray[i]['dueDate'] = dueDate;
        }
      }
    }
  }

  async selectCalendar(item) {
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'inputDate',
          type: 'date',
          placeholder: 'Select Date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Select',
          handler: data => {
            this.setDueDate(item, data.inputDate)
          }
        }
      ]
    });
    (await alert).present();

    // document.getElementById('myCalendar').click();
    // let element: HTMLElement = document.querySelector('input[type="date"]') as HTMLElement;
    // element.click();
  }

   async createNewList() {
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'listName',
          placeholder: 'Enter List Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Create',
          handler: data => {
            let newTodoType;
            TodoListPagePage.NO_OF_LIST++;
            newTodoType = { id: TodoListPagePage.NO_OF_LIST, name: data.listName, listData: []}
            this.dataService.TaskTypeArray.push(newTodoType);
          }
        }
      ]
    });
    (await alert).present();
  }
}