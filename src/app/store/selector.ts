import {TableState, tableInitialState,tableReducer} from './table-details';
import {ActionReducerMap, combineReducers, createFeatureSelector, createSelector} from '@ngrx/store';
import { JsonpClientBackend } from '@angular/common/http';
import { stringify } from 'querystring';
import { TestDataState, InitialTestData, testDataReducer } from './test-data/test-data.reducer';

export interface KerpowState {
    tableState: TableState;
    testDataState: TestDataState;
}

export const kerpowInitialState: KerpowState={
    tableState: tableInitialState,
    testDataState: InitialTestData
}

const kerpowReducers: ActionReducerMap<KerpowState> = {
    tableState: tableReducer,
    testDataState: testDataReducer
}

export const kerpowReducer = combineReducers(kerpowReducers,kerpowInitialState);


export const getKerpowState = createFeatureSelector<KerpowState>(
    'kerpow'
);

export const getTables = createSelector(
    getKerpowState,
    (state) => {
        return state.tableState}
)

export const getTablesRequest = createSelector(
    getKerpowState,
    (state) => state.tableState.request
)

export const getTablesLoaded = createSelector(
    getKerpowState,
    (state) => state.tableState.loaded
)

export const getTestData = createSelector(
    getKerpowState,
    (state) => state.testDataState.results
)

export const getTestDataRequest = createSelector(
    getKerpowState,
    (state) => state.testDataState.request
)
