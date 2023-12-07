import React from "react";
import GenereList from "../../constant/GenereList";
import MovieLIst from "../../component/movieList/MovieLIst";

const GenreMovieList = () => {
  return (
    <div>
      {GenereList.genere.map(
        (item, index) =>
          // index <= 4 && 
          (
            <div key={index} className="p-2 px-2 md:p-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieLIst genereId={item.id} indexValue={index} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
