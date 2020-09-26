import * as tableDetailActions from './table-details.action';
import { TableDetails } from '../../model/table-detail.model';
import  * as fromRoot  from '../../state/app-state';
import { act } from '@ngrx/effects';
import { TableListRequest } from 'src/app/model/table-list-request';

export interface TableState {
    tables:TableDetails[],
    request: TableListRequest,
    loading:boolean,
    loaded:boolean,
    error:string,
}

export interface AppState extends fromRoot.AppState{
    tables:TableState
}

export const tableInitialState: TableState = {
    tables:[],
    request: null,
    loading:false,
    loaded:false,
    error:""
}

export function tableReducer(state:TableState= tableInitialState, action:tableDetailActions.Actions){
    switch(action.type){
        case tableDetailActions.TableDetailsActionTypes.LOAD_TABLE_DETAILS:{
            return {
                ...state,
                loading:true,
                request: action.request
            }
        }

        case tableDetailActions.TableDetailsActionTypes.LOAD_TABLE_DETAILS_SUCCESS:{
            return {
                ...state,
                loaded:true,
                loading:false,
                tables:action.payload,
                

            }
        }
        case tableDetailActions.TableDetailsActionTypes.LOAD_TABLE_DETAILS_FAIL:{
            return {
                ...state,
                tables:[],
                loaded: false,
                loading:false,
                error:action.payload
            }
        }

        default:{
            return state;
        }
    }
}
