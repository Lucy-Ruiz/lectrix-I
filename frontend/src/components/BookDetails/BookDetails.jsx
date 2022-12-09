import parse from 'html-react-parser';

const BookDetails =(props) => {
    return(
        <div>
            <h1>Details</h1>
            {props.bookDetails.title &&
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>    
                                <img src={props.bookDetails.imageLinks.thumbnail}/>
                            </th>
                            <th>
                                <h2>{props.bookDetails.title}</h2> 
                                <h4>{props.bookDetails.authors[0]}</h4>       
                                <h4>{parse(props.bookDetails.description)}</h4>
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