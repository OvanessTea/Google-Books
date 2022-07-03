import React, {FC} from 'react';
import './ShelveComponent.css'

interface BookProps {
    title?: string,
    categories?: string[],
    authors?: string[],
    image?: string,
}

const BookComponent:FC<BookProps> = ({title, categories, authors, image}) => {

    return (
        <div className="book-card"> 
            {image && <img className="book-card__image" src={image} alt={`${title} image`} />}
            <div className="book-card__text">
                <label className="book-card__label">
                    {categories && <p className="book-card__paragraph book-card__paragraph-category">{categories[0]}</p>}
                </label>
                {title && <h3 className="book-card__title">{title}</h3>}
                <label className="book-card__label">
                    {authors && authors.map((author, index) => <li className="book-card__paragraph" key={index}>{author}</li>)}
                </label>
            </div> 
        </div>
    )
}

export default BookComponent