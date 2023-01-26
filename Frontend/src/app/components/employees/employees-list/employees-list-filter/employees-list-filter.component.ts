import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'employees-list-filter-component',
  templateUrl: './employees-list-filter.component.html',
  styleUrls: ['./employees-list-filter.component.css']
})
export class EmployeesListFilterComponent implements OnInit {
  @Output() formEmitter = new EventEmitter<any>();
  searchFormControl = new FormControl('');

  ngOnInit() {
    this.formSubscription();
  }

  private formSubscription() {
    let searchObserver = this.searchFormControl.valueChanges.pipe(
      map((value: any) => value.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      filter((value: any) => value !== ""));
      
    searchObserver.subscribe(value =>
    {
      this.formEmitter.emit(value);
    });
  }

  submit() {
    this.formEmitter.emit(this.searchFormControl.value);
  }
}
