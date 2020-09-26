import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { image_url } from '../../axios/API_END_POINTS'


function Row({category, children, isNetflixRow }) {
  const StoreInfo = useSelector(state => state.movies)
  const [movies] = useState(StoreInfo.movieCollection)
  
  if (!movies[category]) {
    return null;
  }

  // console.log(movies)
  
  return (
    <div className="row">
      <h1 style={{color: 'white'}}>{children}</h1>

      {movies[category].map((movie) => (
            <img
        key={movie.id}
          src={`${image_url}${isNetflixRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
      />
          ))
      }
    </div>
  )
}

export default Row
