import React, { useEffect, useState } from 'react';
import axios from '../axios/axios'
import { useDispatch, useSelector } from "react-redux";


function Row({ title, children }) {
  const StoreInfo = useSelector(state => state.movies)
  const [movies , setMovies] = useState(StoreInfo.movieCollection)
  console.log(movies)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(dispatch(axios()))
  }, [])
  console.log(movies)
  return (
    <div className="row">
      <h2>{children}</h2>
    </div>
  )
}

export default Row
