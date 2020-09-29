import React from 'react'
import { IMAGE_URL } from '../../axios/API_END_POINTS'
import styles from './styles/searchResult.module.css'

const SearchResult = ({movies}) => {
  
  if (!movies) {
    return null
  }

  return (
    <div className={styles['container-result']}>
      {movies.length ? movies.map((movie) => (
        <img
          key={movie.id}
          className={styles.image}
          src={`${IMAGE_URL}${movie.backdrop_path}`}
          alt={movie.name}
        />
      )) : null
      }
    </div>
  )
}

export default SearchResult
