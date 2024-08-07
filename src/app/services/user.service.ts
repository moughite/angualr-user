import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private users: User[] = [
    new User(1,'moughite','hanafi',34,['sport','theater']),
    new User(2,'jawad','hanafi',29,['schwimmen','theater']),
    new User(3,'sanae','hanafi',23,['sport','fussball'])
];

usersSubject=new Subject<User[]>();

  constructor() { }

  emitSubject(){

    this.usersSubject.next(this.users.slice());
  }

  addUser(user:User):void{
    user.id=this.users[this.users.length].id+1;
    this.users.push(user);
    this.emitSubject();
  }

  getUserById(id: number): Observable<User> {
    const user = this.users.find(u => u.id === id);
    return of(user as User);
  }
  
}
