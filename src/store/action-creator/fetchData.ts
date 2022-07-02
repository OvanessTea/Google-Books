import { Dispatch } from "redux"
import {SearchAction, SearchActionTypes} from "../../types/search"
import {API_KEY} from "../../config"

export const fetchData = () => {
    return async (dispatch: Dispatch<SearchAction>) => {
        try {
            dispatch({type: SearchActionTypes.FETCH_RESULTS})
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?langrestrict=ru&q=search+terms:subject=computers&maxResults=40&key=${API_KEY}`)
            .then(response => response.json())
            dispatch({type: SearchActionTypes.FETCH_SUCCESS, payload: response.items});
        } catch (e) {
            dispatch({
                type: SearchActionTypes.FETCH_ERROR, 
                payload: "Произошла ошибка при загрузке списка книг"
            })
        }
    }
}