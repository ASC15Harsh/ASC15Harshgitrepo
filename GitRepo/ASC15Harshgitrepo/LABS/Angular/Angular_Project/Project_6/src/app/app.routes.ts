import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
  { path : '', component: LoginComponent},
  { path : 'navbar', component: NavbarComponent},
  { path : 'home', component: HomeComponent,canActivate: [AuthGuard]},
  { path : 'application', component: ApplicationComponent,canActivate: [AuthGuard] },
  { path : 'view', component: ApplicationComponent,canActivate: [AuthGuard] },
  { path : 'add', component: ApplicationComponent ,canActivate: [AuthGuard]},
  { path : 'update', component: ApplicationComponent ,canActivate: [AuthGuard]},
  { path : 'delete', component: ApplicationComponent ,canActivate: [AuthGuard]},
  { path : 'registration', component: RegistrationComponent ,canActivate: [AuthGuard]},
  
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
