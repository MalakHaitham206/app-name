import React from "react";
import "../style folder/CardStyle.css"
import imageCard from "../resources/home_page_imges/bedRoom_image.png";
import { hover } from "@testing-library/user-event/dist/hover";
const partOneOfUrl="https://image.tmdb.org/t/p/w500/";
const StyledCard = ({ movieData }) => {
const description=`${movieData.overview}`;

    return (
      
            <div className="col-6 col-sm-3 col-lg-2 ">
                <div className="card">
                    <span
                        className="badge text-dark text-white position-absolute top-0 end-0 m-2  saleContianer">
                        <span>{movieData.vote_average}</span>
                    </span>
                    <img src={partOneOfUrl+movieData.backdrop_path} className="card-img-top productImage" id="imageCard"
                        alt="Syltherine" />
                    <div className="card-body">
                        <h5 className="card-title ">{movieData.title}</h5>
                        <p className="card-text text-muted">{description.substring(0,70)} ...</p>
                    </div>
                    <div className="overlay d-flex flex-column justify-content-center align-items-center ">
                        <button className="hoverBtn mb-2">Add to cart</button>
                        <p className="d-flex gap-3">
                            <a href="#" className="text-light hoverAction"><i className="bi bi-share-fill"
                                style={{ paddingRight: "3px" }}></i>Share</a>
                            <a href="#" className="text-light hoverAction" style={{ paddingRight: "3px", }}> <i
                                className="bi bi-arrow-left-right" style={{ paddingRight: "3px" }}></i>Compare</a>
                            <a href="#" className="text-light hoverAction"><i className="bi bi-heart"
                                style={{ paddingRight: "3px" }}></i>Like</a>
                        </p>
                    </div>
                </div>
            </div>
     

    );


}



export default StyledCard;
