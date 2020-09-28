import React from 'react'
import { useSelector } from 'react-redux'
import { image_url } from '../../axios/API_END_POINTS'
import styles from './styles/BillboardRow.module.css'
import { GrPlayFill } from 'react-icons/gr'
import { FiInfo } from 'react-icons/fi'

const BillboardRow = () => {
  const moviesData = useSelector(state => state.movieCategory.movieCollection)
  let FilteredMovies = moviesData.filter(movies => movies['NetflixOriginals'])?.[0]

  const randomKey = () => {
    return Math.floor(Math.random() * 20)
  }

  let selectedMovie = FilteredMovies ? (FilteredMovies['NetflixOriginals'][randomKey()]) : null

  function truncate(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  return (
    <div>
      <div className={styles['image-container']}>
        
          <div>
            <img
              className={styles.image}
              src={`${image_url}${selectedMovie?.backdrop_path}`}
              alt='Billboard-cover'
            />
            <div className={styles.contents}>
              <button className={styles.button}><GrPlayFill className={styles.icons}/>Play</button>
              <button className={`${styles.button} ${styles.button2}`}><FiInfo className={styles.icons}/>More info</button>
            </div>
            <h1 className={styles.description}>
              {truncate(selectedMovie?.overview, 132)}
            </h1>
            <div className={styles.fadeBottom}></div>
          </div>
  
      </div>
    </div>
  )
}

export default BillboardRow
