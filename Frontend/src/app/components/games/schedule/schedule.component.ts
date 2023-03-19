import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GamesApiService } from 'src/app/services/games-api.service';
import { IGame, IGameFilter } from 'src/app/models/games.models';

@Component({
  selector: 'schedule-component',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
  filter: IGameFilter;
  games$: Observable<IGame[]>;

  constructor(
    private gamesApiService: GamesApiService) {
      this.filter = { filter: '', competitionId: '0' };
      this.games$ = this.gamesApiService.getGames(this.filter);
    }

  getGames() {
    this.games$ = this.gamesApiService.getGames(this.filter);
  }

  getFormData(filter: IGameFilter) {
    this.filter = filter;
    this.getGames();
  }
}
