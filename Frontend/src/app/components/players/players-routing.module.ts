import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerPageComponent } from './player-page/player-page.component';
import { PlayersListComponent } from './players-list/players-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersListComponent
  },
  {
    path: ':playerId',
    component: PlayerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
