import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../services/GlobalApi";
import MovieCard from "../movieCard/MovieCard";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import HrMovieCard from "../hrMovieCard/HrMovieCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

let screenWidth =window.innerWidth;;

const MovieLIst = ({ genereId, indexValue }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  // useEffect(() => {
  //   screenWidth =window.innerWidth;
  // }, [window.innerWidth]);

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
    element.scrollLeft -= 500;
  };

  return (
    // <div className="relative">
    //   <HiChevronDoubleLeft
    //     className={`hidden md:block text-white text-[30px] absolute mx-8  cursor-pointer z-10 ${indexValue %3 ==0 ? 'mt-[80px]'  : 'mt-[150px]'}`}
    //     onClick={() => slideLeft(elementRef.current)}
    //   />
    //   <div
    //     ref={elementRef}
    //     className="flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5 transition-all duration-150 ease-in scroll-smooth"
    //   >
    //     {movieList.map((movie, index) => (
    //       <>
    //       {indexValue %3 ==0 ? <HrMovieCard movieData={movie}/> :<MovieCard movieData={movie} />}

    //       </>
    //     ))}
    //   </div>
    //   <HiChevronDoubleRight
    //     className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer right-5 z-10 ${indexValue %3 ==0 ? 'mt-[80px]'  : 'mt-[150px]'}`}
    //     onClick={() => slideRight(elementRef.current)}
    //   />
    // </div>
    <>
      <Swiper
        slidesPerView={screenWidth < 900 ? 3 : screenWidth < 1500 ? 5 : 8}
        spaceBetween={0}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {movieList.map((movie, index) => (
          <>
            {indexValue % 3 == 0 ? (
              <SwiperSlide>
                {/* <HrMovieCard movieData={movie} /> */}
                <div className="pt-5 px-3 pb-5">
                  <MovieCard movieData={movie} />
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide>
                <div className="pt-5 px-3 pb-5">
                  <MovieCard movieData={movie} />
                </div>
              </SwiperSlide>
            )}
          </>
        ))}

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default MovieLIst;
