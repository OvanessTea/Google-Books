export interface SearchState {
    booksResult: any[];
    searchingValue: string;
    ordering: string;
    category: string;
    error: null | string;
    loading: boolean;
}
export enum SearchActionTypes {
    CHANGE_ORDERING = "CHANGE_ORDERING",
    CHANGE_CATEGORY = "CHANGE_CATEGORY",
    FETCH_ERROR = "FETCH_ERROR",
    FETCH_RESULTS = "FETCH_RESULTS",
    FETCH_SUCCESS = "FETCH_SUCCESS"
}

interface ChangeOrderAction {
    type: SearchActionTypes.CHANGE_CATEGORY;
    payload: string;
}
interface ChangeCategoryAction {
    type: SearchActionTypes.CHANGE_ORDERING;
    payload: string;
}
interface FetchResultAction {
    type: SearchActionTypes.FETCH_RESULTS;
}
interface FetchErrorAction {
    type: SearchActionTypes.FETCH_SUCCESS;
    payload: any[];
}
interface FetchSuccessAction {
    type: SearchActionTypes.FETCH_ERROR;
    payload: string;
}

export type SearchAction = (
    ChangeOrderAction | 
    ChangeCategoryAction | 
    FetchErrorAction | 
    FetchResultAction | 
    FetchSuccessAction
)