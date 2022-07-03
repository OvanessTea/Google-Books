import { Dispatch } from "redux"
import {SearchAction, SearchActionTypes} from "../../types/search"
import {API_KEY} from "../../config"

export const fetchData = (startIndex: number, ordering: string, category: string, searchingValue: string) => {
    return async (dispatch: Dispatch<SearchAction>) => {
        try {
            dispatch({type: SearchActionTypes.FETCH_RESULTS})
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchingValue}:subject=${category}&maxResults=30&startIndex=${startIndex}&orderBy=${ordering}&key=${API_KEY}`)
            .then(response => response.json())
            console.log(response)
            dispatch({type: SearchActionTypes.FETCH_SUCCESS, payload: [response.totalItems, response.items]});
        } catch (e) {
            dispatch({
                type: SearchActionTypes.FETCH_ERROR, 
                payload: "Произошла ошибка при загрузке списка книг"
            })
        }
    }
}