import { SearchAction, SearchActionTypes, SearchState } from "../../types/search"



const initialState: SearchState = {
    booksResult: [],
    searchingValue: "",
    ordering: "relevance",
    category: "all",
    error: null,
    loading: false
}

export const searchReducer = (state = initialState, action: SearchAction): SearchState => {
    switch(action.type) {
        case SearchActionTypes.CHANGE_CATEGORY:
            return {
                booksResult: [],
                searchingValue: state.searchingValue,
                ordering: action.payload,
                category: state.category,
                error: null,
                loading: true,
            }
        case SearchActionTypes.CHANGE_ORDERING:
            return {
                booksResult: [],
                searchingValue: state.searchingValue,
                ordering: state.ordering,
                category: action.payload,
                error: null,
                loading: true,
            }
        case SearchActionTypes.FETCH_RESULTS:
            return {
                booksResult: [],
                searchingValue: state.searchingValue,
                ordering: state.ordering,
                category: state.category,
                error: null,
                loading: true,

            }
        case SearchActionTypes.FETCH_SUCCESS:
            return {
                booksResult: action.payload,
                searchingValue: state.searchingValue,
                ordering: state.ordering,
                category: state.category,
                error: null,
                loading: false,

            }
        case SearchActionTypes.FETCH_ERROR:
            return {
                booksResult: [],
                searchingValue: state.searchingValue,
                ordering: state.ordering,
                category: state.category,
                error: action.payload,
                loading: false,

            }
        default:
            return state
    }
}