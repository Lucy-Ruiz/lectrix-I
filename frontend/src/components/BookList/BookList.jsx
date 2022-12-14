import BookPage from "../../pages/BookPage/BookPage";
import { Link } from "react-router-dom";

const BookList = (props) => {
    return(
        <table>
            <tbody>
                {
                props.bookList.map &&
                props.bookList.map((book, index) => {
                    let linkUrl=`/book/${book.data.id}`
                    return(
                        <tr key={index}>
                            <img src={book.data.volumeInfo.imageLinks.thumbnail}/>
                            <Link to={linkUrl}>{book.data.volumeInfo.title}</Link>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default BookList;