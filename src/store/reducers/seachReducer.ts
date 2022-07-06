import { SearchAction, SearchActionTypes, SearchState } from "../../types/search"


const initialState: SearchState = {
    booksResult: [],
    totalResults: 0,
    searchingValue: "",
    ordering: "relevance",
    category: "all",
    error: null,
    loading: false,
    startIndex: 0
}

export const searchReducer = (state = initialState, action: SearchAction): SearchState => {
    switch(action.type) {
        case SearchActionTypes.CHANGE_SEARCH_VALUE:
            return {
                ...state,
                booksResult: [],
                searchingValue: action.payload,
                loading: true,
            }
        case SearchActionTypes.CHANGE_CATEGORY:
            return {
                ...state,
                booksResult: [],
                category: action.payload,
                loading: true,
            }
        case SearchActionTypes.CHANGE_ORDERING:
            return {
                ...state,
                booksResult: [],
                ordering: action.payload,
                loading: true,
            }
        case SearchActionTypes.FETCH_RESULTS:
            return {
                ...state,
                loading: true,
            }
        case SearchActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                booksResult: state.booksResult.concat(action.payload[1]),
                totalResults: action.payload[0],
                loading: false
            }
        case SearchActionTypes.FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case SearchActionTypes.SHOW_MORE:
            return {
                ...state,
                startIndex: action.payload,
            }
        case SearchActionTypes.RESET_SEARCH:
            return {
                ...state,
                booksResult: [],
            }
        default:
            return state
    }
}