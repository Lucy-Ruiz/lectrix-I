const BookDetails =(props) => {
    return(
        <table>
            <thead>
                <th>Details</th>
                    <tr>
                        {/* <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Description</th> */}
                    </tr>
            </thead>
            <tbody>
                <img src={props.bookDetails.imageLinks.thumbnail}/>
                {props.bookDetails.title}
                {props.bookDetails.authors[0]}
                {props.bookDetails.description}
            </tbody>
        </table>
    )
};

export default BookDetails;