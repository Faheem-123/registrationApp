import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ActivateGuard } from './activate.guard';
import { UserService } from './user.service';
import { AuthInterceptor } from './auth.interceptor';
import { NavbarComponent } from './components copy/navbar/navbar.component';
import { LoginComponent } from './components copy/login/login.component';
import { SignupComponent } from './components copy/signup/signup.component';
import { OrderListComponent } from './components copy/order-list/order-list.component';
import { AddOrderComponent } from './components copy/add-order/add-order.component';
import { EditOrderComponent } from './components copy/edit-order/edit-order.component';
import { LoginService } from './services copy/login.service';
import { HomeComponent } from './components copy/home/home.component';
import { SettingComponent } from './components copy/setting/setting.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    OrderListComponent,
    AddOrderComponent,
    EditOrderComponent,
    SettingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ActivateGuard,UserService,LoginService,[
    {provide:HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi:true}
  ]],
  bootstrap: [AppComponent]
})
export class AppModule { }
