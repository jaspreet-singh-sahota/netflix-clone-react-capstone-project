import React from 'react'
import Row from '../row/Row'

const MovieCategory = ({location}) => {
  const category = location.state.category
  const title = location.state.title
  return (
    <div>
      <Row category={category}>{title}</Row>
    </div>
  )
}

export default MovieCategory
