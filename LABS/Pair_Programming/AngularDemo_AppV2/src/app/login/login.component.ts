import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;
    // The constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialization of fields in the class and its subclasses.
    constructor(private formBuilder: FormBuilder,
        private router: Router) {
    }
    // ngOnInit is a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. Define an ngOnInit() method to handle any additional initialization tasks.

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['teddy'],
            password: ['']
        });
    }
}    