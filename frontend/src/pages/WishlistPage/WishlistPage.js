import useAuth from "../../hooks/useAuth";
import axios from "axios";
import React, {useState, useEffect} from "react";
import BookList from "../../components/BookList/BookList";
import Image from "../../images/wishlist_background.jpg";
import "./WishlistPage.css";


const WishlistPage = () => {
    const [user, token] = useAuth();
    const [wishlistBooks, setWishlistBooks] = useState({});

    useEffect(() => {
        getWishlist();
    }, [])


    async function getWishlist(){
        let axiosConfig = {
            headers: {
                "Authorization": "Bearer " + token
            }
        };

        console.log("Getting wishlist books: ")
        console.log("Displaying user: ", user)
        console.log("Displaying token: ", token)
        let response = await axios.get("http://127.0.0.1:8000/api/wish_list/", axiosConfig)

        console.log("Getting wishlist: ", response.data)

        let booksDetailsFromWishlist = await axios.all(response.data.map((book) => axios.get(`https://www.googleapis.com/books/v1/volumes/${book.book_id}`)))

        console.log(booksDetailsFromWishlist)
        setWishlistBooks(booksDetailsFromWishlist);
    }
    return(
        <div> 
            <img className="wishlist_background" src={Image}/>
            <h1 className="wishlist-title">Wishlist</h1>
            <section>
            <BookList className="wishlist-books" bookList={wishlistBooks}/>
            </section>   
        </div>
    )
};

export default WishlistPage;