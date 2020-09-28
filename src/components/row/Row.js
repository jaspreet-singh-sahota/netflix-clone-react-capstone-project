import React from 'react';
import { useSelector } from "react-redux";
import { image_url } from '../../axios/API_END_POINTS'
import styles from './styles/Row.module.css'
import { Link } from 'react-router-dom';


function Row({ category, children, isNetflixRow }) {
  const data = useSelector(state => state.movieCategory.movieCollection )

  let  FilteredMovies = data.filter(mov => mov[category])?.[0]
  let movieKeys
  if (FilteredMovies) {
    movieKeys = Object.keys(FilteredMovies[category])
  }
  
  return (
    <div className={styles.row}>
      <h1 className={styles.title}>{children}</h1>

      <div className={styles["row-container"]}>
        {movieKeys?.map((key) => {
          const movie = FilteredMovies[category][key]
          return(
          <Link key={movie.id} className={styles.link} to={{ pathname: `movie/${movie.id}`, state: { movie } }}>
            <img
              key={movie.id}
              className={isNetflixRow ? styles.imageLarge : styles.image}
              src={`${image_url}${isNetflixRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          </Link>
        )})
        }
      </div>
    </div>
  )
}

export default Row
