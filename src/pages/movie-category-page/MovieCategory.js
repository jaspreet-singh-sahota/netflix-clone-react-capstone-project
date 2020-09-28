import React from 'react'
import styles from './styles/MoviesCategories.module.css'
import Row from '../../components/row/Row'

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
