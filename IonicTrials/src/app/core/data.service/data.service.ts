import { Injectable } from '@angular/core';
import { TodoListPagePage } from '../../../app/todo-list-page/todo-list-page.page';

const ITEMS_KEY = 'my-items';


@Injectable({
  providedIn: 'root'
})

export class DataService {

    // constructor(private storage: Storage) { }

    constructor() { }

    TaskTypeArray = [];

    MyDayArray = [];

    ImportantArray = [];

    PlannedArray = [];

    AssignedArray = [];

    TasksArray = [];
}