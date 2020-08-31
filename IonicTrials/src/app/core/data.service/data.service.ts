import { Injectable } from '@angular/core';
const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})

export class DataService {

    constructor() { }

    TaskTypeArray = [];

    MyDayArray = [];

    ImportantArray = [];

    PlannedArray = [];

    AssignedArray = [];

    TasksArray = [];
}