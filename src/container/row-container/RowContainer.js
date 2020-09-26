import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from '../../axios/axios'
import Row from '../../components/row/Row'

const RowContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('jassi')
    dispatch(axios())
  }, [])

  return (
    <div>
      <Row>Netflix</Row>
      <Row>Netflix</Row>
    </div>
  )
}

export default RowContainer
