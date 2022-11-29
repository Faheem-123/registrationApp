import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './activate.guard';
import { AddOrderComponent } from './components copy/add-order/add-order.component';
import { EditOrderComponent } from './components copy/edit-order/edit-order.component';
import { HomeComponent } from './components copy/home/home.component';
import { LoginComponent } from './components copy/login/login.component';
import { OrderListComponent } from './components copy/order-list/order-list.component';
import { SettingComponent } from './components copy/setting/setting.component';
import { SignupComponent } from './components copy/signup/signup.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent,canActivate:[ActivateGuard]
  },
  {
    path:'list-order',component:OrderListComponent,canActivate:[ActivateGuard]
  },
  {
    path:'add-order', component : AddOrderComponent,canActivate:[ActivateGuard]
  },
  {
    path:'edit-order/:id', component : EditOrderComponent,canActivate:[ActivateGuard]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'setting',component:SettingComponent,canActivate:[ActivateGuard]
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
