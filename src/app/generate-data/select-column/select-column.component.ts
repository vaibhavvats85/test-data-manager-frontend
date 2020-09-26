import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { TableDetails } from './../../model/table-detail.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from 'src/app/service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import { getTablesRequest } from 'src/app/store/selector';
import { take } from 'rxjs/operators';
import { LoadTestData } from 'src/app/store/test-data/test-data.action';

@Component({
  selector: 'app-select-column',
  templateUrl: './select-column.component.html',
  styleUrls: ['./select-column.component.scss']
})
export class SelectColumnComponent implements OnInit, OnChanges {
  @Output() goForward = new EventEmitter();
  @Input() tableDetails: TableDetails;
  form: FormGroup;
  constructor(private fb: FormBuilder, private service: Service, private store$: Store) { }
  columns = [];
  details = [];
  ngOnInit() {
    this.form = this.fb.group({
      record_number: ['', Validators.required],
      column: ['', Validators.required],
      primary_key: ['', Validators.required]
    });
  }
  ngOnChanges() {
    this.columns = [];
    if(this.tableDetails && this.tableDetails.columns){
      this.details = this.tableDetails.columns;
      this.details.forEach(element => {
        this.columns.push(element.name);
      });
    }
  }
  next() {
    this.store$.select(getTablesRequest).pipe(take(1)).subscribe((request) => {
      const testDataRequest = {
        ...request,
        noOfRecords: parseInt(this.form.controls['record_number'].value),
        date_column: this.form.controls['column'].value,
        table: this.tableDetails.table,
        id: this.form.controls['primary_key'].value
      }
      this.store$.dispatch(new LoadTestData(testDataRequest))
    });
    this.goForward.emit()
  }
}
