
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// The RouterModule.forRoot() method is used to configure the router at the application's root level.
// Why RouterModule?
// The RouterModule is a separate Angular module that provides the necessary service providers and for routing.
// The RouterModule is imported from the @angular/router package.
// The <router-outlet> directive is used to render the component based on the current route.

const routes : Routes = [
  // Route 1 : Login Component
  { path : '', component : LoginComponent },
  // { path : 'login', component : LoginComponent },
];
// Routes is an array of route configurations. Each route configuration maps a URL path to a component.
// The routes array is imported from the @angular/router package.
// The routes array is empty because the application does not have any routes defined yet.
// The routes array will be updated with route configurations as the application is developed.
// The route configuration is an object that contains the following properties:
// path: The URL path that the route maps to.
// component: The component that is rendered when the route is activated.
// pathMatch: The matching strategy for the route.
// redirectTo: The URL path to redirect to.

// Route 1:https://angular.dev/overview
// Route 2:https://angular.dev/installation
// Route 3:https://angular.dev/tutorials/learn-angular
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}