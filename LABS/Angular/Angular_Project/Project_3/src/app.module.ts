import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterOutlet } from '@angular/router';
import { Employee } from './app/model/employees.model';
import { EmployeeService } from './app/service/employees-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = new Employee();
  editingEmployee?: Employee;

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee).subscribe(() => {
      this.loadEmployees();
      this.newEmployee = new Employee();
    });
  }

  editEmployee(employee: Employee) {
    console.log('Editing Employee:', employee);
    this.editingEmployee = { ...employee }; 
  }
  
  updateEmployee() {
    console.log('Updating Employee:', this.editingEmployee);
    if (this.editingEmployee) {
      this.employeeService.updateEmployee(this.editingEmployee).subscribe(() => {
        this.loadEmployees();
        this.editingEmployee = undefined; 
      });
    }
  }
  

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
}
