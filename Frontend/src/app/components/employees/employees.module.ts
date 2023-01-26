import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesListFilterComponent } from './employees-list/employees-list-filter/employees-list-filter.component';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesListFilterComponent
  ],
  imports: [
    SharedModule,
    EmployeesRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [EmployeesListComponent]
})
export class EmployeesModule { }
