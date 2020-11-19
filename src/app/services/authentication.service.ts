import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth) { 

  }
  //sign up
  public signUp(email: string, password: string): Promise<any>{
    return  this.angularFireAuth.createUserWithEmailAndPassword(email, password)
  }

}
