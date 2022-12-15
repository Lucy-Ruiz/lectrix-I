import React, { useState }from "react";
// import "./CreateCommentForm.css";


const CreateCommentForm = (props) => {
    const[review, setReview] = useState(' ');

    function handleSubmit(event) {
        event.preventDefault();
        let newReview = {
            text: review,
            book_id: props.book_id,
        };
        console.log(newReview);
        props.addNewReview(newReview);
    }

    return(
        <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
                <label className="text-update-input"></label>
                <input type="text" className="input-review" value={review} onChange={(event) => setReview(event.target.value)}/>
                <button type="submit">Add Review</button>
            </div>
        </form>
    );
}

export default CreateCommentForm;