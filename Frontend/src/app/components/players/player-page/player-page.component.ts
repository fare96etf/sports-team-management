import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IPlayer } from 'src/app/models/players.models';
import { PlayersApiService } from 'src/app/services/players-api.service';

@Component({
  selector: 'player-page-component',
  templateUrl: './player-page.component.html'
})
export class PlayerPageComponent implements OnInit, OnDestroy {
  isLoaded: boolean = false;
  user = {
    email: 'Bosnia and Herzegovina',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula, ligula a vestibulum tempor, nisi nisi accumsan dui, eu rutrum massa lacus eu magna.'
  };
  playerId: number = 1;
  player: IPlayer = {
    fullName: '',
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    position: '',
    number: 0
  };
  subscription: Subscription = new Subscription();

  constructor (private playerApiService: PlayersApiService) {}

  ngOnInit(): void {
      this.getPlayer();
  }

  getPlayer() {
    this.subscription = this.playerApiService.getPlayer(this.playerId).subscribe(
      (data) => { this.player = data; this.isLoaded = true },
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
