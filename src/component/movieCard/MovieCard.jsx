import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeHolderImage from "../../assets/images/logo-white.png";

const Image_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movieData }) => {
  return (
    <div className="hover:cursor-pointer ">
      <LazyLoadImage
        alt={"hotelImage"}
        height={"100%"}
        src={Image_BASE_URL + movieData.poster_path}
        width={"100%"}
        // placeholderSrc={placeHolderImage}
        effect="blur"
        className="rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in"
        // style={{
        //   maxHeight: "500px",
        //   minHeight: "200px",
        // }}
      />
      {/* <img
        src={Image_BASE_URL + movieData.poster_path}
        alt=""
        className="rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 hover:cursor-pointer transition-all duration-150 ease-in"
      /> */}
    </div>
  );
};

export default MovieCard;
