import React, {FC, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import BookComponent from './BookComponent'

const ShelveComponent:FC = () => {
  const {booksResult, error, loading} = useTypedSelector(state => state.search)
  
  const fetchData = useActions()

  useEffect(() => {
    fetchData()
  }, [])
  
  if (loading) {
    return <h1>Идет поиск...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  console.log(booksResult[0])
  return (
    <div>
      {booksResult.map((book) => 
        <BookComponent key={book.id} /*book={book}*//>
      )}
    </div>
  )
}

export default ShelveComponent