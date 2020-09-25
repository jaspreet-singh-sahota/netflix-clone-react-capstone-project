import axios from 'axios'

import {
  fetchMoviesCollectionSuccess,
  fetchMoviesCollectionRequest,
  fetchMoviesCollectionFailure
} from '../redux/actions/moviesAction'


const fetchMovieCollection = () => {
  return (dispatch) => {
    dispatch(fetchMoviesCollectionRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const movieData = response.data
        console.log(response.data)
        dispatch(fetchMoviesCollectionSuccess(movieData))
      })
      .catch(error => {
        const errorMessage = error.message
        dispatch(fetchMoviesCollectionFailure(errorMessage))
      })
  }
}

export default fetchMovieCollection
