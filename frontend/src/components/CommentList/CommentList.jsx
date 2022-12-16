import { getActiveElement } from "@testing-library/user-event/dist/utils";
import BookPage from "../../pages/BookPage/BookPage";

const CommentList = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Text</th>
                    {/* <th>Book ID</th>
                    <th>User ID</th> */}
                </tr>
            </thead>
            <tbody>
                {props.commentList.map((comment, index) => {
                    return(
                        <tr key={index}>
                            <td>{comment.id}</td>
                            <td>{comment.text}</td>
                            {/* <td>{comment.book_id}</td>
                            <td>{comment.user_id}</td> */}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default CommentList;