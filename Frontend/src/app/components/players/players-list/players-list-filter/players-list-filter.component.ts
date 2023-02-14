import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'players-list-filter-component',
  templateUrl: './players-list-filter.component.html'
})
export class PlayersListFilterComponent implements OnInit, OnDestroy {
  @Output() formEmitter = new EventEmitter<any>();
  searchFormControl = new FormControl('');
  subscription: Subscription = new Subscription();

  ngOnInit() : void {
    this.formSubscription();
  }

  private formSubscription() {
    const searchObserver = this.searchFormControl.valueChanges.pipe(
      map((value: any) => value.trim()),
      debounceTime(200),
      distinctUntilChanged());
      
    this.subscription = searchObserver.subscribe(value =>
    {
      this.formEmitter.emit(value);
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
