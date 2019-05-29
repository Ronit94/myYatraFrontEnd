import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren:'./pages/login/login.module#LoginModule'
  },{
    path:'registration',
    loadChildren:'./pages/registration/registration.module#RegistrationModule'
  },{
    path:'forgot-password',
    loadChildren:'./pages/forgot-password/forgot-password.module#ForgotPasswordModule'
  },{
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },{
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
