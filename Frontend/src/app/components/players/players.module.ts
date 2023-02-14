import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersListFilterComponent } from './players-list/players-list-filter/players-list-filter.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { PlayerStatsComponent } from './player-page/player-stats/player-stats.component';

@NgModule({
  declarations: [
    PlayersListComponent,
    PlayersListFilterComponent,
    PlayerPageComponent,
    PlayerStatsComponent
  ],
  imports: [
    SharedModule,
    PlayersRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [
    PlayersListComponent, 
    PlayersListFilterComponent, 
    PlayerPageComponent,
    PlayerStatsComponent
  ]
})
export class PlayersModule { }
