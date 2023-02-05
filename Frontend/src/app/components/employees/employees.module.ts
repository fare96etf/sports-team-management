import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesListFilterComponent } from './employees-list/employees-list-filter/employees-list-filter.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesListFilterComponent,
    EmployeePageComponent
  ],
  imports: [
    SharedModule,
    EmployeesRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [EmployeesListComponent, EmployeesListFilterComponent, EmployeePageComponent]
})
export class EmployeesModule { }
