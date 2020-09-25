import {
  fetchMoviesCollectionSuccess,
  fetchMoviesCollectionRequest,
  fetchMoviesCollectionFailure
} from '../redux/actions/moviesAction'

export const fetchMovieCollection = () => {

  return (dispatch) => {
    dispatch(fetchMoviesCollectionRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const movieData = response.data
        dispatch(fetchMoviesCollectionSuccess(movieData))
      })
      .catch(error => {
        const errorMessage = error.message
        dispatch(fetchMoviesCollectionFailure(errorMessage))
      })

  }
}
