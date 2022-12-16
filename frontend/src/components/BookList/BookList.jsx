import BookPage from "../../pages/BookPage/BookPage";
import { Link } from "react-router-dom";
import "./BookList.css"

const BookList = (props) => {
    return(
        <section className="booklist-items">
                {
                props.bookList.map &&
                props.bookList.map((book, index) => {
                    let linkUrl=`/book/${book.data.id}`
                    return(
                        <section className="booklist">
                            <img src={book.data.volumeInfo.imageLinks.thumbnail}/>
                            <Link className="booklist-description" to={linkUrl}>{book.data.volumeInfo.title}</Link>
                        </section>
                    )
                })}
        </section>
    )
}

export default BookList;