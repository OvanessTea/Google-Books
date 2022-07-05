import React, {FC, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import BookComponent from '../BookComponent/BookComponent'
import './ShelveComponent.css'
import { SearchActionTypes } from '../../types/search'

const ShelveComponent:FC = () => {
  const {
      ordering, 
      category, 
      searchingValue, 
      booksResult, 
      totalResults, 
      error, 
      loading, 
      startIndex
  } = useTypedSelector(state => state.search)
  
  const fetchData = useActions()
  const dispatch = useDispatch()

  const loadMore = () => {
    dispatch({type: SearchActionTypes.SHOW_MORE, payload: (startIndex + 30)})
  }
  
  useEffect(() => {
    fetchData(startIndex, ordering, category, searchingValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startIndex, ordering, category, searchingValue])

  if (loading) {
    return <h1 className="message">Loading...</h1>
  }
  if (error) {
    return <h1 className="message">{error}</h1>
  }
  
  return (
    <main>
      <p className="totalResults">Found {totalResults} results</p>
      <div className="books-list">
        {booksResult.map((book: any) => 
          <BookComponent key={book.id}
            id={book.id}
            title={book.volumeInfo?.title} 
            categories={book.volumeInfo?.categories} 
            authors={book.volumeInfo?.authors} 
            image={book.volumeInfo?.imageLinks?.smallThumbnail}
          />
        )}
      </div>
      <button type="button" className="add-button" onClick={() => {
        loadMore()
      }}>Load more</button>
    </main>
  )
}

export default ShelveComponent