import BookPage from "../../pages/BookPage/BookPage";

const BookList = (props) => {
    return(
        <table>
            <tbody>
                {props.bookList.map((book_id, index) => {

                })}
            </tbody>
        </table>
    )
}

export default BookList;