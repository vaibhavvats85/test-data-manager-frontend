import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";

import { map, switchMap, catchError } from "rxjs/operators";
import * as tableDetailActions from './table-details.action';
import { Service } from '../../service';
import { TableDetails } from '../../model/table-detail.model';

@Injectable()
export class TableEffect {
  constructor(
    private actions$: Actions,
    private generateDataService: Service
  ) { }

  @Effect()
  loadTables$ = this.actions$.pipe(
    ofType(
      tableDetailActions.TableDetailsActionTypes.LOAD_TABLE_DETAILS
    ),
    switchMap((action: tableDetailActions.LoadTableDetails) => {
      return this.generateDataService.checkDBConnect(action.request).pipe(
        map(
          (tables: any[]) => new tableDetailActions.LoadTableDetailsSuccess(tables)
        ),
        catchError(err => of(new tableDetailActions.LoadTableDetailsFail(err)))
      );
    }
    )
  );
}