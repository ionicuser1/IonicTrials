import { Injectable } from '@angular/core';
import { TodoModel } from '../model/TodoModel';

const ITEMS_KEY = 'my-items';


@Injectable({
  providedIn: 'root'
})

export class DataService {

    // constructor(private storage: Storage) { }

    constructor() { }

    TaskTypeArray = [];

    MyDayArray = [
      { task : 'Meeting with Urban Team' , completed : false, important : false, dueDate : null },
      { task : 'Project meeting with CEO' , completed : false, important : false, dueDate : null },
      { task : 'Follow up of team zilla' , completed : false, important : false, dueDate : null }
    ];

    ImportantArray = [
      { task : 'Duplicate a project for new customer' , completed : false, important : true, dueDate : null },
      { task : 'Level up for Antony' , completed : false, important : true, dueDate : null }
    ];

    PlannedArray = [
      { task : 'Planned for a date' , completed : false, important : false, dueDate : null }
    ];

    AssignedArray = [
    ];

    TasksArray = [
      { task : 'Meeting with Urban Team' , completed : false, important : false, dueDate : null  },
      { task : 'Project meeting with CEO' , completed : false, important : false, dueDate : null  },
      { task : 'Follow up of team zilla' , completed : false, important : false, dueDate : null  },
      { task : 'Duplicate a project for new customer' , completed : false, important : true, dueDate : null  },
      { task : 'Level up for Antony' , completed : false, important : true, dueDate : null  },
      { task : 'Planned for a date' , completed : false, important : false, dueDate : null  }
    ];

    
}