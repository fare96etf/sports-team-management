import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICompetition } from 'src/app/models/competitions.models';
import { IPlayerStats } from 'src/app/models/players.models';
import { CompetitionsApiService } from 'src/app/services/competitions-api.service';
import { PlayersApiService } from 'src/app/services/players-api.service';

@Component({
  selector: 'player-stats-component',
  templateUrl: './player-stats.component.html'
})
export class PlayerStatsComponent implements OnInit {
  playerStats$: Observable<IPlayerStats[]> = new Observable();
  competitions$: Observable<ICompetition[]>;
  @Input() playerId: number = 0;
  competitionId: number = 1;

  constructor (private playersApiService: PlayersApiService, private competitionsApiService: CompetitionsApiService) {
    this.competitions$ = this.competitionsApiService.getCompetitions();
    
    this.competitions$.pipe(
      map((competitions) => this.competitionId = competitions[0].id)
    );
  }

  ngOnInit(): void {
      this.getPlayerStats(this.competitionId);
  }

  getPlayerStats(competitionId: number) {
    this.playerStats$ = this.playersApiService.getPlayerStats(this.playerId, competitionId);
  }

  onChange() {
    this.getPlayerStats(this.competitionId);
  }
}
