import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  playerId: any = '';
  player$: Observable<IPlayer>;

  constructor (private route: ActivatedRoute, private playerApiService: PlayersApiService) {
    this.playerId = this.route.snapshot.paramMap.get('playerId');
    this.player$ = this.playerApiService.getPlayer(this.playerId);
  }
}
