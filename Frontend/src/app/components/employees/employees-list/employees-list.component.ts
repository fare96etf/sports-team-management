import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employees.models';
import { EmployeesApiService } from 'src/app/services/employees-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPosition } from 'src/app/models/positions.models';
import { PositionsApiService } from 'src/app/services/positions-api.service';

@Component({
  selector: 'employees-list-component',
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit {
  filter: string = '';
  positions: Observable<IPosition[]> = new Observable();
  employees: Observable<IEmployee[]> = new Observable();
  addEmployeeModalTitle: string = "Add new player";
  addEmployeeFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, Validators.min(0)]),
    position:  new FormControl('', [Validators.required])
  });

  constructor(private employeesApiService: EmployeesApiService, private positionsApiService: PositionsApiService, private modalService: NgbModal) {}

  ngOnInit(): void {
      this.getPositions();
      this.getEmployees();
  }

  getEmployees() {
    this.employees = this.employeesApiService.getEmployees(this.filter);
  }

  getPositions() {
    this.positions = this.positionsApiService.getPositions();                                   
  }

  getFormData(filter: any) {
    this.filter = filter;
    this.getEmployees();
  }

  openModalAddEmployee(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }
  
  closeModalAddEmployee() {
    this.modalService.dismissAll();
    this.resetFormNewEmployee();
  }

  addNewEmployee() {
    if (!this.addEmployeeFormGroup.valid) return;

    let newEmployee: IEmployee = {
      firstName: this.addEmployeeFormGroup.value.firstName,
      lastName: this.addEmployeeFormGroup.value.lastName,
      dateOfBirth: this.addEmployeeFormGroup.value.birthDate,
      position: this.addEmployeeFormGroup.value.position,
      number: this.addEmployeeFormGroup.value.number
    };

    console.log(newEmployee);

    this.employeesApiService.insertEmployee(newEmployee).subscribe(
      data => { console.log(data); this.closeModalAddEmployee(); this.getEmployees(); },
      error => console.log(error)
    );    
  }

  resetFormNewEmployee() {
    this.addEmployeeFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.min(0)]),
      position:  new FormControl('', [Validators.required])
    });
  }
}
