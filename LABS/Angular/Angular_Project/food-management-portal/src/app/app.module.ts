import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { UserPortalComponent } from './user-portal/user-portal.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FoodOrderService } from './service/food-service';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { MakeOrderComponent } from './make-order/make-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    UserPortalComponent,
    AdminPortalComponent,
    ViewOrderComponent,
    MakeOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ], 
  providers : [FoodOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
