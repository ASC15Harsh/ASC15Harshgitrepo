import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './model/employees.model';
import { employeesservice } from './service/employees-service';
import { CommonModule } from '@angular/common';

// interface person {
//   name : string;
//   age: number;
//   city: string;
//   }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit{
  title = 'Project_1';
  name = 'Harsh Mishra';
  // people : person[] = [
  //   {name :'Harsh' , age:22 , city :'India'},
  //   {name :'Mishra' , age:23 , city :'Ind'},
  //   {name :'pookie pookie' , age:24 , city :'Bharat'},
  // ];
  employees? : Employee[];
constructor (public ES : employeesservice){

}
ngOnInit(): void {
  console.log("synchronosly taking data")
  this.ES.getemployee().subscribe(data => this.employees = data);
}

}
