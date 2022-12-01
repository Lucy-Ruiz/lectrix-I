import React, { useState }from "react";
import "./CreateCommentForm.css";


const CreateCommentForm = (props) => {
    const[reader, setReader] = useState(' ');
    const[review, setReview] = useState(' ');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            reader: reader,
            review: review,
        };
        console.log(newReview);
        props.addNewReview(newReview);
    }

    return(
        <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
                <label className="text-update-input">Reader</label>
                <input type="text" className="input-reader" value={reader} onChange={(event) => setReader(event.target.value)}/>
            </div>
            <div className="form-group">
                <label className="text-update-input">Review</label>
                <input type="text" className="input-review" value={review} onChange={(event) => setReview(event.target.value)}/>
            </div>

        </form>
    );
}

export default CreateCommentForm;