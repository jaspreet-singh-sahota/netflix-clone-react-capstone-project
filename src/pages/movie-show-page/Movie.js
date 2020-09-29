import React, { useState, useEffect } from 'react';
import { IoMdPlay, IoMdAdd } from 'react-icons/io';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../axios/API_END_POINTS';
import styles from './styles/Movie.module.css';
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const Movie = ({ location }) => {
  const { movie } = location.state;
  const [trailerUrl, setTrailerUrl] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  if (!movie) {
    return null;
  }

  function truncate(str, num) {
    return str.length > num ? `${str.substr(0, num - 1)}...` : str;
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles['info-container']}>
          <h1 className={styles.text}>
            {
              (movie.name ? truncate(movie.name, 25) : null)
              || (movie.title ? truncate(movie.title, 25) : null)
            }
          </h1>
          <h2 className={styles['movie-info']}>{truncate(movie.overview, 385)}</h2>
          <div className={styles['button-container']}>
            <div className={styles.buttons}>
              <button type="submit" onClick={() => handleMovieUrl(movie)} className={styles['play-button']}>
                <IoMdPlay className={styles.icons} />
                {' '}
                PLAY
            </button>
              <button type="submit" className={styles['list-button']}>
                <IoMdAdd className={styles.icons} />
                {' '}
                MY LIST
            </button>
            </div>
          </div>
        </div>
        <div className={styles.block} />
        <div className={styles['image-container']}>
          <img
            className={styles.image}
            src={`${IMAGE_URL}${movie.backdrop_path}`}
            alt={movie.name}
          />
        </div>
      </div>
      {isPlaying ? <div onClick={handleStopVideo} className={styles.modal}></div> : null}
      {isPlaying  && <YouTube className={styles.video} videoId={trailerUrl} opts={opts} onReady={handlePlayVideo} />}
    </div>
  );
};

Movie.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.shape({
      movie: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        overview: PropTypes.string,
        backdrop_path: PropTypes.string,
      }),
    }),
  }),
};

Movie.defaultProps = {
  location: PropTypes.shape({
    pathname: '/',
    state: PropTypes.shape({
      movie: PropTypes.shape({
        name: 'Dark Desire',
        title: 'Dark Desire',
        overview: 'Married Alma spends a fateful weekend away from home that ignites passion, ends in tragedy and leads her to question the truth about those close to her.',
        backdrop_path: '/vmVeGFUTXEKwAUpFH9bZwow9zIk.jpg',
      }),
    }),
  }),
};

export default Movie;
