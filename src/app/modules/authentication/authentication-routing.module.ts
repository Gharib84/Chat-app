import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SingupComponent } from 'src/app/components/singup/singup.component';

const routes: Routes = [
  {
    path: "register", component: SingupComponent, pathMatch: "full"
  },
  {
    path: 'login', component: LoginComponent, pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
