import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayerStats } from 'src/app/models/players.models';
import { PlayersApiService } from 'src/app/services/players-api.service';

@Component({
  selector: 'player-stats-component',
  templateUrl: './player-stats.component.html'
})
export class PlayerStatsComponent implements OnInit {
  playerStats: Observable<IPlayerStats[]> = new Observable();

  constructor (private playersApiService: PlayersApiService) {}
  
  ngOnInit(): void {
    this.getPlayerStats();
  }

  getPlayerStats() {
    this.playerStats = this.playersApiService.getPlayerStats(1);
  }
}
