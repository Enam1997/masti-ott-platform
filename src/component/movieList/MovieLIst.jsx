import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../services/GlobalApi";
import MovieCard from "../movieCard/MovieCard";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

const screenWidth = window.innerWidth;

const MovieLIst = ({ genereId }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getMoviesByGenerId(genereId);
  }, []);

  const getMoviesByGenerId = (genereId) => {
    GlobalApi.getMovieByGenreId(genereId).then((resp) => {
      setMovieList(resp.data.results);
      //   console.log(resp.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className="relative">
      <HiChevronDoubleLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => slideLeft(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5 transition-all duration-150 ease-in"
      >
        {movieList.map((movie, index) => (
          <MovieCard movieData={movie} />
        ))}
      </div>
      <HiChevronDoubleRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => slideRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieLIst;
