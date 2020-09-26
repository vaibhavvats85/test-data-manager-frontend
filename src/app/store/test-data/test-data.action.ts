import { Action } from '@ngrx/store';
import { TestDataRequest } from 'src/app/model/test-data.request';
import { HttpErrorResponse } from '@angular/common/http';
import { TestDataResponse } from 'src/app/model/test-data-response';

export enum TestDataActionsTypes {
    LOAD_TEST_DATA = '[Test Data] Load test Data',
    LOAD_TEST_DATA_SUCCESS = '[Test Data] Load Test Data Success',
    LOAD_TEST_DATA_FAIL = '[Test Data] Load Test Data Fail',
}

export class LoadTestData implements Action {
    readonly type = TestDataActionsTypes.LOAD_TEST_DATA;
    constructor(public payload: TestDataRequest){}
} 


export class LoadTestDataSuccess implements Action {
    readonly type = TestDataActionsTypes.LOAD_TEST_DATA_SUCCESS;
    constructor(public payload: TestDataResponse){}
} 


export class LoadTestDataFail implements Action {
    readonly type = TestDataActionsTypes.LOAD_TEST_DATA_FAIL;
    constructor(public payload: number){}
} 

export type TestDataActions = LoadTestData | LoadTestDataSuccess | LoadTestDataFail;