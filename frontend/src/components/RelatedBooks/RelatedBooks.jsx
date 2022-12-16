import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookPage from '../../pages/BookPage/BookPage';
import "./RelatedBooks.css"

const RelatedBooks = (props) => {
    return (
    <div>
        <section className='relatedbooks-title'>
            Related Books
        </section>
        <section className='relatedbooks-items'>
            {props.books.map((book, index) => {
                console.log("book variable inside RelatedBooks map", book)
                let linkUrl=`/book/${book.id}`
                return(
                    <section className='relatedbook'>
                        <img src={book.volumeInfo.imageLinks.thumbnail}/>
                        <Link className='relatedbooks-description' to={linkUrl}>{book.volumeInfo.title}</Link>
                    </section>
                )
            })}
        </section>
    </div>
    )
};

export default RelatedBooks;