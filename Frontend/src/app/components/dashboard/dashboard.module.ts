import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    DashboardRoutingModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
