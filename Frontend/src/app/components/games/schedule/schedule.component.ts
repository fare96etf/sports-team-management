import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GamesApiService } from 'src/app/services/games-api.service';
import { IGame, IGameFilter } from 'src/app/models/games.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'schedule-component',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  filter: IGameFilter;
  games$: Observable<IGame[]>;
  gamesByMonth: IGame[] = [];
  subscription: Subscription = new Subscription();
  weeks: any[] = [];
  month: string = '';
  currentMonth: number = new Date().getMonth();
  currentDate: Date = new Date();

  constructor(
    private gamesApiService: GamesApiService) {
      this.filter = { filter: '', competitionId: '0' };
      this.games$ = this.gamesApiService.getGames(this.filter);
    }
  
  ngOnInit(): void {
      this.subscription = this.gamesApiService.getGamesByMonth().subscribe(
        data => { this.gamesByMonth = data; console.log(data); },
        error => console.log(error)
      );  

      this.generateCalendar();
  }

  getGames() {
    this.games$ = this.gamesApiService.getGames(this.filter);
  }

  getFormData(filter: IGameFilter) {
    this.filter = filter;
    this.getGames();
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

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
