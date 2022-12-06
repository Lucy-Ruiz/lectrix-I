import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RelatedBooks from '../../components/RelatedBooks/RelatedBooks';
import key from "../../API_Key.json";
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';
import CommentList from '../../components/CommentList/CommentList';

const BookPage = () => {
    const [relatedBooks, setRelatedBooks] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const {selectedBook} = useParams()
    useEffect(() => {
        getRelatedBooks();
        getCommentList();
    }, [])
    async function getRelatedBooks(){
        console.log("Obtaining related book to selectedBooks: ", selectedBook)
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${selectedBook}`)
        console.log("Getting related books to the search: ", response.data)

        setRelatedBooks(response.data.items)
    }

    async function getCommentList(){
        console.log("Obtaining commment list: ", selectedBook)
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/book_comments/${selectedBook}`)
        console.log("Getting comments about the booked searched: ", response.data)

        setCommentList(response.data.items)
    }
    //getComments, make axios call to book_comments/<str:book_id> using selectedBook from params
    //pass response (all comments for that book) into CommentsList as props

    //create route for BookPage, make sure to add a param called selectedBook

    return(
        <div>
            {/* <h1>Page for user {user.username}</h1> */}
            <iframe id="reader" type="text/html" width="640" height="360"></iframe>
            <CreateCommentForm/>
            {/* <CommentList commentList={commentList}/> */}
            <RelatedBooks books={relatedBooks} />
        </div>
    )
}

export default BookPage;