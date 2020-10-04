import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../axios/API_END_POINTS';
import styles from './styles/searchResult.module.css';

const SearchResult = ({ movies, setSearchActive, setIsImageClicked }) => {
  if (!movies) {
    return null;
  }

  const clearInputField = () => {
    document.querySelectorAll('input')[0].value = '';
    setSearchActive(false);
    setIsImageClicked(true);
  };

  return (
    <div>
      <div className={styles['container-result']}>
        {movies.map(movie => (
          <Link key={movie.id} onClick={clearInputField} to={{ pathname: `/:movie/${movie.id}`, state: { movie } }}>
            <img
              className={styles.image}
              src={`${IMAGE_URL}${movie.backdrop_path}`}
              alt={movie.name}
            />
          </Link>
        ))}
      </div>
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
  setSearchActive: PropTypes.func,
  setIsImageClicked: PropTypes.func,
};

SearchResult.defaultProps = {
  movies: [],
  setIsImageClicked: undefined,
  setSearchActive: undefined,
};

export default SearchResult;
