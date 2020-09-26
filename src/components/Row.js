import React, { useEffect, useState } from 'react';
import axios from '../axios/axios'
import { useDispatch, useSelector } from "react-redux";


function Row({ children }) {
  const StoreInfo = useSelector(state => state.movies)
  const [movies] = useState(StoreInfo.movieCollection)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(axios())
  }, [])
  
  return (
    <div className="row">
      {
        console.log(movies.Trending)
        
      }
    </div>
  )
}

export default Row
