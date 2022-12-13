import BookPage from "../../pages/BookPage/BookPage";

const BookList = (props) => {
    return(
        <table>
            <tbody>
                {
                props.wishlistBooks.map &&
                props.wishlistBooks.map((book, index) => {
                    return(
                        <tr key={index}>
                            <td>{book.data.volumeInfo.title}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default BookList;