import { Component, OnDestroy, OnInit } from '@angular/core';
import { GamesApiService } from 'src/app/services/games-api.service';
import { IGame } from 'src/app/models/games.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'games-calendar-component',
  templateUrl: './games-calendar.component.html',
  styleUrls: ['./games-calendar.component.css']
})
export class GamesCalendarComponent implements OnInit, OnDestroy {
  gamesByMonth: IGame[] = [];
  subscription: Subscription = new Subscription();
  weeks: any[] = [];
  month: string = '';
  currentMonth: number = new Date().getMonth();
  currentDate: Date = new Date();

  constructor(
    private gamesApiService: GamesApiService) {
    }
  
  ngOnInit(): void {
      this.subscription = this.gamesApiService.getGamesByMonth().subscribe(
        data => { this.gamesByMonth = data; },
        error => console.log(error)
      );  

      this.generateCalendar();
  }

  generateCalendar() {
    const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDay = firstDayOfMonth.getDay();

    const monthIndex = this.currentDate.getMonth();
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.month = monthsOfYear[monthIndex];

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week: any[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          week.push({
            day: '',
            month: -1
          });
        } else if (day > daysInMonth) {
          week.push({
            day: '',
            month: 1
          });
        } else {
          week.push({
            day: day,
            month: 0
          });
          day++;
        }
      }
      this.weeks.push(week);
    }
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.weeks = [];
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.weeks = [];
    this.generateCalendar();
  }

  isGameDay(day: number) {
    return this.gamesByMonth.some((game) =>
      game.dayOfTheMonth == day);
  }

  getGameDay(day: number): IGame {
    let game = this.gamesByMonth.find((game) =>
      game.dayOfTheMonth == day);
    
    return game === undefined ? {} : game;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
