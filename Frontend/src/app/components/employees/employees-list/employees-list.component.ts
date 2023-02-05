import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employees.models';
import { EmployeesApiService } from 'src/app/services/employees-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'employees-list-component',
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit {
  filter: string = '';
  employees: Observable<IEmployee[]> = new Observable();
  addEmployeeModalTitle: string = "+ Add new player";
  addEmployeeFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthDate: new FormControl(''),
    image: new FormControl('')
  });
  selectedFile: File = new File([], 'image');

  constructor(private employeesApiService: EmployeesApiService, private modalService: NgbModal) {}

  ngOnInit(): void {
      this.getEmployees();
  }

  getEmployees() {
    this.employees = this.employeesApiService.getEmployees(this.filter);
  }

  getFormData(filter: any) {
    this.filter = filter;
    this.getEmployees();
  }

  openModalAddEmployee(content: any) {
    this.modalService.open(content);
  }
  
  closeModalAddEmployee() {
    this.modalService.dismissAll();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = <File>event.target.files[0];
      console.log(this.selectedFile);
      this.addEmployeeFormGroup.value.image  = this.selectedFile;
    }
  }

  addNewEmployee() {
    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);
    console.log(formData);

    let newEmployee: IEmployee = {
      firstName: this.addEmployeeFormGroup.value.firstName,
      lastName: this.addEmployeeFormGroup.value.lastName,
      dateOfBirth: this.addEmployeeFormGroup.value.birthDate,
      image: formData
    };

    console.log(newEmployee.image);

    this.employeesApiService.insertEmployee(newEmployee).subscribe(
      data => { console.log(data); this.closeModalAddEmployee(); this.getEmployees(); },
      error => console.log(error)
    );    
  }

}
