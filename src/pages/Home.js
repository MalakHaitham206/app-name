import React, { useState, useEffect, useCallback } from "react";
import StyledCard from "../Components/CardComponent";
import Pagination from "../Components/PaginationComponent";
import Navbar from "../Components/NavBarComponent";
import "../style folder/Home.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLanguage } from "../redux_work/context/languageContext";
import { useTheme } from "../redux_work/context/ThemeContext"; 


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;
  
  const favorites = useSelector(state => state.myFavoriteReducer.favorites || []);
  const showFavorites = useSelector(state => state.myFavoriteReducer.showFavorites);
  const cartItems = useSelector(state => state.cart.items || []);
  const showCart = useSelector(state => state.cart.showCart);
  const { language } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=${language}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTU4MGRiNWE5YTM1YWMyOTg3NmJlMjljNjMwMTlmNiIsIm5iZiI6MTczNDYxMTA3OS44NTUsInN1YiI6IjY3NjQxMDg3ZGJmMDhlNzg2NGFiMWYzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D3OjC2lt6zJiS5WJ17UG4sYAs8zgSKGphJ5nwIvHODE`,
            },
          }
        );
        console.log("Movies fetched with language:", language);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [language]); 

const filteredMovies = searchQuery
  ? movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : showFavorites
  ? favorites
  : showCart
  ? cartItems
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
    setCurrentPage(1);
  };

  return (
    <div className={`homeContent ${theme}`}>
      <Navbar onSearchChange={handleSearchChange} />
      <div className="movie-grid">
        {currentMovies.map((movie) => (
          <StyledCard key={movie.id} movieData={movie} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} numberOfMovies={currentMovies.length}/>
    </div>
  );
};

export default Home;