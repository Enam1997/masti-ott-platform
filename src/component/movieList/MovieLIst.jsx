import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../services/GlobalApi";
import MovieCard from "../movieCard/MovieCard";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import HrMovieCard from "../hrMovieCard/HrMovieCard";

const screenWidth = window.innerWidth;

const MovieLIst = ({ genereId, indexValue }) => {
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
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -=  500;
  };

  return (
    <div className="relative">
      <HiChevronDoubleLeft
        className={`hidden md:block text-white text-[30px] absolute mx-8  cursor-pointer z-10 ${indexValue %3 ==0 ? 'mt-[80px]'  : 'mt-[150px]'}`}
        onClick={() => slideLeft(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5 transition-all duration-150 ease-in scroll-smooth"
      >
        {movieList.map((movie, index) => (
          <>
          {indexValue %3 ==0 ? <HrMovieCard movieData={movie}/> :<MovieCard movieData={movie} />}
          
          </>
        ))}
      </div>
      <HiChevronDoubleRight
        className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer right-5 z-10 ${indexValue %3 ==0 ? 'mt-[80px]'  : 'mt-[150px]'}`}
        onClick={() => slideRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieLIst;
