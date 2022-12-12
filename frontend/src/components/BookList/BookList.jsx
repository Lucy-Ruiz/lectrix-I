import BookPage from "../../pages/BookPage/BookPage";

const BookList = (props) => {
    return(
        <table>
            <tbody>
                {props.bookList.map((book_id, index) => {
                    return(
                        <tr key={index}>
                            <td>{book_id}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default BookList;