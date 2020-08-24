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
    // let myDay = this.dataService.MyDayArray;
    // let imp = this.dataService.ImportantArray;
    // let plan = this.dataService.PlannedArray;
    // let assign = this.dataService.AssignedArray;
    // let tasksType = this.dataService.TaskTypeArray;
    // for(let i=0; i<myDay.length; i++) {
    //   let element = { task: myDay[i].task , completed: myDay[i].completed , important: myDay[i].important, dueDate : myDay[i].dueDate, type : myDay[i].type }
    //   this.todoArray.push(element);
    // }
    // for(let i=0; i<imp.length; i++) {
    //   let element = { task: imp[i].task , completed: imp[i].completed , important: imp[i].important, dueDate : imp[i].dueDate, type : imp[i].type }
    //   this.todoArray.push(element);
    // }
    // for(let i=0; i<plan.length; i++) {
    //   let element = { task: plan[i].task , completed: plan[i].completed , important: plan[i].important, dueDate : plan[i].dueDate, type : plan[i].type }
    //   this.todoArray.push(element);
    // }
    // for(let i=0; i<assign.length; i++) {
    //   let element = { task: assign[i].task , completed: assign[i].completed , important: assign[i].important, dueDate : assign[i].dueDate, type : assign[i].type }
    //   this.todoArray.push(element);
    // }
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
    if(this.form.value.todoitem.trim() != null && !this.form.value.todoitem.trim().empty && this.form.value.todoitem.trim() != ""){
      let newTodoList; 
    if(this.selected != TodoListPagePage.IMPORTANT){
      newTodoList = { task: '' , completed: false , important: false, dueDate : null, type : this.selected };
    }else{
      newTodoList = { task: '' , completed: false , important: true, dueDate : null, type : this.selected };
    }

    newTodoList.task= this.form.value.todoitem;

    this.todoArray.push(newTodoList);
    if(this.selected != TodoListPagePage.TASKS){
      this.dataService.TasksArray.push(newTodoList);
    }
    this.form.reset();
    }else{
      this.showAlert("Please Enter Valid Task");
    }
  }

  removeTodoItem(item) {
    let listData;
    for(let i=0; i<=this.todoArray.length; i++) {
      if(item === this.todoArray[i]) {
        if(this.selected == TodoListPagePage.TASKS)
        listData = this.getSameTypeList(item['type']);
        this.todoArray.splice(i, 1);
        // if(this.selected == TodoListPagePage.TASKS && (this.todoArray[i])['type'] != TodoListPagePage.TASKS){
        //   listData = this.getSameTypeList(this.todoArray[i])['type'];
        // }
      }
    } 

    if(this.selected == TodoListPagePage.TASKS){
      if(listData != null && !listData.empty){
        for(let i=0; i<=listData.length; i++) {
          if(item === listData[i]) {
            listData.splice(i, 1);
          }
        } 
      }
    }else{
      let taskData = this.dataService.TasksArray;
      for(let index=0; index<taskData.length; index++) {
        if(item === taskData[index]) {
          this.dataService.TasksArray.splice(index, 1)
        }
      }
    }
  }

  changeTodoStatus(event,index, item) {
    if(event.target.checked) {
      this.todoArray[index]['completed'] = true; 
    } else {
      this.todoArray[index]['completed'] = false;
    }

    // if(this.selected == TodoListPagePage.TASKS && (this.todoArray[index])['type'] != TodoListPagePage.TASKS){
    //   listData = this.getSameTypeList(this.todoArray[index])['type'];

    //   for(let i=0; i<=listData.length; i++) {
    //     if(item === listData[i]) {
    //       if(event.target.checked) {
    //         listData[i]['completed'] = true; 
    //       } else {
    //         listData[i]['completed'] = false;
    //       }
    //     }
    //   }
    // }
  }

  changeStatus(item, isCompleted) {
    for(let i=0; i<=this.todoArray.length; i++) {
      if(item === this.todoArray[i]) {
        // if(this.selected == TodoListPagePage.TASKS && (this.todoArray[i])['type'] != TodoListPagePage.TASKS){
        //   listData = this.getSameTypeList(this.todoArray[i])['type'];
        // }
        if(isCompleted){
          this.todoArray[i]['completed'] = true;
        } else{
          this.todoArray[i]['completed'] = false;
        }
      }
    }

    // for(let i=0; i<=listData.length; i++) {
    //   if(item === listData[i]) {
    //     if(isCompleted){
    //       listData[i]['completed'] = true;
    //     }else{
    //       listData[i]['completed'] = false;
    //     }
    //   }
    // }
  }

  impTodoItem(item) {
    for(let i=0; i<=this.todoArray.length; i++) {
      if(item === this.todoArray[i]) {
        // if(this.selected == TodoListPagePage.TASKS && (this.todoArray[i])['type'] != TodoListPagePage.TASKS){
        //   listData = this.getSameTypeList(this.todoArray[i])['type'];
        // }
        if(this.todoArray[i]['important'] == false){
          this.impText = "Mark as Not Important";
          this.todoArray[i]['important'] = true;
          if(this.selected != TodoListPagePage.IMPORTANT){
            this.dataService.ImportantArray.push(this.todoArray[i]);
          }
        } else{
          this.impText = "Mark as Important";
          this.todoArray[i]['important'] = false;
          
          if(this.selected == TodoListPagePage.IMPORTANT){
            // this.dataService.ImportantArray.splice(i, 1);
            this.todoArray.splice(i, 1);
          }else{
            let impData = this.dataService.ImportantArray;
            for(let index=0; i<impData.length; index++) {
              if(this.todoArray[i] === impData[index]) {
                this.dataService.ImportantArray.splice(index, 1)
              }
            }
          }
          // if(this.todoArray[i]['type'] == TodoListPagePage.IMPORTANT)

          // else{
          //   let impData = this.dataService.ImportantArray;
          //   for(let index=0; i<=impData.length; index++) {
          //     if(this.todoArray[i] === impData[index]) {
          //       this.dataService.ImportantArray.splice(index, 1)
          //     }
          //   }
          // }
        }
      }
    } 

  // if(listData != null && !listData.empty){
  //   for(let i=0; i<=listData.length; i++) {
  //     if(item === listData[i]) {
  //       if(listData[i]['important'] == false){
  //         listData[i]['important'] = true;
  //       } else{
  //         listData[i]['important'] = false;
  //       }
  //     }
  //   }
  // }
  }

  setDueDate(item, date) {
    for(let i=0; i<=this.todoArray.length; i++) {
      if(item === this.todoArray[i]) {
        // if(this.selected == TodoListPagePage.TASKS && (this.todoArray[i])['type'] != TodoListPagePage.TASKS){
        //   listData = this.getSameTypeList(this.todoArray[i])['type'];
        // }
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

    // for(let i=0; i<=listData.length; i++) {
    //   if(item === listData[i]) {
    //     if(date === 'today'){
    //       this.currentDate = new Date();
    //       listData[i]['dueDate'] = this.currentDate;
    //     }else if(date === 'tomorrow'){
    //       this.currentDate = new Date();
    //       this.currentDate.setDate(this.currentDate.getDate() + 1);
    //       listData[i]['dueDate'] = this.currentDate;
    //     }else{
    //       var newdate = date.split("/").reverse().join("/");
    //       var dueDate = new  Date (newdate);
    //       listData[i]['dueDate'] = dueDate;
    //     }
    //   }
    // }
  }

  async selectCalendar(item) {
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'inputDate',
          type: 'date',
          placeholder: 'Select Date',
          min: new Date().toISOString().split('T')[0]
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
            if(data.listName.trim() != null && !data.listName.trim().empty && data.listName.trim() != ""){
            let newTodoType;
            TodoListPagePage.NO_OF_LIST++;
            newTodoType = { id: TodoListPagePage.NO_OF_LIST, name: data.listName, listData: []}
            this.dataService.TaskTypeArray.push(newTodoType);
            }else{
              this.showAlert("Please Enter Valid List Name");
            }
          }
        }
      ]
    });
    (await alert).present();
  }

  getSameTypeList(type) {
    if(type ==1){
      return this.dataService.MyDayArray;
    }else if(type ==2){
      return this.dataService.ImportantArray;
    }else if(type ==3){
      return this.dataService.PlannedArray;
    }else if(type ==4){
      return this.dataService.AssignedArray;
    }else if(type ==5){
      return this.dataService.TasksArray;
    }
   }

   async showAlert(msg){
    let alert = this.alertCtrl.create({
      message: msg,
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          handler: data => {
            console.log('ok clicked');
          }
        }
      ]
    });
    (await alert).present();
   }
}