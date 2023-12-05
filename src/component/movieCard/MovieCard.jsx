import React from "react";

const Image_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movieData }) => {
  return (
    <>
      <img
        src={Image_BASE_URL + movieData.poster_path}
        alt=""
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in"
      />
    </>
  );
};

export default MovieCard;
