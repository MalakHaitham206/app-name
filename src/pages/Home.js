import React, { useState, useEffect, useCallback } from "react";
import StyledCard from "../Components/CardComponent";
import Pagination from "../Components/PaginationComponent";
import Navbar from "../Components/NavBarComponent"; // Ensure Navbar is imported
import "../style folder/Home.css";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;

  // Fetch movies from API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTU4MGRiNWE5YTM1YWMyOTg3NmJlMjljNjMwMTlmNiIsIm5iZiI6MTczNDYxMTA3OS44NTUsInN1YiI6IjY3NjQxMDg3ZGJmMDhlNzg2NGFiMWYzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D3OjC2lt6zJiS5WJ17UG4sYAs8zgSKGphJ5nwIvHODE`,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // Filter movies based on search query
  const filteredMovies = searchQuery
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : movies;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handlePageChange = useCallback(
    (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="homeContent">
      {/* Pass handleSearchChange to Navbar */}
      <Navbar onSearchChange={handleSearchChange} />
      <div className="movie-grid">
        {currentMovies.map((movie) => (
          <StyledCard key={movie.id} movieData={movie} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;
