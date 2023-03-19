import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GamePageComponent } from './game-page/game-page.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesListFilterComponent } from './schedule/games-list-filter/games-list-filter.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    GamesListFilterComponent,
    GamePageComponent
  ],
  imports: [
    SharedModule,
    GamesRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [
    ScheduleComponent,
    GamesListFilterComponent,
    GamePageComponent
  ]
})
export class GamesModule { }
