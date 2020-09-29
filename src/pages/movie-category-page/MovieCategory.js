/* eslint-disable  import/no-named-as-default-member */
/* eslint-disable  import/no-named-as-default */

import React from 'react';
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

export default MovieCategory;
