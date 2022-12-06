import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RelatedBooks = (props) => {
    return (
    <table>
        <thead>
            <tr>
                <th>Book</th>
            </tr>
        </thead>

        <tbody>
            {/* {props.books.map((book, index) => {
                console.log("book variable inside RelatedBooks map", book)
                let linkUrl=`/book/${book.id}`
                return(
                    <tr>
                        <img src={book.snippet.thumbnails.default.url}/>
                        <Link to={linkUrl}>{book.snippet.title}</Link>
                    </tr>
                )
            })}; */}
        </tbody>
    </table>
    )
};

export default RelatedBooks;