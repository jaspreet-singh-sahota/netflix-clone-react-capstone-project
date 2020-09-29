import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../axios/API_END_POINTS';
import styles from './styles/Row.module.css';

function Row({
  category, children, isNetflixRow, isColumn,
}) {
  const data = useSelector(state => state.movieCategory.movieCollection);
  const FilteredData = data.filter(mov => mov[category]);
  const FilteredMovies = FilteredData ? FilteredData[0] : [];
  let movieKeys;

  if (FilteredMovies) {
    movieKeys = Object.keys(FilteredMovies[category]);
  }

  return (
    <div className={styles.row}>
      <h1 className={styles.title}>{children}</h1>

      <div className={isColumn ? styles.column : styles['row-container']}>
        {movieKeys ? movieKeys.map(key => {
          const movie = FilteredMovies[category][key];
          return (
            <Link key={movie.id} className={isColumn ? styles['column-link'] : styles.link} to={{ pathname: `movie/${movie.id}`, state: { movie } }}>
              <img
                key={movie.id}
                className={isNetflixRow ? styles.imageLarge : styles.image}
                src={`${IMAGE_URL}${isNetflixRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            </Link>
          );
        }) : null}
      </div>
    </div>
  );
}

Row.defaultProps = {
  category: 'Trending',
  children: 'Trending',
  isNetflixRow: '',
  isColumn: '',
};

Row.propTypes = {
  category: PropTypes.string,
  children: PropTypes.string,
  isNetflixRow: PropTypes.bool,
  isColumn: PropTypes.bool,
};

export default Row;
