import parse from 'html-react-parser';
import "./BookDetails.css"

const BookDetails =(props) => {
    return(
        <div>
            {props.bookDetails.title &&
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>    
                                <img className="selectedBookThumbnail"src={props.bookDetails.imageLinks.thumbnail}/>
                            </th>
                            <th>
                                <h2>{props.bookDetails.title}</h2> 
                                <h4>{props.bookDetails.authors[0]}</h4>       
                                <h4 className='paragraphDescription'>{parse(props.bookDetails.description)}</h4>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            }
        </div>
    )
};

export default BookDetails;