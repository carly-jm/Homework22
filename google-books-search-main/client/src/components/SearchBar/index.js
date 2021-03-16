import React from "react";
import "./style.css";

// Searchbar component for our search page where the user can type in the input field
export function SearchBar(props) {
  return (
    <div className="container mb-5">
      <div className="card">
        <input type="text" className="bar form-control text-center" placeholder="What are you looking for?" onChange={props.handleSearchChange} />
      </div>
      <button className="btn btn-primary mt-4" id="searchBtn" onClick={props.searchBooks}>Search Books</button>
    </div>
  );
};

export default SearchBar;