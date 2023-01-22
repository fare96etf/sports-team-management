import { NgModule } from '@angular/core';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesListFilterComponent } from './employees-list/employees-list-filter/employees-list-filter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesListFilterComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [EmployeesListComponent]
})
export class EmployeesModule { }
