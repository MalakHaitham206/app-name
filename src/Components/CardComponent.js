import React, { useState } from "react";
import "../style folder/CardStyle.css";
import SocialShareModal from "./shareComponent";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from '../redux_work/Actions/favorite_action';
import { addToCart, removeFromCart } from '../redux_work/Actions/cartAction';




const StyledCard = ({ movieData }) => {
  const partOneOfUrl = "https://image.tmdb.org/t/p/w500/";
  const description = movieData.overview || "No description available";
  const [shareOpen, setShareOpen] = useState(false);
  const movieUrl = `${window.location.origin}/movie/${movieData.id || ""}`;
  const dispatch = useDispatch();

  // Correctly access the nested `favorites` state
  const favorites = useSelector(state => state.myFavoriteReducer.favorites || []);
  const cartItems = useSelector(state => state.cart.items || []);

  const isFavorite = favorites.some(movie => movie.id === movieData.id);
  const isInCart = cartItems.some(movie => movie.id === movieData.id);

  // Toggle favorite status
  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movieData.id));
    } else {
      dispatch(addToFavorites(movieData));
    }
  };
  const handleCartClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(movieData.id));
    } else {
      dispatch(addToCart(movieData));
    }
  };

  return (
    <div className="col-6 col-sm-3 col-lg-2">
      <div className="card" id="filmContainer">
        <span className="badge text-dark text-white position-absolute top-0 end-0 m-2 saleContianer">
          <span>{movieData.vote_average }</span>
        </span>
        <img src={partOneOfUrl + movieData.backdrop_path} className="card-img-top productImage" id="imageCard" alt="Syltherine" />
        <div className="card-body">
          <h5 className="card-title">{movieData.title}</h5>
          <p className="card-text text-muted">{description.substring(0, 70)} ...</p>
        </div>
        <div className="overlay d-flex flex-column justify-content-center align-items-center">
        <button className={isInCart?"hoverBtnOnCart mb-2":"hoverBtn mb-2"} onClick={handleCartClick}>
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
          <p className="d-flex gap-3">
            <a href="#" className="text-light hoverAction" onClick={(e) => { e.preventDefault(); setShareOpen(true); }}>
              <i className="bi bi-share-fill" style={{ paddingRight: "3px" }}></i> Share
            </a>
            <a href="#" className="text-light hoverAction" onClick={(e) => { e.preventDefault(); handleFavoriteClick(); }}>
              <i className={`bi bi-heart${isFavorite ? '-fill bg-red' : ''}`} style={{ paddingRight: "3px" }}></i> Like
            </a>
          </p>
        </div>
      </div>
      <SocialShareModal openFromCard={shareOpen} setOpenFromCard={setShareOpen} />
    </div>
  );
};

export default StyledCard;