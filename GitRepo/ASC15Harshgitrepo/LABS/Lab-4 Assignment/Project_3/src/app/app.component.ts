import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Employee } from './model/employees.model';
import { EmployeeService } from './service/employees-service';
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
  highestId: number = 0; 

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  addEmployee() {
    this.newEmployee.id = (this.highestId + 1).toString(); 
    this.highestId = this.highestId + 1; 
    this.employeeService.addEmployee(this.newEmployee).subscribe(() => {
      this.loadEmployees();
      this.newEmployee = new Employee(); 
    });
  }

  editEmployee(employee: Employee) {
    this.editingEmployee = { ...employee }; 
  }

  updateEmployee() {
    if (this.editingEmployee) {
      this.employeeService.updateEmployee(this.editingEmployee).subscribe(() => {
        this.loadEmployees();
        this.editingEmployee = undefined; 
      });
    }
  }

deleteEmployee(id: string) { 
  console.log('Deleting Employee ID:', id);
  this.employeeService.deleteEmployee(Number(id)).subscribe(() => { 
      this.loadEmployees();
  });
}
}
