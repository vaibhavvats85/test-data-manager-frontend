import { TestDataRequest } from 'src/app/model/test-data.request';
import * as testDataActions from './test-data.action'

export interface TestDataState {
    results: any[];
    request: TestDataRequest;
    loaded: boolean;
    loading: boolean;
    error: number,
    noOfRecords: number;
}

export const InitialTestData: TestDataState = {
    results: [],
    request: null,
    loaded: false,
    loading: false,
    error: 0,
    noOfRecords: 0
} 


export function testDataReducer(state: TestDataState = InitialTestData, action: testDataActions.TestDataActions) {
    
    switch(action.type){
        case  testDataActions.TestDataActionsTypes.LOAD_TEST_DATA:{
            return {
                ...state,
                loading: true,
                request: action.payload
            }
        }
        case testDataActions.TestDataActionsTypes.LOAD_TEST_DATA_SUCCESS:{
            return {
                ...state,
                loaded: true,
                loading: false,
                results: action.payload.data,
                noOfRecords: action.payload.noOfRecords
            }
        }

        case testDataActions.TestDataActionsTypes.LOAD_TEST_DATA_FAIL: {
            return{
                ...state,
                results: [],
                loading: false,
                loaded: true,
                error: action.payload
            }
        }

        default: {
            return state;
        }
    }
}