import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/models/players.models';
import { PlayersApiService } from 'src/app/services/players-api.service';

@Component({
  selector: 'player-page-component',
  templateUrl: './player-page.component.html'
})
export class PlayerPageComponent {
  user = {
    email: 'Bosnia and Herzegovina',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula, ligula a vestibulum tempor, nisi nisi accumsan dui, eu rutrum massa lacus eu magna.'
  };
  playerId: number = 1;
  player$: Observable<IPlayer>;

  constructor (private playerApiService: PlayersApiService) {
    this.player$ = this.playerApiService.getPlayer(this.playerId);
  }
}
