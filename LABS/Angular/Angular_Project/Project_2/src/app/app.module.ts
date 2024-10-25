

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component'; // Adjust path as necessary

@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent // Declare the RegistrationComponent here
    ],
    imports: [
        BrowserModule,
        FormsModule // Import FormsModule if using template-driven forms
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
