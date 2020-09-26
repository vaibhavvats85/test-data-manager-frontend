import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import * as testDataActions from './test-data.action';
import { Service } from '../../service';
import { of } from 'rxjs';
import { TestDataResponse } from 'src/app/model/test-data-response';

@Injectable()
export class TestDataEffect {
  constructor(
    private actions$: Actions,
    private generateDataService: Service
  ) { }

  @Effect()
  loadTestData$ = this.actions$.pipe(
    ofType(
        testDataActions.TestDataActionsTypes.LOAD_TEST_DATA
    ),
    switchMap((action: testDataActions.LoadTestData) => {
      return this.generateDataService.getTestData(action.payload).pipe(
        map(
          (tables: TestDataResponse) => new testDataActions.LoadTestDataSuccess(tables)
        ),
        catchError(err => of(new testDataActions.LoadTestDataFail(err)))
      );
    }
    )
  );
}