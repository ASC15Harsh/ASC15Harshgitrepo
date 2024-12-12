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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    UserPortalComponent,
    AdminPortalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  // providers: [FoodService], 
  providers : [FoodOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
