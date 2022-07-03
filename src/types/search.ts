export interface SearchState {
    booksResult: any[];
    totalResults: number;
    searchingValue: string;
    ordering: string;
    category: string;
    error: null | string;
    loading: boolean;
    startIndex: number;
}
export enum SearchActionTypes {
    CHANGE_ORDERING = "CHANGE_ORDERING",
    CHANGE_CATEGORY = "CHANGE_CATEGORY",
    FETCH_ERROR = "FETCH_ERROR",
    FETCH_RESULTS = "FETCH_RESULTS",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    SHOW_MORE = "SHOW_MORE",
    CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE"
}

interface ChangeSeachValueAction {
    type: SearchActionTypes.CHANGE_SEARCH_VALUE;
    payload: string;
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
interface ShowMore {
    type: SearchActionTypes.SHOW_MORE;
    payload: number;
}

export type SearchAction = (
    ChangeSeachValueAction |
    ChangeOrderAction | 
    ChangeCategoryAction | 
    FetchErrorAction | 
    FetchResultAction | 
    FetchSuccessAction |
    ShowMore
)