// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// AppModule is the root module of the application, and it is the module that Angular uses to bootstrap the application.
// The @NgModule decorator is used to define the metadata for the AppModule class.
// The declarations array is used to declare the components, directives, and pipes that belong to the module.
// The imports array is used to import other modules that are needed by the module.
// The providers array is used to provide services to the module.
// The bootstrap array is used to define the root component of the application.

// Modules vs Stand-alone Components
// In Angular, everything is a component, and components are organized into modules.
// A module is a container for a group of related components, directives, and pipes.
// A module is defined using the @NgModule decorator.
// A component is a class that is used to define the behavior of a view.
// A component is defined using the @Component decorator.
// A module can contain one or more components.
// A component can be used in multiple modules.
// A module can be used in multiple modules.
// A component can be used as a stand-alone component or as part of a module.

import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
@NgModule ({
    declarations: [AppComponent],
    imports: [BrowserModule,AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
}
)
export class AppModule{
}