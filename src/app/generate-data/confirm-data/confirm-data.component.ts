import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTestData, getTestDataRequest } from 'src/app/store/selector';
import { take } from 'rxjs/operators';
import { TestDataRequest } from 'src/app/model/test-data.request';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-confirm-data',
  templateUrl: './confirm-data.component.html',
  styleUrls: ['./confirm-data.component.scss']
})
export class ConfirmDataComponent implements OnInit {

  confirmData = [];
  displayedColumns: string[];
  editedData = []
  constructor(private store$: Store, private service: Service) { }

  ngOnInit() {
    this.store$.select(getTestData).subscribe((data: any) => {
      if (data.length !== 0) {
        this.confirmData = JSON.parse(data);
        this.displayedColumns = Object.keys(this.confirmData[0]);
        console.log(this.confirmData);
      }
    });
  }

  add(input, row, column) {
    const val = input.target.value;
    this.store$.select(getTestDataRequest).pipe(take(1)).subscribe((req: TestDataRequest)=>{
        const newData = {
          id: row[req.id],
          value: parseInt(val) ? parseInt(val) : val,
          column: column
        }
        this.editedData.push(newData);
    });
  }

  confirm() {
    let req;
    this.store$.select(getTestDataRequest).pipe(take(1)).subscribe((request)=>{
       req = {
        connection: request,
        info: this.editedData
      }
    });
    this.service.confirmData(req).subscribe();
  }

}
