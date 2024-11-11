import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './auth/auth.guard';
import { ViewOrderComponent } from './view-order/view-order.component';
import { MakeOrderComponent } from './make-order/make-order.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Default route (when the app starts)
  { path: 'login', component: LoginComponent },
  {
    path: 'user-portal',
    component: UserPortalComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' }  // Require 'user' role for user portal
  },
  {
    path: 'admin-portal',
    component: AdminPortalComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' }  // Require 'admin' role for admin portal
  },
  { path: 'view', component: ViewOrderComponent },
  { path: 'make', component: MakeOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
