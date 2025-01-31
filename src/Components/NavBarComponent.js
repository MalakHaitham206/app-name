import React from "react";
import userLoginIcon from '../resources/home_page_icons/usenloginIcon.svg';
import searchIcon from '../resources/home_page_icons/searchIcon.svg';
import heartIcon from '../resources/home_page_icons/heartIcon.png';
import languageIcon from '../resources/home_page_icons/language-svgrepo-com.png';
import darkModeIcon from '../resources/home_page_icons/mode-dark-svgrepo-com.png';
import lightModeIcon from '../resources/home_page_icons/light-mode-svgrepo-com.png';
import cartIcon from '../resources/home_page_icons/cart-icon.png';
import logo from '../resources/home_page_imges/Meubel House_Logos-05.png';
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./SearchComponent";
import '../style folder/NavBar.css';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { showAllMovies, showFavorites } from "../redux_work/Actions/favorite_action";
import { useLanguage } from "../redux_work/context/languageContext";
import { useTheme } from "../redux_work/context/ThemeContext"; 


const Navbar = ({ onSearchChange }) => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const dispatch = useDispatch();
  
  const handleShowFavorites = () => {
    dispatch(showFavorites());
  };
  const state = useSelector((state) => state);
  const cartItems = useSelector(state => state.cart.items);
  const favorites = useSelector(state => state.myFavoriteReducer.favorites || []);

  const handleShowAllMovies = () => {
    dispatch(showAllMovies());
  };
  return (
    <div className="d-block">
      <nav className="navbar navbar-expand-lg navStyle" id="navBar">
        <div className="container-fluid navContainer">
          <a className="navbar-brand align-items-center" href="#" onClick={handleShowAllMovies}>
            <span className="WebsiteName">ScreenScape</span>
          </a>
          <button className="navbar-toggler" id="navToggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" style={{ color: "#F5F5F5" }}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5 navContainer">
              <li className="nav-item">
                <div className="search-container">
                  <FaSearch className="search-icon" />
                  <input type="text" placeholder="Search Movies..." className="search-input" onChange={(e) => onSearchChange(e.target.value)} />
                </div>
              </li>
            </ul>
            <span className="navbar-text">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 navContainer">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src={userLoginIcon} alt="User Login" />
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={toggleLanguage}>
                    <img src={languageIcon} alt="Translate Icon" />
                  </a>

                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleShowFavorites}>
                    <img src={heartIcon} alt="Favorites" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src={cartIcon} alt="Cart" />
                    <span className="badge bg-danger">{cartItems.length}</span>
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={toggleTheme}>
                    <img src={theme === "light" ? darkModeIcon : lightModeIcon} alt="Theme Icon" />
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;