import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../services/GlobalApi";
import MovieCard from "../movieCard/MovieCard";
import HrMovieCard from "../hrMovieCard/HrMovieCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import MovieListSkelton from "../../utils/skelton/MovieListSkelton";

let screenWidth = window.innerWidth;

const MovieLIst = ({ genereId, indexValue }) => {
  const [movieList, setMovieList] = useState([]);
  const [generMovieDataLoading, SetGenerMovieDataLoading] = useState(false);

  const elementRef = useRef();

  useEffect(() => {
    getMoviesByGenerId(genereId);
  }, []);

  const getMoviesByGenerId = (genereId) => {
    SetGenerMovieDataLoading(true);
    GlobalApi.getMovieByGenreId(genereId).then((resp) => {
      setMovieList(resp.data.results);
      //   console.log(resp.data.results);
      SetGenerMovieDataLoading(false);
    });
  };

  return (
    <>
      <Swiper
        slidesPerView={screenWidth < 900 ? 2 : screenWidth < 1500 ? 5 : 8}
        spaceBetween={1}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {generMovieDataLoading ? (
          <MovieListSkelton />
        ) : (
          <>
            {movieList.map((movie, index) => (
              <div key={index}>
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
              </div>
            ))}
          </>
        )}
      </Swiper>
    </>
  );
};

export default MovieLIst;
