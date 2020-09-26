import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { image_url } from '../../axios/API_END_POINTS'
import styles from './styles/Row.module.css'


function Row({ category, children, isNetflixRow }) {
  const StoreInfo = useSelector(state => state.movies)
  const [movies] = useState(StoreInfo.movieCollection)

  if (!movies[category]) {
    return null;
  }

  return (
    <div className={styles.row}>
      <h1 className={styles.title}>{children}</h1>

      <div className={styles["row-container"]}>
        {movies[category].map((movie) => (
          <img
            key={movie.id}
            className={isNetflixRow ? styles.imageLarge : styles.image}
            src={`${image_url}${isNetflixRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))
        }
      </div>
    </div>
  )
}

export default Row
