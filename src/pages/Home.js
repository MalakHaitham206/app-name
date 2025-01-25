import React, { useState, useEffect } from "react";
import Navbar from "../Components/NavBarComponent";
import StyledCard from "../Components/CardComponent";
import Pagination from "../Components/PaginationComponent";
import "../style folder/Home.css";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const moviesPerPage = 10;
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            headers: {
              Authorization: `Bearer YOUR_API_KEY_HERE`,
            },
          }
        );
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error.response || error.message);
      }
    };

    fetchMovies();
  },[]);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [movies, searchQuery]);

  useEffect(() => {
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    setCurrentMovies(filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie));
    setTotalPages(Math.ceil(filteredMovies.length / moviesPerPage));
  }, [filteredMovies, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
    <Navbar setSearchQuery={setSearchQuery} />
      <div className="movie-grid">
      
        {currentMovies.map((movie) => (
          <StyledCard key={movie.id} movieData={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Home;
