/* eslint-disable  import/no-named-as-default-member */
/* eslint-disable  import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/MoviesCategories.module.css';
import Row from '../../components/row/Row';

const MovieCategory = ({ location }) => {
  const { category } = location.state;
  const { title } = location.state;
  return (
    <div className={styles.container}>
      <Row isColumn category={category}>{title}</Row>
    </div>
  );
};

MovieCategory.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.shape({
      category: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};

MovieCategory.defaultProps = {
  location: PropTypes.shape({
    pathname: '/',
  }),
};

export default MovieCategory;
