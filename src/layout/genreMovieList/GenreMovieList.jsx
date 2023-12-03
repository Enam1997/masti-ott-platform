import React from 'react'
import GenereList from '../../constant/GenereList';
import MovieLIst from '../../component/movieList/MovieLIst';

const GenreMovieList = () => {
  return (
    <div>
      {
        GenereList.genere.map((item, index)=>index<=4 &&(
          <div className='p-8 px-8 md:px-16'>
            <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
            <MovieLIst genereId={item.id}/>
          </div>
        ))
      }
    </div>
  )
}

export default GenreMovieList;