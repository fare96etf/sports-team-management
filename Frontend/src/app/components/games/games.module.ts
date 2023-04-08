import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GamePageComponent } from './game-page/game-page.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesListFilterComponent } from './schedule/games-list/games-list-filter/games-list-filter.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GamesCalendarComponent } from './schedule/games-calendar/games-calendar.component';
import { GamesListComponent } from './schedule/games-list/games-list.component';
import { GamesCalendarDayComponent } from './schedule/games-calendar/games-calendar-day/games-calendar-day.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    GamesCalendarComponent,
    GamesCalendarDayComponent,
    GamesListComponent,
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
    GamesCalendarComponent,
    GamesCalendarDayComponent,
    GamesListComponent,
    GamesListFilterComponent,
    GamePageComponent
  ]
})
export class GamesModule { }
