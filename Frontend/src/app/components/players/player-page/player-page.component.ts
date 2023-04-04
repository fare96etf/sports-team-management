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
    avatar: 'https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Saka_Profile_1100x693_0.jpg?itok=LvMDBAP2',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula, ligula a vestibulum tempor, nisi nisi accumsan dui, eu rutrum massa lacus eu magna.'
  };
  playerId: any = '';
  player$: Observable<IPlayer>;

  constructor (private route: ActivatedRoute, private playerApiService: PlayersApiService) {
    this.playerId = this.route.snapshot.paramMap.get('playerId');
    this.player$ = this.playerApiService.getPlayer(this.playerId);
  }

  getCountryClass(countryCode: any) {
    return ["fi", "fi-" + countryCode];
  }
}
