import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NgForm,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  user: User = new User();
  fg: FormGroup;

  constructor(private router: Router,private auth: AuthenticationService, 
              private userSR: UserService,
              private fb: FormBuilder) {
          
   }

  ngOnInit(): void {
    this.fg = this.fb.group({
      "name": this.fb.control("", [Validators.required]),
      "email": this.fb.control("", [Validators.required]),
      "password": this.fb.control("", [Validators.required]),
      "mobile": this.fb.control("", [Validators.required])
    })
  }
  //login
  getLogin(): any {
    return this.router.navigate(['/login']);
  }

  //form 
  save(): any{
    this.user = Object.assign(this.user, this.fg.value);
    console.log(this.user);
  }
 
}
