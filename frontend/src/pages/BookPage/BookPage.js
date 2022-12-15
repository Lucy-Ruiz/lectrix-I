import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RelatedBooks from '../../components/RelatedBooks/RelatedBooks';
import key from "../../API_Key.json";
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';
import CommentList from '../../components/CommentList/CommentList';
import BookDetails from '../../components/BookDetails/BookDetails';
import BookList from '../../components/BookList/BookList';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import "./BookPage.css"
import Image from "../../images/background_bookpage.jpg"

const BookPage = () => {
    const [relatedBooks, setRelatedBooks] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [bookDetails, setBookDetails] = useState({}); 
    const [bookList, setBookList] = useState({});
    const {selectedBook} = useParams();
    const [user, token] = useAuth();

    useEffect(() => {
        getCommentList();
        getBookDetails();
    }, [selectedBook])

    useEffect(() => {
        getRelatedBooks();
    }, [bookDetails])

    async function getRelatedBooks(){
        try {

            console.log("Obtaining related book to selectedBooks: ", selectedBook)
            let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${bookDetails.categories[0]}`)
            console.log("Getting related books to the search: ", response.data)
            setRelatedBooks(response.data.items)
        }
        catch(error){}

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
        console.log("Getting description of book searched: ", response.data)

        setBookDetails(response.data.volumeInfo)
    }

    function handleSubmitWishlist(event) {
        event.preventDefault();
        let newWishlistEntry = {
            book_id: selectedBook,
        }
        addBookToWishlist(newWishlistEntry);
    }

    async function addBookToWishlist(newWishlistEntry){
        let axiosConfig = {
            headers: {
                "Authorization": "Bearer " + token
            }
        };

        console.log("Adding book to wishlist: ", selectedBook)
        console.log("Displaying user: ", user)
        console.log("Displaying token: ", token)
        try{
        let response = await axios.post("http://127.0.0.1:8000/api/wish_list/", newWishlistEntry, axiosConfig)
        
        console.log("Displaying book added to wishlist: ", response)
        }
        catch(error){}
    }
    

    function handleSubmitBookshelf(event) {
        event.preventDefault();
        let newBookshelfEntry = {
            book_id: selectedBook,
        }
        addBookToBookshelf(newBookshelfEntry);
    }

    async function addBookToBookshelf(newBookshelfEntry){
        let axiosConfig = {
            headers: {
                "Authorization": "Bearer " + token
            }
        };
        try {
            console.log("Adding book to bookshelf: ", selectedBook)
            let response = await axios.post("http://127.0.0.1:8000/api/bookshelf/", newBookshelfEntry, axiosConfig)

            console.log("Displaying book added to bookshelf: ", response)
        }
        catch(error){}
    }

    async function addNewReview(newReview){
        let axiosConfig = {
            headers: {
                "Authorization": "Bearer " + token
            }
        };
        console.log("Adding comment: ", newReview)
        let response = await axios.post("http://127.0.0.1:8000/api/comments/", newReview, axiosConfig)
        console.log("Displaying comment: ", response)

        getCommentList();
    }

    return(
        <div>
            <img className='background_bookpage' src={Image}/>
            {/* <h1>Page for user {user.username}</h1> */}
            {/* <iframe id="reader" type="text/html" width="640" height="360"></iframe> */}
            {console.log('selectedBook in return', selectedBook)}
            <section className='allButtons'>
                <section className='navbutton'>
                    <form>
                        <button formaction="/" type="submit" className='button'>Back to Search</button>
                        {/* <Link to="/wishlist">Go to wishlist</Link> */}
                    </form>
                </section>
                <section className='navbutton'>
                <form>
                    <button formaction="/wishlist" type="submit" className='button'>Go to Wishlist</button>
                    {/* <Link to="/wishlist">Go to wishlist</Link> */}
                </form>
                </section>
                <section className='navbutton'>
                <form>
                    <button formaction="bookshelf" type="submit" className='button'>Go to Bookshelf</button>
                {/* <Link to="/bookshelf">Go to bookshelf</Link> */}
                </form>
                </section>
                <section className='navbutton'>
                <form onSubmit={handleSubmitWishlist}>
                    <button type="submit">Add to Wishlist</button>
                </form>
                </section>
                <section className='navbutton'>
                <form onSubmit={handleSubmitBookshelf}>
                    <button type="submit">Add to Bookshelf</button>
                </form>
                </section>
            </section>
            <BookDetails bookDetails={bookDetails}/>
            <CreateCommentForm addNewReview={addNewReview} book_id={selectedBook}/>
            <CommentList commentList={commentList}/>
            <RelatedBooks books={relatedBooks} />
        </div>
    )
}

export default BookPage;