import React, {FC} from 'react';
import './ShelveComponent.css'

interface BookProps {
    title: string,
    categories: string[],
    authors: string[],
    image: string,
}

const BookComponent:FC<BookProps> = ({title, categories, authors, image}) => {

    

    return (
        <div className="book-card"> 
            <img className="book-card__image" src={image} alt={`${title} image`} />
            <div className="book-card__text">
                <label className="book-card__label">
                    {authors && categories.map((category, index) => <p key={index} className="book-card__paragraph book-card__paragraph-category">{category}</p>)}
                </label>
                <h3 className="book-card__title">{title}</h3>
                <label className="book-card__label">
                    {authors && authors.map((author, index) => <p key={index} className="book-card__paragraph">{author}</p>)}
                </label>
            </div> 
        </div>
    )
}

export default BookComponent