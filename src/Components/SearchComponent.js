import React from "react";
import "../style folder/SearchStyle.css";
import "../style folder/SearchStyle.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search Movies..." className="search-input" />
    </div>
  );
};

export default Search;
