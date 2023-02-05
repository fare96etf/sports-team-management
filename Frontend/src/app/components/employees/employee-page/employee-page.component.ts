import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employees.models';
import { EmployeesApiService } from 'src/app/services/employees-api.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'employee-page-component',
  templateUrl: './employee-page.component.html'
})
export class EmployeePageComponent {
  user = {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    position: 'Software Engineer'
  };
}
