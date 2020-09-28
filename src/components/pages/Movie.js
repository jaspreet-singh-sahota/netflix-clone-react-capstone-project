import React from 'react'
import { image_url } from '../../axios/API_END_POINTS'
import styles from './styles/Movie.module.css'
import { IoMdPlay } from 'react-icons/io'
import { IoMdAdd } from 'react-icons/io'


const Movie = ({ location }) => {
  const movie = location.state.movie
  
  function truncate(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  return (
    <div className={styles.container}>
      <div className={styles['info-container']}>
        <h1 className={styles.text}>{truncate(movie.name, 25) || truncate(movie.title, 25)}</h1>
        <h2 className={styles['movie-info']}>{movie.overview}</h2>
        <div className={styles['button-container']}>
          <div className={styles.buttons}>
            <button className={styles['play-button']}><IoMdPlay className={styles.icons} /> PLAY</button>
            <button className={styles['list-button']}><IoMdAdd className={styles.icons} /> MY LIST</button>
          </div>
        </div>
      </div>
      <div className={styles.block}></div>
      <div className={styles['image-container']}>
        <img
          className={styles.image}
          src={`${image_url}${movie.backdrop_path}`}
          alt={movie.name}
        />
      </div>

    </div>
  )
}

export default Movie
