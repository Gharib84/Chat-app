import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SingupComponent } from '../../components/singup/singup.component';
import { LoginComponent } from '../../components/login/login.component';
//forms 
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

//fire base modules 
import { AngularFireModule} from '@angular/fire';
import { environment } from '../../../../config'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database'

//services
import { AuthenticationService } from '../../services/authentication.service'
import { UserService } from  '../../services/user.service';
@NgModule({
  declarations: [SingupComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers:[
    AuthenticationService,
    UserService
  ]
})
export class AuthenticationModule { }
