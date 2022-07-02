import React, {FC, useState, useEffect} from 'react'

const Header:FC = () => {
    const [isActiveCat, setIsActiveCat] = useState(false);
    const [isActiveSort, setIsActiveSort] = useState(false);
    const [searchingValue, setSearchingValue] = useState("");
    const [ordering, setOrdering] = useState("relevance");
    const [category, setCategory] = useState("all");

    const submitSearch = (event: any):void => {
        if (event.keyCode === 13) {
            console.log(event.target.value)
        }
    }
    const toggleIsActiveCat = ():void => {
        setIsActiveCat(!isActiveCat);
    }
    const toggleIsActiveSort = ():void => {
        setIsActiveSort(!isActiveSort);
    }
    const changeSearchValue = (event: any):void => {
        setSearchingValue(event.target.value)
    }
    const changeCategory = (event: any):void => {
        setCategory(event.target.value)
        toggleIsActiveCat()
    }
    const changeSorting = (event: any):void => {
        setOrdering(event.target.value)
        toggleIsActiveSort()
    }

    useEffect(() => {
      console.log(`Export data: ${searchingValue}, ${category}, ${ordering}`)
    
    }, [ordering, category])
    

    return (
        <div className='header'>
            <h1 className='header__title'>Search for books</h1>
            <div className="header__search-container">
                <div className="header__textinput">
                    <input value={searchingValue} type="text" onKeyDown={submitSearch} onChange={changeSearchValue}/>
                    <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="" onClick={submitSearch}/>
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