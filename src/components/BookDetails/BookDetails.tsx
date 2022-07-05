import React, {FC, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBookDetails } from '../../store/action-creator/fetchBookCard';
import './BookDetails.css'

const BookDetails:FC = () => {
    const { id } = useParams();
    const [bookCard, setBookCard] = useState <any[]>([]);
    const [image, setImage] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [categories, setCategories] = useState<string[]>([]);
    const [authors, setAuthors] = useState<string[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchBookDetails(id).then((data: object) => setBookCard([data]))
    }, [id])    
    
    useEffect(() => {
        if (bookCard[0] !== null) {
            setImage(bookCard[0]?.volumeInfo?.imageLinks?.smallThumbnail)
            setTitle(bookCard[0]?.volumeInfo?.title)
            setDescription(bookCard[0]?.volumeInfo?.description)
            setCategories(bookCard[0]?.volumeInfo?.categories)
            setAuthors(bookCard[0]?.volumeInfo?.authors)
        }
    }, [bookCard])

    if (bookCard[0] === null) {
        return <div className='error-message'>
            <h1 className="message">An error occurred while searching for a book...</h1>
            <div className="card__button-container card__error-button-container">
                <button className="card__button card__error-button" onClick={() => navigate(-1)}>
                    Go back
                </button>
            </div>
        </div>
    }
    

    return (
        <div className="card">
            <div className="card__image-container">
                {image && <img className="card__image" src={image} alt={`${title} cover`} />}
            </div>
            <div className="card__text-container">
                <div className="card__button-container">
                    <button className="card__button" onClick={() => navigate(-1)}>
                        Go back
                    </button>
                </div>
                <div className="card__categories-container">
                    {categories && <p className="card__paragraph">{categories[0]}</p>}
                </div>
                <div className="card__title-container">
                    {title && <h3 className="card__title">{title}</h3>}
                </div>
                <label className="card__label">
                    {authors && authors.map((author, index) => <li className="card__paragraph card__paragraph-authors" key={index}>{author}</li>)}
                </label>
                <div className="card__description-container">
                    {description && <p className="card__description">{description}</p>}
                </div>
            </div>
        </div>
    )
}

export default BookDetails