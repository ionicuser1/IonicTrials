import { Injectable } from '@angular/core';
import { LoginModel } from '../model/LoginModel';

const ITEMS_KEY = 'my-items';


@Injectable({
  providedIn: 'root'
})

export class DataService {
    loginModel: LoginModel;
    loggedInUser : String;

    // constructor(private storage: Storage) { }

    constructor() { }

    private users : LoginModel[] = [
        {
            username:"admin",
            password:"admin"
        },
        {
            username:"user",
            password:"user"
        }
    ];
    
    getAllUsers()
    {
        return [...this.users];
    }
    
    getUser(userName : string)
    {
        return {
          ...this.users.find(users => {
            return users.username === userName;
        })
       };
    }

    validateUser(userName : string, password : string) : boolean
    {
        if(this.getUser(userName).username != null){
        return this.getUser(userName).password == password;
        }
    }

    getLoggedInUser()
    {
        return this.loggedInUser;
    }

}
