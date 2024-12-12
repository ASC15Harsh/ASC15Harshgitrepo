import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-registration',
    standalone: true,
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    imports: [FormsModule,NavbarComponent,CommonModule]
})
export class RegistrationComponent {
    name : string = '';
    //It is not typesafe because of Implicit typecasting.
    password = '';
    address = '';
    beverage: string[] = [];
    gender = '';
    meal = '';
    payment = '';
    dob = '';
    peopleCount = 1;
    spicyMeter = 1;
    sugarLevel = 1;
    registrationData: any[] = [];
    //name =10;
    ngOnInit() {
        this.loadRegistrationData();
      //  this.name=10;
    }
      chatgpt() {
    const videoContainer = document.getElementById('videoContainer');
    if (videoContainer) {
        videoContainer.innerHTML = '<iframe width="656" height="369" src="https://www.youtube.com/embed/DQacCB9tDaw" title="Introducing GPT-4o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    }
  }

  copilot() {
    const videoContainer = document.getElementById('videoContainer');
    if (videoContainer) {
        videoContainer.innerHTML = '<iframe width="656" height="369" src="https://www.youtube.com/embed/4IUnol4hLyQ" title="Microsoft Unveiled NEW COPILOT With Features That Will Blow Your Mind" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    }
  }

  bard() {
    const videoContainer = document.getElementById('videoContainer');
    if (videoContainer) {
        videoContainer.innerHTML = '<iframe width="656" height="369" src="https://www.youtube.com/embed/lr87yrvK86w" title="Introducing Extensions ✨ | Bard" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    }
  }


    toggleBeverage(beverage: string) {
        const index = this.beverage.indexOf(beverage);
        if (index > -1) {
            this.beverage.splice(index, 1);
        } else {
            this.beverage.push(beverage);
        }
    }

    validateRegistrationForm() {
        if (!this.name || !this.password || !this.address || !this.payment || !this.dob) {
            alert("Please fill in all required fields in the registration form.");
            return false;
        }

        alert("Form submitted successfully!");
        
        this.addRegistrationData();
        this.storeRegistrationData();
        
        // Reset form fields after submission
        this.resetForm();

        return true;
    }

    addRegistrationData() {
        const newEntry = {
            name: this.name,
            address: this.address,
            peopleCount: this.peopleCount,
            spicyMeter: this.spicyMeter,
            sugarLevel: this.sugarLevel,
            beverage: this.beverage,
            gender: this.gender,
            meal: this.meal,
            payment: this.payment,
            dob: this.dob
        };
        this.registrationData.push(newEntry);
        this.updateRegistrationDataTable();
    }

    storeRegistrationData() {
        localStorage.setItem('registrationData', JSON.stringify(this.registrationData));
    }

    loadRegistrationData() {
        const data = JSON.parse(localStorage.getItem('registrationData') || '[]');
        this.registrationData = data;
        this.updateRegistrationDataTable();
    }

    updateRegistrationDataTable() {
        const tableBody = document.getElementById("registrationDataTable")?.getElementsByTagName('tbody')[0];
        if (tableBody) {
            tableBody.innerHTML = ''; // Clear existing rows
            this.registrationData.forEach(data => {
                const newRow = tableBody.insertRow();
                newRow.innerHTML = `
                    <td>${data.name}</td>
                    <td>${data.address}</td>
                    <td>${data.peopleCount}</td>
                    <td>${data.spicyMeter}</td>
                    <td>${data.sugarLevel}</td>
                    <td>${data.beverage.join(', ')}</td>
                    <td>${data.gender}</td>
                    <td>${data.meal}</td>
                    <td>${data.payment}</td>
                    <td>${data.dob}</td>
                `;
            });
        }
    }

    resetForm() {
        this.name = '';
        this.password = '';
        this.address = '';
        this.beverage = [];
        this.gender = '';
        this.meal = '';
        this.payment = '';
        this.dob = '';
        this.peopleCount = 1;
        this.spicyMeter = 1;
        this.sugarLevel = 1;
    }

    clearLocalStorage() {
        localStorage.removeItem('registrationData');
        this.registrationData = [];
        this.updateRegistrationDataTable();
        alert("All registration data cleared!");
    }
}
