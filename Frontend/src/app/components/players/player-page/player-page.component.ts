import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player-page-component',
  templateUrl: './player-page.component.html'
})
export class PlayerPageComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula, ligula a vestibulum tempor, nisi nisi accumsan dui, eu rutrum massa lacus eu magna.'
  };
}
