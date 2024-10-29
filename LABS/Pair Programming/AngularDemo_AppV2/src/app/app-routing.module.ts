// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


const routes : Routes = [];
// Route 1:https://angular.dev/overview
// Route 2:https://angular.dev/installation
// Route 3:https://angular.dev/tutorials/learn-angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// The RouterModule.forRoot() method is used to configure the router at the application's root level.
// Why RouterModule?
// The RouterModule is a separate Angular module that provides the necessary service providers and for routing.
// The RouterModule is imported from the @angular/router package.
// The <router-outlet> directive is used to render the component based on the current route.


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}