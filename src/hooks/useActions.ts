import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchData} from '../store/action-creator/fetchData'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(fetchData, dispatch)
}