import React, {FC, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import BookComponent from './BookComponent'
import './ShelveComponent.css'

const ShelveComponent:FC = () => {
  const {booksResult, error, loading} = useTypedSelector(state => state.search)
  // const [totalItems, setTotalItems] = useState<number>(0)
  // const [booksList, setBooksList] = useState<any[]>([])
  const fetchData = useActions()

  useEffect(() => {
    fetchData()
    
  }, [])

  // useEffect(() => {
  //   setTotalItems(booksResult[1])
  //   setBooksList(booksResult[2])
  // }, [booksResult])
  
  
  if (loading) {
    return <h1>Идет поиск...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="books-list">
      {booksResult.map((book) => 
        <BookComponent key={book.id} 
          title={book.volumeInfo.title} 
          categories={book.volumeInfo.categories} 
          authors={book.volumeInfo.authors} 
          image={book.volumeInfo.imageLinks.smallThumbnail}/>
      )}
    </div>
  )
}

export default ShelveComponent