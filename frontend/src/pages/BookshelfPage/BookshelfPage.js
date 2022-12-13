import useAuth from "../../hooks/useAuth";
import axios from "axios";
import React, {useState, useEffect} from "react";
import BookList from "../../components/BookList/BookList";


const BookshelfPage = () => {
    const [user, token] =useAuth();
    const [bookshelfBooks, setbookshelfBooks] = useState({});
    useEffect(() => {
        getBookshelf();
    }, [])

    async function getBookshelf(){
        let axiosConfig = {
            headers: {
                "Authorization": "Bearer " + token
            }
        };

        console.log("Getting bookshelf books: ")
        console.log("Displaying user: ", user)
        console.log("Displaying token: ", token)
        let response = await axios.get("http://127.0.0.1:8000/api/bookshelf/", axiosConfig)

        console.log("Getting bookshelf: ", response.data)

        let bookDetailsFromBookshelf = await axios.all(response.data.map((book) => axios.get(`https://www.googleapis.com/books/v1/volumes/${book.book_id}`)))

        console.log(bookDetailsFromBookshelf)
        setbookshelfBooks(bookDetailsFromBookshelf);
    }
    return(
        <div>
        <h1>Bookshelf</h1>
        <BookList bookList={bookshelfBooks}/>
        </div>
    )
};

export default BookshelfPage;