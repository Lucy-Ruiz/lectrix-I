import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookPage from '../../pages/BookPage/BookPage';

const RelatedBooks = (props) => {
    return (
    <table>
        <thead>
            <tr>
                <th>Related Books</th>
            </tr>
        </thead>

        <tbody>
            {props.books.map((book, index) => {
                console.log("book variable inside RelatedBooks map", book)
                let linkUrl=`/book/${book.id}`
                return(
                    <tr key={index}>
                        <img src={book.volumeInfo.imageLinks.thumbnail}/>
                        <Link to={linkUrl}>{book.volumeInfo.title}</Link>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
};

export default RelatedBooks;