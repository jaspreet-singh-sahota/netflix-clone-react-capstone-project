import React from 'react'
import {image_url} from '../../axios/API_END_POINTS'
import styles from './styles/searchResult.module.css'

const SearchResult = ({movies}) => {
  return (
    <div className={styles['container-result']}>
      {movies?.length ? movies.map((movie) => (
        <img
          key={movie.id}
          className={styles.image}
          src={`${image_url}${movie.backdrop_path}`}
          alt={movie.name}
        />
      )) : null
      }
    </div>
  )
}

export default SearchResult
