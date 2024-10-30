
// import { AppRoutingModule } from './app-routing.module';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// The BrowserModule module is required by default for any Angular application.
// It provides services that are essential to launch and run a browser application.

import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';

@NgModule({
  // The declarations array contains a list of application components, directives, and pipes that belong to the module.
  // The components declared in the declarations array are available to the entire module.
declarations: [AppComponent,LoginComponent],
// The imports array contains a list of modules that the application needs.
// The BrowserModule module is required by default for any Angular application.
imports : [BrowserModule,AppRoutingModule, ReactiveFormsModule],
// The providers array contains a list of services that the application needs.
// The services declared in the providers array are available to the entire module.
providers: [],
// The bootstrap array contains a list of components that should be bootstrapped when this module is bootstrapped.
// The components listed in the bootstrap array are the starting point of the application.
bootstrap:[AppComponent]
})
export class AppModule {

}