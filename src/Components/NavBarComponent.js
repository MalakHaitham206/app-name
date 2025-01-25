import React from "react";
import userLoginIcon from '../resources/home_page_icons/usenloginIcon.svg';
import searchIcon from '../resources/home_page_icons/searchIcon.svg';
import heartIcon from '../resources/home_page_icons/heartIcon.png';
import cartIcon from '../resources/home_page_icons/cart-icon.png';
import logo from '../resources/home_page_imges/Meubel House_Logos-05.png';
import "bootstrap/dist/css/bootstrap.min.css";
import '../style folder/NavBar.css';

const Navbar = () => {
    return (
        <div className="d-block"> <nav className="navbar navbar-expand-lg navStyle" id="navBar">
        <div className="container-fluid navContainer">
            <a className="navbar-brand" href="#">
            
                <span className="WebsiteName">ScreenScape</span>
            </a>
            <button
                className="navbar-toggler"
                id="navToggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars" style={{ color: "#F5F5F5" }}></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5 navContainer">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Shop
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 navContainer">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img
                                    src={userLoginIcon}
                                    alt="User Login"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img
                                    src={searchIcon}
                                    alt="Search"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img
                                    src={heartIcon}
                                    alt="Favorites"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img
                                    src={cartIcon}
                                    alt="Cart"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="bi bi-box-arrow-right"></i>
                            </a>
                        </li>

                    </ul>
                </span>
            </div>
        </div>
    </nav></div>
       
    );
};

export default Navbar;
