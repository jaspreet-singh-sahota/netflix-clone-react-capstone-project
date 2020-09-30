import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../axios/API_END_POINTS';
import styles from './styles/searchResult.module.css';
import { Link } from 'react-router-dom';

const SearchResult = ({ movies }) => {
  if (!movies) {
    return null;
  }

  return (
    <div className={styles['container-result']}>
      {movies.map(movie => (
        <Link to={{ pathname: `/movie/${movie.id}`, state: {movie}}}><img
          key={movie.id}
          className={styles.image}
          src={`${IMAGE_URL}${movie.backdrop_path}`}
          alt={movie.name}
        /></Link>
      ))}
    </div>
  );
};

SearchResult.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    0: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.string,
      backdrop_path: PropTypes.string,
      name: PropTypes.string,
    })),
  })),
};

SearchResult.defaultProps = {
  movies: [],
};

export default SearchResult;
