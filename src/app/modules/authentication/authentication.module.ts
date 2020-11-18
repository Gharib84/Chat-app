import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SingupComponent } from '../../components/singup/singup.component';


@NgModule({
  declarations: [SingupComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AuthenticationModule { }
