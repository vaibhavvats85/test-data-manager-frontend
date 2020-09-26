import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Service } from 'src/app/service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { TestDialogComponent } from './connect.dialog.template';
import { LoadTableDetails, TableState } from 'src/app/store/table-details';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import { TableListRequest } from 'src/app/model/table-list-request';
import { getTablesLoaded, getTables } from '../../store/selector'

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  @Output() goForward = new EventEmitter();
  connectForm: FormGroup
  constructor(private service: Service, private _formBuilder: FormBuilder, public dialog: MatDialog, private store$: Store<AppState>) { }

  ngOnInit() {
    this.connectForm = this._formBuilder.group({
      server: [''],
      port: [''],
      userName: [''],
      password: [''],
      dbName: ['']
    });
    this.setForm()
  }

  setForm() {
    const form = JSON.parse(localStorage.getItem("request"))
    if (form) {
      this.connectForm.get('server').setValue(form.hosturl)
      this.connectForm.get('userName').setValue(form.username)
      this.connectForm.get('password').setValue(form.password)
      this.connectForm.get('dbName').setValue(form.databasename)
    }
  }

  connect(conn) {
    let req: TableListRequest = {
      hosturl: this.connectForm.get('server').value,
      username: this.connectForm.get('userName').value,
      password: this.connectForm.get('password').value,
      connect: conn,
      databasename: this.connectForm.get('dbName').value
    }
    localStorage.setItem("request", JSON.stringify(req));
    if (!conn) {
      this.service.checkDBConnect(req).subscribe((data: any) => {
        const dialogRef = this.dialog.open(TestDialogComponent, {
          data: { test: data.connect }
        })
      });
    } else {
      this.store$.dispatch(new LoadTableDetails(req))
      this.goForward.emit()
    }
  }
}
