import { Component, Input, OnInit } from '@angular/core';
import { IGame } from 'src/app/models/games.models';

@Component({
  selector: 'games-calendar-day-component',
  templateUrl: './games-calendar-day.component.html',
  styleUrls: ['./games-calendar-day.component.css']
})
export class GamesCalendarDayComponent implements OnInit {
  @Input() gameDay: IGame = {};

  ngOnInit(): void {
      console.log(this.gameDay);
  }
}
