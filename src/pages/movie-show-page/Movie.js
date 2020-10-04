import React, { useState } from 'react';
import { IoMdPlay, IoMdAdd } from 'react-icons/io';
import PropTypes from 'prop-types';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import { IMAGE_URL } from '../../axios/API_END_POINTS';
import styles from './styles/Movie.module.css';

const Movie = ({ location }) => {
  const { movie } = location.state;
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  if (!movie) {
    return null;
  }

  const handleStopVideo = () => {
    setIsPlaying(false);
  };

  const handleMovieUrl = movie => {
    movieTrailer((movie ? movie.name : null) || (movie ? movie.title : null) || '')
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch(error => error);
    setIsPlaying(true);
  };

  const handlePlayVideo = event => {
    event.target.pauseVideo();
  };

  const opts = {
    height: '100%',
    width: '100vw',
    playerVars: {
      autoplay: 1,
    },
  };

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
      {/* eslint-disable jsx-a11y/click-events-have-key-events */}
      {/* eslint-disable jsx-a11y/no-static-element-interactions */}
      {isPlaying ? <div onClick={handleStopVideo} className={styles.modal} /> : null}
      {
        isPlaying ? (
          <YouTube
            role="button"
            className={styles.video}
            videoId={trailerUrl.length ? trailerUrl : 'SIZpLFPQLLg'}
            opts={opts}
            onReady={handlePlayVideo}
          />
        )
          : null
      }
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
