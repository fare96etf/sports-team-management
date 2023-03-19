import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { ICompetition } from 'src/app/models/competitions.models';
import { IGameFilter } from 'src/app/models/games.models';
import { CompetitionsApiService } from 'src/app/services/competitions-api.service';

@Component({
  selector: 'games-list-filter-component',
  templateUrl: './games-list-filter.component.html'
})
export class GamesListFilterComponent implements OnInit, OnDestroy {
  @Output() formEmitter = new EventEmitter<any>();
  searchFormControl = new FormControl('');
  competitionFormControl = new FormControl('0');
  subscription: Subscription = new Subscription();
  competitions$: Observable<ICompetition[]>;

  constructor (private competitionsApiService: CompetitionsApiService) {
    this.competitions$ = this.competitionsApiService.getCompetitions();
  }

  ngOnInit() : void {
    this.formSubscription();
  }

  private formSubscription() {
    const searchObserver = combineLatest([
      this.searchFormControl.valueChanges.pipe(
        map((value: any) => value.trim()),
        debounceTime(200),
        distinctUntilChanged(),
        startWith("")),
      this.competitionFormControl.valueChanges.pipe(
        startWith("0")
      )
    ]);
    
    this.subscription = searchObserver.subscribe(([search, competitionId]) =>
    {
      var filter: IGameFilter = { filter: search, competitionId: competitionId };
      this.formEmitter.emit(filter);
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
