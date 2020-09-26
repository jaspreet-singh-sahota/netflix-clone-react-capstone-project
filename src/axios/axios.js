import axios from 'axios'
import requests from './API_END_POINTS'

import {
  fetchMoviesCollectionSuccess,
  fetchMoviesCollectionRequest,
  fetchMoviesCollectionFailure
} from '../redux/actions/moviesAction'


const fetchMovieCollection = () => {
  return (dispatch) => {
    dispatch(fetchMoviesCollectionRequest)
    Object.entries(requests).map((key) => {
      axios.get(key[1])
        .then(response => {
          const movieData = response.data.results
          dispatch(fetchMoviesCollectionSuccess(movieData, key[0]))
        })
        .catch(error => {
          const errorMessage = error.message
          dispatch(fetchMoviesCollectionFailure(errorMessage))
        })
    })
  }
}

export default fetchMovieCollection
