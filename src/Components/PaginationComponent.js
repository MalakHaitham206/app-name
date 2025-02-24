import React from "react";
import "../style folder/paginationStyle.css";


const Pagination = ({ currentPage, totalPages, onPageChange ,numberOfMovies}) => {
  
  return (
    <div className="pagination-container">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? "page-button active" : "page-button"}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button 
        className= {currentPage === totalPages||numberOfMovies==0?"d-none":"page-button next "}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages||numberOfMovies==0}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
