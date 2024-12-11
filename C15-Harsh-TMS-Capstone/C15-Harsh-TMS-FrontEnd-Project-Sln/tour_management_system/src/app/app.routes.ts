import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { FacilityComponent } from './facility/facility.component';
import { GuestComponent } from './guest/guest.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReviewComponent } from './review/review.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: '' , component : LoginComponent},
    {path: 'login' , component : LoginComponent},
    {path: 'navbar' , component : NavbarComponent, canActivate:[authGuard]},
    {path: 'booking' , component : BookingComponent, canActivate:[authGuard]},
    {path: 'hotel' , component : HotelComponent, canActivate:[authGuard]},
    {path: 'guest' , component : GuestComponent, canActivate:[authGuard]},
    {path: 'facility' , component : FacilityComponent, canActivate:[authGuard]},
    {path: 'review' , component : ReviewComponent, canActivate:[authGuard]},
    {path: 'registration' , component : RegistrationComponent, canActivate:[authGuard]},

];
