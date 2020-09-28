import React from 'react'
import Row from '../row/Row'
import styles from './styles/MoviesCategories.module.css'

const MovieCategory = ({location}) => {
  const category = location.state.category
  const title = location.state.title
  return (
    <div className={styles.container}>
      <Row isColumn category={category}>{title}</Row>
    </div>
  )
}

export default MovieCategory
