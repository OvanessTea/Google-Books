import React, {FC, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { SearchActionTypes } from '../../types/search';
import "./Header.css"

const Header:FC = () => {
    const {ordering, category} = useTypedSelector(state => state.search)
    const [isActiveCat, setIsActiveCat] = useState(false);
    const [isActiveSort, setIsActiveSort] = useState(false);
    const [bookName, setBookName] = useState("");
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const submitSearch = (event: any):void => {
        if (event.keyCode === 13) {
            navigate("./")
            dispatch({type: SearchActionTypes.CHANGE_SEARCH_VALUE, payload: event.target.value})
        }
    }
    const submitButtonClick = () => {
        navigate("./")
        dispatch({type: SearchActionTypes.CHANGE_SEARCH_VALUE, payload: bookName})
    }
    const toggleIsActiveCat = ():void => {
        setIsActiveCat(!isActiveCat);
    }
    const toggleIsActiveSort = ():void => {
        setIsActiveSort(!isActiveSort);
    }
    const changeSearchValue = (event: any):void => {
        setBookName(event.target.value)
    }
    const changeCategory = (event: any):void => {
        navigate("./")
        dispatch({type: SearchActionTypes.CHANGE_CATEGORY, payload: event.target.value})
        toggleIsActiveCat()
    }
    const changeSorting = (event: any):void => {
        navigate("./")
        dispatch({type: SearchActionTypes.CHANGE_ORDERING, payload: event.target.value})
        toggleIsActiveSort()
    }    
    

    return (
        <div className='header'>
            <h1 className='header__title'>Search for books</h1>
            <div className="header__search-container">
                <div className="header__textinput">
                    <input value={bookName} type="text" onKeyDown={submitSearch} onChange={changeSearchValue}/>
                    <button className='header__search-button' onClick={() => submitButtonClick()}></button>
                </div>
                <div className="header__filter">
                    <div className="filter__categories">
                        <p className='filter__paragraph'>Categories</p>
                        <div className="filter__combobox">
                            <label>
                                <div className="combobox__selected" onClick={() => toggleIsActiveCat()}>
                                    <p>{category}</p>
                                    <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="" />
                                </div>
                            </label>
                            <div className="select-box">
                                <div className={isActiveCat ? "options-container active" : "options-container"} onChange={(event) => changeCategory(event)}>
                                    <input 
                                        type="radio" 
                                        className="radio" 
                                        id="all" 
                                        value="all" 
                                        name="category"
                                    />
                                    <label className="option" htmlFor="all">all</label>
                                    <input 
                                        type="radio" 
                                        className="radio" 
                                        id="art" 
                                        value="art" 
                                        name="category"
                                    />
                                    <label className="option" htmlFor="art">art</label>
                                    <input 
                                        type="radio" 
                                        className="radio" 
                                        id="biography" 
                                        value="biography" 
                                        name="category"
                                    />
                                    <label className="option" htmlFor="biography">biography</label>
                                    <input 
                                        type="radio" 
                                        className="radio" 
                                        id="computers" 
                                        value="computers" 
                                        name="category"
                                    />
                                    <label className="option" htmlFor="computers">computers</label>
                                    <input 
                                        type="radio" 
                                        className="radio" 
                                        id="history" 
                                        value="history" 
                                        name="category"
                                    />
                                    <label className="option" htmlFor="history">history</label>
                                    <input 
                                        type="radio" 
                                        className="radio" 
                                        id="medical" 
                                        value="medical" 
                                        name="category"
                                    />
                                    <label className="option" htmlFor="medical">medical</label>
                                    <input 
                                        type="radio" 
                                        className="radio" 
                                        id="poetry" 
                                        value="poetry" 
                                        name="category"
                                    />
                                    <label className="option" htmlFor="poetry">poetry</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter__sorting">
                        <p className='filter__paragraph'>Sorting by</p>
                        <div className="filter__combobox">
                            <label>
                                <div className="combobox__selected" onClick={() => toggleIsActiveSort()}>
                                    <p>{ordering}</p>
                                    <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="" />
                                </div>
                            </label>
                            <div className="select-box">
                                <div className={isActiveSort ? "options-container active" : "options-container"} onChange={(event) => changeSorting(event)}>
                                    <input 
                                        type="radio" 
                                        className="radio" 
                                        id="relevance" 
                                        value="relevance" 
                                        name="orderBy"
                                    />
                                    <label className="option" htmlFor="relevance">relevance</label>
                                    <input 
                                        type="radio" 
                                        className="radio" 
                                        id="newest" 
                                        value="newest" 
                                        name="orderBy"
                                    />
                                    <label className="option" htmlFor="newest">newest</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header