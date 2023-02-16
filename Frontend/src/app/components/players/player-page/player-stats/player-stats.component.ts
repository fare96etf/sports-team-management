import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayerStats } from 'src/app/models/players.models';
import { PlayersApiService } from 'src/app/services/players-api.service';

@Component({
  selector: 'player-stats-component',
  templateUrl: './player-stats.component.html'
})
export class PlayerStatsComponent {
  playerStats$: Observable<IPlayerStats[]>;

  constructor (private playersApiService: PlayersApiService) {
    this.playerStats$ = this.playersApiService.getPlayerStats(1);
  }
}
