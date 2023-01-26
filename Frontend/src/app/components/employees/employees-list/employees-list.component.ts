import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employees.models';
import { EmployeesApiService } from 'src/app/services/employees-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'employees-list-component',
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit {
  filter: string = '';
  employees: IEmployee[] = [];
  addEmployeeModalTitle: string = "Add new employee";

  constructor(private employeesApiService: EmployeesApiService, private modalService: NgbModal) {}

  ngOnInit(): void {
      this.getEmployees();
  }

  getEmployees() {
    this.employeesApiService.getEmployees(this.filter).subscribe(
      data => { this.employees = data },
      error => console.log(error)
    )
  }

  getFormData(filter: any) {
    this.filter = filter;
    this.getEmployees();
  }

  openModalAddEmployee(content: any) {
    this.modalService.open(content);
  }

}
