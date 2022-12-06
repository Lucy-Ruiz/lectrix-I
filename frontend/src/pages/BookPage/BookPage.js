import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RelatedBooks from '../../components/RelatedBooks/RelatedBooks';
import key from "../../API_Key.json";
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';
import CommentList from '../../components/CommentList/CommentList';
import BookDetails from '../../components/BookDetails/BookDetails';

const BookPage = () => {
    const [relatedBooks, setRelatedBooks] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [bookDetails, setBookDetails] = useState([]);
    const {selectedBook} = useParams()
    useEffect(() => {
        getRelatedBooks();
        getCommentList();
        getBookDetails();
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

        setCommentList(response.data)
    }

    async function getBookDetails(){
        console.log("Obtaining details of selected book: ", selectedBook)
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${selectedBook}`)
        console.log("Getting description of book searched: ", response.data.volumeInfo.description)

        setBookDetails(response.data.volumeInfo)
    }
    //create bookDetails state variable
    //make axios call to get book details by id (using selectedBook), save response to state
    //use bookDetails to display description and get thumbnail link to insert to <img src="">

    return(
        <div>
            {/* <h1>Page for user {user.username}</h1> */}
            <iframe id="reader" type="text/html" width="640" height="360"></iframe>
            <BookDetails bookDetails={bookDetails}/>
            <CreateCommentForm/>
            <CommentList commentList={commentList}/>
            <RelatedBooks books={relatedBooks} />
        </div>
    )
}

export default BookPage;