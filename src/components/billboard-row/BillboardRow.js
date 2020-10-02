import React from 'react';
import { useSelector } from 'react-redux';
import { GrPlayFill } from 'react-icons/gr';
import { FiInfo } from 'react-icons/fi';
import { IMAGE_URL } from '../../axios/API_END_POINTS';
import styles from './styles/BillboardRow.module.css';

const BillboardRow = () => {
  const moviesData = useSelector(state => state.movieCategory.movieCollection);
  const FilteredData = moviesData.filter(movies => movies.NetflixOriginals);
  let FilteredMovies;

  if (FilteredData) {
    /* eslint-disable  prefer-destructuring */
    FilteredMovies = FilteredData[0];
  }

  const randomKey = () => Math.floor(Math.random() * 20);

  const selectedMovie = FilteredMovies ? (FilteredMovies.NetflixOriginals[randomKey()]) : null;

  function truncate(str, num) {
    return str.length > num ? `${str.substr(0, num - 1)}...` : str;
  }

  return (
    <div className={styles['image-container']}>

      <div>
        <img
          className={styles.image}
          src={`${IMAGE_URL}${selectedMovie ? selectedMovie.backdrop_path : ''}`}
          alt="Billboard-cover"
        />
        <div className={styles.contents}>
          <h1 className={styles.description}>
            {truncate((selectedMovie ? selectedMovie.overview : ''), 132)}
          </h1>
          <button type="submit" className={styles.button}>
            <GrPlayFill className={styles.icons} />
            Play
          </button>
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            <FiInfo className={styles.icons} />
            More info
          </button>
        </div>
        <div className={styles.fadeBottom} />
      </div>

    </div>
  );
};

export default BillboardRow;
