import { Subject } from "rxjs";
import { User } from "../models/user.model";

export class UserService {
    private users:User[]=[
        {
        firstName:"Siméon",
        lastName:'Gango',
        email:'gangosimeon@gmail.com',
        drinkPreference:'Coca',
        hobbies:[
            'coder',
            'la dégustation du café'
        ]
    }
    ];
    userSubject=new Subject<User[]>();

    emitUser(){
        this.userSubject.next(this.users.slice());
    }
    addUser(user:User){
        this.users.push(user);
        this.emitUser();
    }
}