import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/user';
import { AngularFireDatabase } from '@angular/fire/database';
import { USERS_CHILD } from '../models/database-constant'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireDB: AngularFireDatabase ) { 

  }
  //add user 
  public addUser(user: User): void {
    this.fireDB.object(`${USERS_CHILD}/${user.uid}`).set(user);
  }
}
