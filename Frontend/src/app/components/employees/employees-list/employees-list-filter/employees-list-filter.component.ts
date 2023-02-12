import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'employees-list-filter-component',
  templateUrl: './employees-list-filter.component.html'
})
export class EmployeesListFilterComponent implements OnInit, OnDestroy {
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
