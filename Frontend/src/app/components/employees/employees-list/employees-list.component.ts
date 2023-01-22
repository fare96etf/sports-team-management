import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employees.models';
import { EmployeesApiService } from 'src/app/services/employees-api.service';

@Component({
  selector: 'employees-list-component',
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit {
  employees: IEmployee[] = [];

  constructor( private employeesApiService: EmployeesApiService ) {}

  ngOnInit(): void {
      this.getEmployees();
  }

  getEmployees() {
    this.employeesApiService.getEmployees().subscribe(
      data => {this.employees = data },
      error => console.log(error)
    )
  }
}
