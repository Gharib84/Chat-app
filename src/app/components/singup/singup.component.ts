import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }
  //login
  getLogin(): any {
    return this.router.navigate(['/login']);
  }
}
