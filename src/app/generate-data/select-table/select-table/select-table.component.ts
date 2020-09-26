import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TableDetails} from './../../../model/table-detail.model';
import {Store, select} from '@ngrx/store';
import {Observable, from} from 'rxjs';
import * as tableActions from './../../../store/table-details/table-details.action';
import * as fromStore from './../../../store/selector';
@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss']
})
export class SelectTableComponent implements OnInit {
  @Output() goForward = new EventEmitter();
  tables: TableDetails;
  displayedColumns: string[] = ['table_name', 'column_number', 'record_number'];
  dataSource:MatTableDataSource<TableDetails>;
  constructor(private store:Store) { }
  getRecord(row){
    this.goForward.emit(row);
  }
  ngOnInit() {
    this.store.select(fromStore.getTables).subscribe((data: any)=>{
      this.dataSource = data.tables;
    })
    
  }

}
