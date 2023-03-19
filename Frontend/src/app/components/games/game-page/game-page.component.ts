import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IGame } from 'src/app/models/games.models';
import { GamesApiService } from 'src/app/services/games-api.service';

@Component({
  selector: 'game-page-component',
  templateUrl: './game-page.component.html'
})
export class GamePageComponent {
  gameId: any = '';
  game$: Observable<IGame>;

  constructor (private route: ActivatedRoute, private gamesApiService: GamesApiService) {
    this.gameId = this.route.snapshot.paramMap.get('gameId');
    this.game$ = this.gamesApiService.getGame(this.gameId);
  }
}
