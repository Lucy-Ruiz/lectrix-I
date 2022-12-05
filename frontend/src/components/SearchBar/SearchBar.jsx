import React, {useState} from "react";
// import "./SearchBar.css"

const SearchBar = (props) => {
    
    const[searchTerm, setSearchTerm] = useState(' ');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('searchTerm inside handleSubmit:', searchTerm);
        props.getBookResultsforSearchBar(searchTerm);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Search book: </label>
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar